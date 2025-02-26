import { Poppins } from "@/utils/fonts";
import Hero from "@/views/Hero";
import WorkBetter from "@/views/WorkBetter";
import BoostProductivity from "@/views/BoostProductivity";
export default function Home() {

  return (
    <>
      <header></header>
      <main className={Poppins.className}>
        <Hero></Hero>
        <WorkBetter></WorkBetter>
        <BoostProductivity></BoostProductivity>
      </main>
      <footer></footer>
    </>
  );
}
