import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { NFTCard } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Menu, Home, Compass, Gavel, User, Newspaper, Bell, Wallet } from "lucide-react";
import { WalletConnect } from "@/components/WalletConnect";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthSheet } from "@/components/AuthSheet";

const featuredNFTs = [
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    name: "Digital Dreams #123",
    price: "2.5",
    creator: "CryptoArtist",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    name: "Neon Genesis #456",
    price: "1.8",
    creator: "PixelMaster",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    name: "Mountain Peaks #789",
    price: "3.2",
    creator: "NatureNFT",
  },
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    name: "Tech Future #101",
    price: "4.0",
    creator: "FutureArt",
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    name: "Digital Realm #202",
    price: "2.8",
    creator: "TechnoArt",
  }
];

const trendingCollections = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    name: "Cyber Punk Series",
    price: "5.5",
    creator: "CyberCreator",
  },
  {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    name: "Future Light #303",
    price: "3.7",
    creator: "LightMaster",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    name: "Code Art #404",
    price: "2.9",
    creator: "CodeArtist",
  },
  {
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    name: "Tech Watch #505",
    price: "1.5",
    creator: "WatchMaker",
  },
  {
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    name: "Digital Office #606",
    price: "4.2",
    creator: "OfficeArt",
  },
  {
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    name: "Sky View #707",
    price: "3.3",
    creator: "SkyMaster",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    name: "Tech Life #808",
    price: "2.7",
    creator: "TechLife",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    name: "Circuit Dreams #909",
    price: "3.9",
    creator: "CircuitPro",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    name: "Code Master #1010",
    price: "4.5",
    creator: "CodeMaster",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    name: "Digital Work #1111",
    price: "2.4",
    creator: "WorkArt",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    name: "Tech Woman #1212",
    price: "3.6",
    creator: "WomanTech",
  },
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    name: "Robot Art #1313",
    price: "5.1",
    creator: "RoboCreator",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    name: "Matrix Vision #1414",
    price: "4.7",
    creator: "MatrixArt",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    name: "Team Tech #1515",
    price: "3.4",
    creator: "TechTeam",
  },
  {
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    name: "Digital Style #1616",
    price: "2.6",
    creator: "StyleMaster",
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleStartCreating = () => {
    // Redirect to art creation page
    window.location.href = '/art';
  };

  const filteredNFTs = featuredNFTs.filter((nft) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      nft.name.toLowerCase().includes(searchLower) ||
      nft.creator.toLowerCase().includes(searchLower) ||
      nft.price.includes(searchQuery)
    );
  });

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold gradient-text">NFTVerse</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center gap-2">
                <Home size={18} />
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={() => window.location.href = '/art'}
              >
                <Compass size={18} />
                Art Gallery
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Gavel size={18} />
                Auctions
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <User size={18} />
                Profile
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Newspaper size={18} />
                Market News
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center text-white">
                  2
                </span>
              </Button>
              
              <AuthSheet />
              <WalletConnect />

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4">
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Home size={18} />
                      Home
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Compass size={18} />
                      Explore
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Gavel size={18} />
                      Auctions
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <User size={18} />
                      Profile
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Newspaper size={18} />
                      Market News
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div className="relative hero-gradient">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Discover, Collect, and Sell <br /> Extraordinary NFTs
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Welcome to the world of digital art and collectibles. Explore unique NFTs created by talented artists from around the globe.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="secondary" 
                  className="hover:scale-105 transition-transform"
                  onClick={handleStartCreating}
                >
                  Start Creating
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 space-y-4">
            <SearchBar onSearch={setSearchQuery} />
            <CategoryFilter />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured NFTs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredNFTs.map((nft, index) => (
                <NFTCard key={index} {...nft} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Trending Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingCollections.map((nft, index) => (
                <NFTCard key={`trend-${index}`} {...nft} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;