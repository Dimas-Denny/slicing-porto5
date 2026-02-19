import Hero from "@/components/containers/hero/Hero";
import Who from "@/components/containers/who/Who";
import Stats from "@/components/containers/stats/Stats";
import Career from "@/components/containers/career/Career";
import Core from "@/components/containers/core/Core";
import Comparison from "@/components/containers/comparison/Comparison";
import LandingPage from "@/components/containers/landing-page/LandingPage";
import Testimony from "@/components/containers/testimony/Testimony";
import Question from "@/components/containers/question/Question";
import Drop from "@/components/containers/drophere/Drop";

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

      <section id="career">
        <Career />
      </section>

      <section id="coreSkill">
        <Core />
      </section>

      <section id="comparison">
        <Comparison />
      </section>

      <section id="landingpage">
        <LandingPage />
      </section>

      <section id="testimony">
        <Testimony />
      </section>

      <section id="question">
        <Question />
      </section>

      <section id="drop">
        <Drop />
      </section>
    </main>
  );
}
