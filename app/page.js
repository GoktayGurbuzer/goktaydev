import Header from "@/app/Components/Header";
import HaberBulteni from "@/app/Components/HaberBulteni";


export default function Home() {
  return (
    <div className="container max-w-screen-md mx-auto my-4">
      <Header />
      <HaberBulteni />
    </div>
  );
}
