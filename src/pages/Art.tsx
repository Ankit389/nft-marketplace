import { useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import { SearchBar } from "@/components/SearchBar";
import { BackButton } from "@/components/BackButton";
import { Palette, Brush, Sparkles } from "lucide-react";

const artSpotlight = [
  {
    id: "art1",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    name: "Monotype: Neural Impressions",
    price: "0.25",
    creator: "ArtistOne"
  },
  {
    id: "art2",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
    name: "Solitude by Terrell James",
    price: "0.15",
    creator: "ArtistTwo"
  },
  {
    id: "art3",
    image: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7",
    name: "Big Hugs Collection",
    price: "0.31",
    creator: "ArtistThree"
  },
  {
    id: "art4",
    image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1",
    name: "TheMoodLens",
    price: "0.24",
    creator: "ArtistFour"
  }
];

const trendingDigitalArt = [
  {
    id: "digital1",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853",
    name: "Rare Pepe Edition",
    price: "0.35",
    creator: "DigitalArtist1"
  },
  {
    id: "digital2",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
    name: "AUTODENZA",
    price: "0.28",
    creator: "DigitalArtist2"
  },
  {
    id: "digital3",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    name: "Spells of Genesis",
    price: "0.42",
    creator: "DigitalArtist3"
  },
  {
    id: "digital4",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca",
    name: "Apes Bamboo Club",
    price: "0.45",
    creator: "DigitalArtist4"
  }
];

const trendingDrawings = [
  {
    id: "draw1",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    name: "AFYUST Collection",
    price: "0.47",
    creator: "TraditionalArtist1"
  },
  {
    id: "draw2",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    name: "ParticleCollection",
    price: "0.62",
    creator: "TraditionalArtist2"
  },
  {
    id: "draw3",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    name: "MidnightStreets",
    price: "0.39",
    creator: "TraditionalArtist3"
  },
  {
    id: "draw4",
    image: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7",
    name: "MetaVisions Exclusives",
    price: "0.55",
    creator: "TraditionalArtist4"
  }
];

const Art = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterArtworks = (artworks: typeof artSpotlight) => {
    return artworks.filter((art) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        art.name.toLowerCase().includes(searchLower) ||
        art.creator.toLowerCase().includes(searchLower) ||
        art.price.includes(searchQuery)
      );
    });
  };

  return (
    <div className="min-h-screen w-full">
      <div className="relative hero-gradient py-12 mb-8">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-4">
              <Palette className="h-8 w-8 text-primary" />
              <Brush className="h-8 w-8 text-primary" />
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Art Spotlight Gallery
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover unique digital masterpieces and traditional artwork from talented artists worldwide. 
              Each piece tells a story, captures emotions, and pushes the boundaries of creativity.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Art Spotlight */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Art Spotlight</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Featured artworks that showcase exceptional creativity and artistic excellence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterArtworks(artSpotlight).map((art) => (
              <NFTCard key={art.id} {...art} />
            ))}
          </div>
        </div>

        {/* Trending in Digital Art */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Trending in Digital Art</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Explore the latest trends in digital art and NFT collections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterArtworks(trendingDigitalArt).map((art) => (
              <NFTCard key={art.id} {...art} />
            ))}
          </div>
        </div>

        {/* Trending in Drawings and Paintings */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Brush className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Trending in Drawings and Paintings</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Traditional artworks reimagined for the digital age
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterArtworks(trendingDrawings).map((art) => (
              <NFTCard key={art.id} {...art} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
