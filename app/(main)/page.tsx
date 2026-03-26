import ContactMe from "@/components/contact-me";
import ProfileCard from "@/components/profile-card";
import ProjectSection from "@/components/projects-section";
import TechnicalSkills from "@/components/technical-skills";
import Testimonials from "@/components/testimonials";

export default function Welcome() {
  return (
    <>
      <section id="home">
        <ProfileCard />
      </section>
      <section className="w-full mt-24 pt-16" id="skills">
        <TechnicalSkills />
      </section>
      <section className="w-full mt-24 pt-16" id="projects">
        <ProjectSection />
      </section>
      <section className="w-full mt-24">
        <Testimonials />
      </section>
      <section className="w-full mt-32 pt-16" id="contact">
        <ContactMe />
      </section>
    </>
  );
}
