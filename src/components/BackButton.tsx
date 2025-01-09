import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
};