import { useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import { SearchBar } from "@/components/SearchBar";
import { BackButton } from "@/components/BackButton";

const musicNFTs = [
  {
    id: "music1",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    name: "Symphony #1",
    price: "0.35",
    creator: "MusicArtist1"
  },
  {
    id: "music2",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    name: "Vinyl Collection",
    price: "0.28",
    creator: "MusicArtist2"
  },
  {
    id: "music3",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    name: "Beat Masters",
    price: "0.42",
    creator: "MusicArtist3"
  },
  {
    id: "music4",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    name: "Digital Audio",
    price: "0.45",
    creator: "MusicArtist4"
  }
];

const MusicCollectibles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNFTs = musicNFTs.filter((nft) => {
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
        <h1 className="text-4xl font-bold mb-8 mt-4 gradient-text">Music Collectibles</h1>
        
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

export default MusicCollectibles;
