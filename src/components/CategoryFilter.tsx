import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "All", path: "/" },
  { name: "Art", path: "/art" },
  { name: "Music", path: "/music" },
  { name: "Sports", path: "/sports" },
  { name: "Gaming", path: "/gaming" },
  { name: "Photography", path: "/photography" },
  { name: "Collectibles", path: "/collectibles" },
  { name: "Memberships", path: "/memberships" },
  { name: "PFPs", path: "/pfps" }
];

export const CategoryFilter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="secondary"
          className="rounded-lg whitespace-nowrap bg-[#181A20] hover:bg-[#2B2F36] text-white border border-[#2B2F36]"
          onClick={() => navigate(category.path)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};