import { useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import { SearchBar } from "@/components/SearchBar";
import { BackButton } from "@/components/BackButton";

const sportsNFTs = [
  {
    id: "sports1",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    name: "Basketball Legends",
    price: "0.47",
    creator: "SportsArtist1"
  },
  {
    id: "sports2",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    name: "Soccer Moments",
    price: "0.62",
    creator: "SportsArtist2"
  },
  {
    id: "sports3",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    name: "Tennis Champions",
    price: "0.39",
    creator: "SportsArtist3"
  },
  {
    id: "sports4",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    name: "F1 Racing",
    price: "0.55",
    creator: "SportsArtist4"
  }
];

const Sports = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNFTs = sportsNFTs.filter((nft) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      nft.name.toLowerCase().includes(searchLower) ||
      nft.creator.toLowerCase().includes(searchLower) ||
      nft.price.includes(searchQuery)
    );
  });

  return (
    <div className="min-h-screen w-full pt-16">
      <div className="container mx-auto px-4 py-12">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 mt-4 gradient-text">Sports NFTs</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
