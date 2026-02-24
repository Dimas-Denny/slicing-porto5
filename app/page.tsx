import Navbar from "@/components/layout/Navbar";
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
    <main className="py-4">
      <div className="-mx-4 -mt-4">
        <Navbar />
      </div>

      <section id="home" className="relative ">
        <div
          className="
      absolute inset-0
      bg-[url('/png/background.png')]
      md:bg-[url('/png/background1.png')]
      bg-cover bg-center bg-no-repeat
    "
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-6">
          <Hero />
        </div>
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
