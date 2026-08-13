import { Link, useParams } from "react-router-dom";
import {
  FiGithub,
  FiArrowLeft,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";

import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  // Find the selected project using the URL id
  const project = projects.find((item) => item.id === id);

  // =========================
  // PROJECT NOT FOUND
  // =========================

  if (!project) {
    return (
      <main className="min-h-screen bg-[#070714] flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-[#FF7350] uppercase tracking-[4px] text-sm mb-4">
            Error
          </p>

          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/#projects"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#FF7350]
              text-white
              font-semibold
              hover:bg-[#ff8566]
              transition
            "
          >
            <FiArrowLeft />
            Back to Projects
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070714] text-white">

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          fixed
          top-0
          right-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#FF7350]
          opacity-[0.05]
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          fixed
          bottom-0
          left-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#8B7CFF]
          opacity-[0.05]
          blur-[150px]
          pointer-events-none
        "
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          py-16
          md:py-24
        "
      >

        {/* =========================================
            BACK BUTTON
        ========================================== */}

        <Link
          to="/#projects"
          className="
            inline-flex
            items-center
            gap-2
            text-[#FF7350]
            hover:text-[#ff9278]
            transition
            mb-10
            font-medium
          "
        >
          <FiArrowLeft />
          Back to Projects
        </Link>


        {/* =========================================
            HERO IMAGE
        ========================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-[#121222]
            shadow-[0_0_80px_rgba(255,115,80,0.08)]
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-[280px]
              sm:h-[400px]
              lg:h-[500px]
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />

          {/* Image overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#070714]/70
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

        </div>


        {/* =========================================
            PROJECT HEADER
        ========================================== */}

        <div className="mt-12">

          {/* Category / Role */}

          <div className="flex flex-wrap items-center gap-3 mb-5">

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-[#FF7350]/10
                border
                border-[#FF7350]/20
                text-[#FF7350]
                text-sm
                font-medium
              "
            >
              {project.role}
            </span>

          </div>


          {/* Title */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-tight
            "
          >
            {project.title}
            <span className="text-[#FF7350]">.</span>
          </h1>


          {/* Description */}

          <p
            className="
              mt-7
              max-w-3xl
              text-lg
              text-gray-400
              leading-relaxed
            "
          >
            {project.description}
          </p>

        </div>


        {/* =========================================
            TECHNOLOGIES
        ========================================== */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold text-white mb-5">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">

            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#121222]
                  border
                  border-white/10
                  text-gray-300
                  text-sm
                  hover:border-[#FF7350]/50
                  hover:text-[#FF7350]
                  transition
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </section>


        {/* =========================================
            OVERVIEW + FEATURES
        ========================================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
            mt-16
          "
        >

          {/* Overview */}

          <div
            className="
              rounded-3xl
              bg-[#121222]
              border
              border-white/10
              p-8
              hover:border-[#FF7350]/30
              transition
            "
          >

            <p
              className="
                text-[#FF7350]
                uppercase
                tracking-[3px]
                text-xs
                font-medium
                mb-4
              "
            >
              Overview
            </p>

            <h2 className="text-2xl font-bold text-white mb-5">
              About This Project
            </h2>

            <p
              className="
                text-gray-400
                leading-relaxed
              "
            >
              {project.overview}
            </p>

          </div>


          {/* Features */}

          <div
            className="
              rounded-3xl
              bg-[#121222]
              border
              border-white/10
              p-8
              hover:border-[#FF7350]/30
              transition
            "
          >

            <p
              className="
                text-[#FF7350]
                uppercase
                tracking-[3px]
                text-xs
                font-medium
                mb-4
              "
            >
              Highlights
            </p>

            <h2 className="text-2xl font-bold text-white mb-5">
              Key Features
            </h2>

            <div className="space-y-4">

              {project.features?.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-6
                      h-6
                      rounded-full
                      bg-[#FF7350]/10
                      text-[#FF7350]
                      flex-shrink-0
                      mt-0.5
                    "
                  >
                    <FiCheck size={14} />
                  </span>

                  <span className="text-gray-300">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =========================================
            SCREENSHOTS
        ========================================== */}

        {project.screenshots?.length > 0 && (
          <section className="mt-20">

            <div className="mb-8">

              <p
                className="
                  text-[#FF7350]
                  uppercase
                  tracking-[4px]
                  text-sm
                  font-medium
                  mb-3
                "
              >
                Visuals
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                Project Screenshots
              </h2>

              <p className="mt-3 text-gray-400">
                A closer look at the project interface and functionality.
              </p>

            </div>


            <div
              className="
                grid
                md:grid-cols-2
                gap-6
              "
            >

              {project.screenshots.map((img) => (
                <div
                  key={img}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#121222]
                  "
                >

                  <img
                    src={img}
                    alt={`${project.title} screenshot`}
                    className="
                      w-full
                      aspect-video
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>
              ))}

            </div>

          </section>
        )}


        {/* =========================================
            DEMO VIDEO
        ========================================== */}

        {project.video && (
          <section className="mt-20">

            {/* Heading */}

            <div className="mb-8">

              <p
                className="
                  text-[#FF7350]
                  uppercase
                  tracking-[4px]
                  text-sm
                  font-medium
                  mb-3
                "
              >
                Project Demo
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                See It In Action
              </h2>

              <p className="mt-3 text-gray-400">
                A quick demonstration of how this project works.
              </p>

            </div>


            {/* Video Card */}

            <div
              className="
                relative
                group
                rounded-[28px]
                p-[1px]
                bg-gradient-to-br
                from-[#FF7350]/50
                via-white/10
                to-[#8B7CFF]/40
                shadow-[0_0_60px_rgba(255,115,80,0.08)]
              "
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[27px]
                  bg-[#0d0d1c]
                  border
                  border-white/10
                "
              >

                {/* Video Header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    border-b
                    border-white/10
                    bg-white/[0.02]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="flex gap-2">

                      <span className="w-3 h-3 rounded-full bg-red-400/80" />

                      <span className="w-3 h-3 rounded-full bg-yellow-400/80" />

                      <span className="w-3 h-3 rounded-full bg-green-400/80" />

                    </div>

                    <span className="text-sm text-gray-400">
                      Project Demo
                    </span>

                  </div>


                  <span className="text-xs text-gray-500">
                    MP4
                  </span>

                </div>


                {/* Video */}

                <div className="relative aspect-video bg-black">

                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="
                      w-full
                      h-full
                      object-contain
                      bg-black
                    "
                  >

                    <source
                      src={project.video}
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.

                  </video>

                </div>


                {/* Video Footer */}

                <div
                  className="
                    px-5
                    py-4
                    flex
                    items-center
                    justify-between
                    bg-white/[0.02]
                    border-t
                    border-white/10
                  "
                >

                  <div>

                    <p className="text-white font-medium">
                      {project.title}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Project demonstration
                    </p>

                  </div>


                  <div
                    className="
                      hidden
                      sm:flex
                      items-center
                      gap-2
                      text-sm
                      text-[#FF7350]
                    "
                  >

                    <span className="w-2 h-2 rounded-full bg-[#FF7350]" />

                    Demo

                  </div>

                </div>

              </div>

            </div>

          </section>
        )}


        {/* =========================================
            GITHUB
        ========================================== */}

        {project.github && (
          <section className="mt-16">

            <div
              className="
                rounded-3xl
                bg-gradient-to-r
                from-[#121222]
                to-[#10101f]
                border
                border-white/10
                p-8
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                justify-between
                gap-6
              "
            >

              <div>

                <p className="text-[#FF7350] text-sm uppercase tracking-[3px] mb-2">
                  Source Code
                </p>

                <h2 className="text-2xl font-bold text-white">
                  Explore the Project
                </h2>

                <p className="text-gray-400 mt-2">
                  View the source code and implementation on GitHub.
                </p>

              </div>


              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#FF7350]
                  text-white
                  font-semibold
                  hover:bg-[#ff8566]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  shadow-[0_0_30px_rgba(255,115,80,0.15)]
                  whitespace-nowrap
                "
              >

                <FiGithub size={20} />

                View Source Code

                <FiExternalLink size={17} />

              </a>

            </div>

          </section>
        )}


        {/* =========================================
            BACK TO PROJECTS
        ========================================== */}

        <div className="mt-16 text-center">

          <Link
            to="/#projects"
            className="
              inline-flex
              items-center
              gap-2
              text-gray-400
              hover:text-[#FF7350]
              transition
            "
          >
            <FiArrowLeft />

            Back to all projects

          </Link>

        </div>

      </div>

    </main>
  );
}

export default ProjectDetails;

