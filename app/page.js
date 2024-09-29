import Header from "@/app/Components/Header";
import HaberBulteni from "@/app/Components/HaberBulteni";
import Menu from "@/app/Components/Menu";
import Footer from "@/app/Components/Footer";


export default function Home() {
  return (
    <div className="container max-w-screen-md mx-auto">
      <Header />
      <HaberBulteni />
      <Menu />
      <Footer />
    </div>
  );
}
