import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-3">
      <h1 className="text-4xl text-center text-foreground font-bold">
        Find Out Your AI Companion
      </h1>
      <Button asChild >
        <a href="#explore">Explore</a>
      </Button>
    </div>
  );
};

export default LandingPage;

