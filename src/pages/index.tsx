import { AppBar } from "@/components/AppBar";
import { VideoGrid } from "@/components/VideGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar/>
      <VideoGrid/>
    </div>
  );
}
