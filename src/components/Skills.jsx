import Reveal from "./Reveal";

import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCpu,
  FiCloud,
} from "react-icons/fi";


import {
  FaPython,
  FaJava,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaAws,
  FaLinux,
  FaGithub,
  FaFigma,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";


import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJupyter,
  SiTensorflow,
} from "react-icons/si";



function Skills() {


  const skillGroups = [

    {
      id: "programming",

      icon: <FiCode />,

      title: "Programming Languages",

      skills: [

        {
  name: "Python",
  logo: <FaPython className="text-[#3776AB]" />,
},

{
  name: "Java",
  logo: <FaJava className="text-[#F89820]" />,
},

{
  name: "C++",
  logo: <SiCplusplus className="text-[#00599C]" />,
},

{
  name: "JavaScript",
  logo: <SiJavascript className="text-[#F7DF1E]" />,
},

{
  name: "PHP",
  logo: <FaPhp className="text-[#777BB4]" />,
},

      ],
    },



    {
      id: "frontend",

      icon: <FiMonitor />,

      title: "Frontend Development",

      skills: [

        {
  name:"React",
  logo:<FaReact className="text-[#61DAFB]" />,
},

{
  name:"Angular",
  logo:<FaAngular className="text-[#DD0031]" />,
},

{
  name:"HTML",
  logo:<FaHtml5 className="text-[#E34F26]" />,
},

{
  name:"CSS",
  logo:<FaCss3Alt className="text-[#1572B6]" />,
},

{
  name:"Tailwind CSS",
  logo:<SiTailwindcss className="text-[#06B6D4]" />,
},

      ],
    },



    {
      id: "backend",

      icon: <FiServer />,

      title: "Backend Development",

      skills: [

        {
  name:"FastAPI",
  logo:<SiFastapi className="text-[#009688]" />,
},

{
  name:"Node.js",
  logo:<FaNodeJs className="text-[#339933]" />,
},

{
  name:"Laravel",
  logo:<SiLaravel className="text-[#FF2D20]" />,
},

      ],
    },



    {
      id: "database",

      icon: <FiDatabase />,

      title: "Database",

      skills: [

        {
  name:"MySQL",
  logo:<SiMysql className="text-[#4479A1]" />,
},

{
  name:"PostgreSQL",
  logo:<SiPostgresql className="text-[#4169E1]" />,
},

{
  name:"MongoDB",
  logo:<SiMongodb className="text-[#47A248]" />,
},

      ],
    },



    {
      id: "ai",

      icon: <FiCpu />,

      title: "AI & Data Science",

      skills: [

        {
  name:"Machine Learning",
  logo:<SiTensorflow className="text-[#FF6F00]" />,
},

{
  name:"Python AI",
  logo:<FaPython className="text-[#3776AB]" />,
},

{
  name:"Jupyter Notebook",
  logo:<SiJupyter className="text-[#F37626]" />,
},

      ],
    },



    {
      id: "cloud",

      icon: <FiCloud />,

      title: "Cloud & Tools",

      skills: [

        {
  name:"AWS",
  logo:<FaAws className="text-[#FF9900]" />,
},

{
  name:"Linux",
  logo:<FaLinux className="text-[#FCC624]" />,
},

{
  name:"GitHub",
  logo:<FaGithub className="text-white" />,
},

{
  name:"Figma",
  logo:<FaFigma className="text-[#F24E1E]" />,
},

{
  name:"Docker",
  logo:<FaDocker className="text-[#2496ED]" />,
},

      ],
    },

  ];




  return (

    <section
      id="skills"

      className="
        relative
        py-24
        overflow-hidden
        bg-[#070714]
      "
    >


      {/* Background glow */}

      <div
        className="
          absolute
          top-20
          left-[-150px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#FF7350]
          opacity-[0.06]
          blur-[120px]
        "
      />


      <div
        className="
          absolute
          bottom-10
          right-[-100px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#8B7CFF]
          opacity-[0.06]
          blur-[120px]
        "
      />




      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-20
        "
      >



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
            "
          >
            Skills
          </p>


          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            My Technical Skills
          </h2>


          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-400
            "
          >
            Technologies and tools I use to design,
            develop and build modern software solutions.
          </p>


        </div>





        <Reveal>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >


          {
            skillGroups.map((group)=>(


              <div

                key={group.id}

                className="
                  group
                  bg-[#121222]
                  rounded-3xl
                  p-8
                  border
                  border-white/10
                  hover:border-[#FF7350]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "

              >



                <div

                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#FF7350]/10
                    text-[#FF7350]
                    text-3xl
                    mb-6
                    group-hover:bg-[#FF7350]
                    group-hover:text-white
                    transition-all
                  "

                >

                  {group.icon}

                </div>





                <h3

                  className="
                    text-xl
                    font-semibold
                    text-white
                    mb-6
                  "

                >

                  {group.title}

                </h3>





                <div

                  className="
                    flex
                    flex-wrap
                    gap-3
                  "

                >


                {
                  group.skills.map((skill)=>(


                    <div

                      key={skill.name}

                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-3
                        rounded-xl
                        bg-[#070714]
                        border
                        border-white/10
                        text-gray-300
                        hover:text-[#FF7350]
                        hover:border-[#FF7350]/50
                        transition-all
                      "

                    >


                      <span
                        className="
                          text-2xl
                        "
                      >
                        {skill.logo}
                      </span>


                      <span
                        className="
                          text-sm
                        "
                      >
                        {skill.name}
                      </span>


                    </div>


                  ))
                }


                </div>


              </div>


            ))
          }


          </div>


        </Reveal>



      </div>


    </section>

  );
}


export default Skills;