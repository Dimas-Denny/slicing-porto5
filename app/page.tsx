import Hero from "@/components/containers/hero/Hero";
import Who from "@/components/containers/who/Who";
import Stats from "@/components/containers/stats/Stats";

export default function Home() {
  return (
    <main className="px-6 py-4">
      <section id="hero">
        <Hero />
      </section>

      <section id="who">
        <Who />
      </section>

      <section id="stats">
        <Stats />
      </section>
    </main>
  );
}
