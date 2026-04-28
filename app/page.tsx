import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <Hero />
    </main>
  );
}