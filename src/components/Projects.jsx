import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        bg-[#0b0b18]
        section-glow
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-16
        "
      >

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div
          className="
            text-center
            mb-16
          "
        >

          <p
            className="
              text-[#FF7350]
              uppercase
              tracking-[4px]
              text-sm
              font-medium
            "
          >
            Projects
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mt-4
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mt-5
              text-gray-400
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Some of my software, AI, web and IoT projects.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;

