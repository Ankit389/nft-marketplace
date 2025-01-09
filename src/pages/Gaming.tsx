import { useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import { SearchBar } from "@/components/SearchBar";
import { BackButton } from "@/components/BackButton";

const gamingNFTs = [
  {
    id: "gaming1",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    name: "Pixel Warriors",
    price: "0.35",
    creator: "GameArtist1"
  },
  {
    id: "gaming2",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc",
    name: "Crypto Legends",
    price: "0.28",
    creator: "GameArtist2"
  },
  {
    id: "gaming3",
    image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9",
    name: "Virtual Worlds",
    price: "0.42",
    creator: "GameArtist3"
  },
  {
    id: "gaming4",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    name: "Game Assets",
    price: "0.45",
    creator: "GameArtist4"
  }
];

const Gaming = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNFTs = gamingNFTs.filter((nft) => {
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
        <h1 className="text-4xl font-bold mb-8 mt-4 gradient-text">Gaming NFTs</h1>
        
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

export default Gaming;
