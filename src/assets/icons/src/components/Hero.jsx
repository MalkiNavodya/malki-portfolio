import { motion } from "framer-motion";

import cv from "../assets/documents/Malki_Navodya_CV.pdf";
import profile from "../assets/images/profile/malki.jpeg";

import {
  FiDownload,
  FiMail
} from "react-icons/fi";


function Hero() {

  return (

    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-32
        px-6
        overflow-hidden
        bg-[#070714]
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >



        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

        >


          <p
            className="
              text-primary
              uppercase
              tracking-[4px]
              text-sm
              mb-5
            "
          >
            Hello, I'm
          </p>



          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              leading-tight
            "
          >

            Malki
            <br />

            Senevirathna

          </h1>



          <h2
            className="
              mt-6
              text-2xl
              md:text-3xl
              font-semibold
              text-gray-200
            "
          >

            Software Developer
            <br />

            <span className="text-primary">
              AI & Full Stack Engineer
            </span>

          </h2>




          <p
            className="
              mt-6
              max-w-xl
              text-gray-400
              leading-relaxed
              text-lg
            "
          >

            I build scalable web applications,
            explore artificial intelligence,
            cloud technologies,
            and create innovative solutions
            for real-world problems.

          </p>





          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              gap-5
              mt-8
            "
          >



            {/* DOWNLOAD CV */}

            <a

              href={cv}

              download="Malki_Navodya_CV.pdf"

              className="
                bg-primary
                px-7
                py-3
                rounded-full
                flex
                items-center
                gap-2
                font-semibold
                text-white
                shadow-orange
                hover:scale-105
                transition
              "

            >

              <FiDownload />

              Download CV

            </a>





            {/* CONTACT */}

            <a

              href="#contact"

              className="
                border
                border-primary
                text-primary
                px-7
                py-3
                rounded-full
                flex
                items-center
                gap-2
                font-semibold
                hover:bg-primary
                hover:text-white
                transition
              "

            >

              <FiMail />

              Contact Me

            </a>



          </div>





          {/* Availability badge */}

          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              bg-white/5
              border
              border-white/10
              text-gray-300
              text-sm
            "
          >

            <span
              className="
                w-3
                h-3
                rounded-full
                bg-green-400
              "
            />

            Open to Software Engineering Internships

          </div>



        </motion.div>









        {/* RIGHT SIDE */}



        <motion.div

          initial={{
            opacity:0,
            scale:0.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="
            relative
            flex
            justify-center
          "

        >




          {/* Glow Circle */}


          <div
            className="
              absolute
              w-80
              h-80
              bg-primary/20
              rounded-full
              blur-3xl
            "
          />





          {/* Profile Image */}


          <motion.div

            animate={{
              y:[0,-20,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
              relative
              w-72
              h-72
              md:w-96
              md:h-96
              rounded-full
              overflow-hidden
              border-4
              border-primary
              shadow-orange
            "

          >


            <img

              src={profile}

              alt="Malki"

              className="
                w-full
                h-full
                object-cover
              "

            />


          </motion.div>






          {/* React Card */}


          <motion.div

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
              absolute
              top-10
              right-5
              bg-[#121222]
              px-5
              py-3
              rounded-xl
              border
              border-white/10
              text-white
            "

          >

            ⚛️ React

          </motion.div>







          {/* Python Card */}


          <motion.div

            animate={{
              y:[0,15,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
              absolute
              bottom-20
              left-0
              bg-[#121222]
              px-5
              py-3
              rounded-xl
              border
              border-white/10
              text-white
            "

          >

            🐍 Python

          </motion.div>






          {/* AWS Card */}


          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              duration:2.5,
              repeat:Infinity
            }}

            className="
              absolute
              bottom-5
              right-5
              bg-[#121222]
              px-5
              py-3
              rounded-xl
              border
              border-white/10
              text-white
            "

          >

            ☁️ AWS

          </motion.div>




        </motion.div>



      </div>


    </section>

  );

}


export default Hero;