export default function Who() {
  return (
    <section id="about" className="mt-20 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-20">
          {/* LEFT */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Who am I?
          </h2>

          {/* RIGHT */}
          <p className="font-semibold text-md text-neutral-200 leading-8 tracking-wide md:max-w-2xl">
            Hi, I’m Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over{" "}
            <span className="text-neutral-100">3 years of experience,</span> I
            specialize in crafting interactive, responsive, and user-friendly
            websites that deliver exceptional digital experiences. My expertise
            spans across various industries, including e-commerce, education,
            and SaaS. I am proficient in modern front-end technologies, clean
            coding practices, and performance optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
