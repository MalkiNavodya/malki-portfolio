import {
  FiGithub,
  FiLinkedin,
  FiArrowUp
} from "react-icons/fi";


function Footer() {


  return (

    <footer
      className="
        relative
        bg-[#070714]
        border-t
        border-white/10
        py-12
        overflow-hidden
      "
    >


      {/* Glow */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[200px]
          bg-[#FF7350]
          opacity-[0.08]
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
          lg:px-16
        "
      >



        <div
          className="
            grid
            md:grid-cols-3
            gap-10
            items-center
          "
        >




          {/* Brand */}


          <div>


            <h2
              className="
                text-3xl
                font-bold
                text-white
              "
            >

              Malki
              <span className="text-[#FF7350]">
                .
              </span>

            </h2>



            <p
              className="
                mt-4
                text-gray-400
                leading-relaxed
                text-sm
              "
            >

              IT Undergraduate,
              Software Developer and
              AI enthusiast building
              modern technology solutions.

            </p>


          </div>







          {/* Navigation */}


          <div
            className="
              md:text-center
            "
          >


            <h3
              className="
                text-white
                font-semibold
                mb-4
              "
            >

              Quick Links

            </h3>



            <div
              className="
                flex
                flex-wrap
                md:justify-center
                gap-5
                text-gray-400
                text-sm
              "
            >

              <a
                href="#home"
                className="
                  hover:text-[#FF7350]
                  transition
                "
              >
                Home
              </a>


              <a
                href="#about"
                className="
                  hover:text-[#FF7350]
                  transition
                "
              >
                About
              </a>


              <a
                href="#skills"
                className="
                  hover:text-[#FF7350]
                  transition
                "
              >
                Skills
              </a>


              <a
                href="#projects"
                className="
                  hover:text-[#FF7350]
                  transition
                "
              >
                Projects
              </a>


              <a
                href="#contact"
                className="
                  hover:text-[#FF7350]
                  transition
                "
              >
                Contact
              </a>


            </div>


          </div>








          {/* Social */}


          <div
            className="
              md:text-right
            "
          >


            <h3
              className="
                text-white
                font-semibold
                mb-4
              "
            >

              Connect

            </h3>




            <div
              className="
                flex
                md:justify-end
                gap-4
              "
            >


              <a

                href="https://github.com/MalkiNavodya"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#121222]
                  border
                  border-white/10
                  text-gray-300
                  text-xl
                  hover:text-[#FF7350]
                  hover:border-[#FF7350]
                  transition
                "

              >

                <FiGithub />

              </a>




              <a

                href="https://www.linkedin.com/in/navodya-senevirathna-2963622bb/"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#121222]
                  border
                  border-white/10
                  text-gray-300
                  text-xl
                  hover:text-[#FF7350]
                  hover:border-[#FF7350]
                  transition
                "

              >

                <FiLinkedin />

              </a>



            </div>




            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-400
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                "
              />

              Open to Software Internships

            </div>



          </div>



        </div>






        {/* Bottom */}


        <div
          className="
            mt-12
            pt-6
            border-t
            border-white/10
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-4
          "
        >


          <p
            className="
              text-gray-500
              text-sm
            "
          >

            © {new Date().getFullYear()} Malki Navodya.
            All rights reserved.

          </p>




          <a

            href="#home"

            className="
              flex
              items-center
              gap-2
              text-gray-400
              hover:text-[#FF7350]
              transition
            "

          >

            Back to top

            <FiArrowUp />

          </a>


        </div>



      </div>


    </footer>

  );

}


export default Footer;