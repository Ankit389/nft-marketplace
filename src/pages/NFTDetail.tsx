import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { BackButton } from "@/components/BackButton";

  const nft = {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    name: "Digital Dreams #123",
    price: "2.5",
    creator: "CryptoArtist",
    description: "A stunning piece of digital art that captures the essence of dreams and imagination. Created with precision and passion.",
    attributes: [
      { trait: "Background", value: "Nebula" },
      { trait: "Style", value: "Abstract" },
      { trait: "Colors", value: "Multi" }
    ]
  };

const NFTDetail = () => {
  const { id } = useParams();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: nft.name,
        text: `Check out this amazing NFT: ${nft.name}`,
        url: window.location.href
      });
    } catch (err) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleLike = () => {
    toast.success("Added to favorites!");
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* NFT Image */}
          <div className="relative">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute right-4 top-4 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
                onClick={handleLike}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{nft.name}</h1>
              <p className="text-muted-foreground">Created by {nft.creator}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-lg font-semibold mb-2">Current Price</p>
              <p className="text-3xl font-bold">{nft.price} ETH</p>
              <Button className="w-full mt-4">Place Bid</Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">{nft.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Attributes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {nft.attributes.map((attr, index) => (
                  <div key={index} className="p-3 border rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">{attr.trait}</p>
                    <p className="font-semibold">{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleShare}
              >
                Share <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
