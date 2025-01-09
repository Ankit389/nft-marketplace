import { useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import { SearchBar } from "@/components/SearchBar";
import { BackButton } from "@/components/BackButton";

const photographyNFTs = [
  {
    id: "photo1",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
    name: "Nature Collection",
    price: "0.47",
    creator: "PhotoArtist1"
  },
  {
    id: "photo2",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07",
    name: "Urban Stories",
    price: "0.62",
    creator: "PhotoArtist2"
  },
  {
    id: "photo3",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    name: "Abstract Moments",
    price: "0.39",
    creator: "PhotoArtist3"
  },
  {
    id: "photo4",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
    name: "Light & Shadow",
    price: "0.55",
    creator: "PhotoArtist4"
  }
];

const Photography = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNFTs = photographyNFTs.filter((nft) => {
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
        <h1 className="text-4xl font-bold mb-8 mt-4 gradient-text">Photography NFTs</h1>
        
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

export default Photography;
