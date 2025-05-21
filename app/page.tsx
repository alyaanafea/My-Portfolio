import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <Skills/>
        <Contacts/>
      </div>
    </main>
  );
}
