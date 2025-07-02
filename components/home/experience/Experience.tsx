import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "UpWork",
    position: "Freelancer",
    time: "June 2022 - Present",
    location: "Remote",
    description:
      "I am working a Freelancer with MERN stack & WordPress Developer",
    tech: [
      
      "React",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "Mongoose"
      
    ],
  },

];
