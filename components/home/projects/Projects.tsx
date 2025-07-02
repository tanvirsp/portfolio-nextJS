import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Training Portal",
    imgSrc: "/project-imgs/agency-listing.png",
    code: "https://github.com/tanvirsp/zila-parishad-dashboard",
    projectLink: "https://zp.ajkerjamalpur.com",
    tech: ["React", "Bootstrap", "MongoDB", "Mongoose", "ExpressJS","NodeJS"],
    description: "This a traning registration website. Student can register for training and check result after successfully completing course.",
    modalContent: (
      <>
        <p>
          This a traning registration website. Student can register for training and check result after successfully completing course.
        </p>
      </>
    ),
  },
  {
    title: "GYM Management System",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://github.com/tanvirsp/GYM-Management",
    projectLink: "https://gym.ajkerjamalpur.com",
    tech: ["React", "Bootstrap", "MongoDB", "Mongoose", "ExpressJS","NodeJS"],
    description:
      "This is a GYM Management system application. A gym owner can maintance member payment system with due and advance, trainer monthly salary with advance and due. Overall get report by date range in CSV and XLS format.",
    modalContent: (
      <>
        <p>
         This is a GYM Management system application. A gym owner can maintance member payment system with due and advance, trainer monthly salary with advance and due. Overall get report by date range in CSV and XLS format.
        </p>
      
      </>
    ),
  },
 
];
