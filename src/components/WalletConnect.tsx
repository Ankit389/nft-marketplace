import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const WalletConnect = () => {
  const [isWalletConnecting, setIsWalletConnecting] = useState(false);

  const connectWallet = async () => {
    setIsWalletConnecting(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Clear any previous pending requests
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts'
        });
        
        if (accounts.length > 0) {
          const address = accounts[0];
          toast({
            title: "Wallet Connected",
            description: `Wallet Address: ${address.slice(0, 6)}...${address.slice(-4)}`,
          });

          // Get the current user session
          const { data: { user } } = await supabase.auth.getUser();
          
          if (user?.id) {
            const { error } = await supabase
              .from('profiles')
              .update({ wallet_address: address })
              .eq('user_id', user.id);
            
            if (error) {
              console.error('Profile update error:', error);
              toast({
                title: "Profile Update Failed",
                description: "Please try again",
                variant: "destructive",
              });
            }
          } else {
            toast({
              title: "Authentication Required",
              description: "Please sign in to connect your wallet",
              variant: "destructive",
            });
          }
        }
      } else {
        toast({
          title: "Install MetaMask",
          description: "Opening MetaMask installation page in a new window",
        });
        window.open('https://metamask.io/download/', '_blank');
      }
    } catch (error: any) {
      console.error('Wallet connection error:', error);
      
      // Handle specific MetaMask errors
      if (error.code === -32002) {
        toast({
          title: "MetaMask is already open",
          description: "Please connect in the MetaMask popup",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Connection Failed",
          description: "Please try again",
          variant: "destructive",
        });
      }
    } finally {
      setIsWalletConnecting(false);
    }
  };

  return (
    <Button 
      onClick={connectWallet}
      disabled={isWalletConnecting}
    >
      <Wallet className="mr-2 h-5 w-5" />
      {isWalletConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
};