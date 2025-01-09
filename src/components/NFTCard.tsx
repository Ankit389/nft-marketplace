import { Card } from "@/components/ui/card";
import { Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Web3 from 'web3';

interface NFTCardProps {
  image: string;
  name: string;
  price: string;
  creator: string;
  id?: string;
}

export const NFTCard = ({ image, name, price, creator, id = "123" }: NFTCardProps) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const web3 = new Web3(window.ethereum);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + "/nft/" + id);
    toast.success("Link copied to clipboard!");
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success("Added to favorites!");
  };

  const handlePlaceBid = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsProcessing(true);

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        toast.error("Please install MetaMask to place bids");
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      // Check if user is logged in
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Please login to place bids");
        return;
      }

      // Request MetaMask connection
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      if (accounts.length === 0) {
        toast.error("Please connect your MetaMask wallet");
        return;
      }

      // Convert price to Wei
      const priceInWei = web3.utils.toWei(price, 'ether');

      // Simulate transaction
      const transactionParams = {
        from: accounts[0],
        to: "0x123...", // Contract address would go here
        value: priceInWei,
        data: "0x", // Contract interaction data would go here
      };

      // Send transaction
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParams],
      });

      // If transaction is successful
      if (txHash) {
        toast.success("Purchase successful! Transaction hash: " + txHash.slice(0, 6) + "...");
        
        // Store purchase data in local storage since we don't have a purchases table
        const purchases = JSON.parse(localStorage.getItem('nft_purchases') || '[]');
        purchases.push({
          user_id: user.id,
          nft_id: id,
          price: price,
          transaction_hash: txHash,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('nft_purchases', JSON.stringify(purchases));
      }
    } catch (error: any) {
      console.error('Purchase error:', error);
      if (error.code === 4001) {
        toast.error("Transaction rejected");
      } else {
        toast.error("Failed to complete purchase. Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card 
      className="group overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl glass-card cursor-pointer bg-[#181A20]"
      onClick={() => navigate(`/nft/${id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex gap-2">
          <button 
            className="rounded-full bg-[#181A20]/90 p-2 backdrop-blur-md transition-colors hover:bg-[#181A20]"
            onClick={handleLike}
          >
            <Heart className="h-5 w-5 text-white" />
          </button>
          <button 
            className="rounded-full bg-[#181A20]/90 p-2 backdrop-blur-md transition-colors hover:bg-[#181A20]"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-white">{name}</h3>
        <p className="text-sm text-gray-400">by {creator}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-[#F0B90B]">{price} ETH</span>
          <button 
            className="rounded-lg bg-[#F0B90B] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#F0B90B]/90 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePlaceBid}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Bid"}
          </button>
        </div>
      </div>
    </Card>
  );
};