import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NFTDetail from "./pages/NFTDetail";
import Art from "./pages/Art";
import MusicCollectibles from "./pages/MusicCollectibles";
import Sports from "./pages/Sports";
import Gaming from "./pages/Gaming";
import Photography from "./pages/Photography";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/art" element={<Art />} />
          <Route path="/music" element={<MusicCollectibles />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;