import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

const ArrowBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      className="size-10 rounded-full bg-bg-3 absolute top-6"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="size-5 text-text-1" />
    </Button>
  );
};

export default ArrowBack;
