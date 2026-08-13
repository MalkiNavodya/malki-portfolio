import {
  FiMail,
  FiGithub,
  FiLinkedin
} from "react-icons/fi";

import Reveal from "./Reveal";


function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-5
        p-5
        bg-[#121222]
        border
        border-white/10
        rounded-2xl
        hover:border-[#FF7350]
        transition
        duration-300
      "
    >

      <div
        className="
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-xl
          bg-[#FF7350]/10
          text-[#FF7350]
          text-xl
        "
      >
        {icon}
      </div>


      <div>
        <h3 className="text-white font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {value}
        </p>
      </div>

    </a>
  );
}



function Contact() {

  return (

    <section
      id="contact"
      className="
        relative
        py-24
        bg-[#0b0b18]
        overflow-hidden
      "
    >


      {/* Background Glow */}

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
          blur-[130px]
        "
      />


      <div
        className="
          absolute
          bottom-10
          right-[-150px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#8B7CFF]
          opacity-[0.06]
          blur-[130px]
        "
      />



      <div
        className="
          relative
          max-w-4xl
          mx-auto
          px-6
          sm:px-8
          lg:px-16
        "
      >


        {/* Heading */}

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
            Contact
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
            Let's Build Something
            <br />
            Meaningful
          </h2>


          <p
            className="
              mt-5
              text-gray-400
              max-w-xl
              mx-auto
            "
          >
            I am currently looking for software
            engineering internship opportunities.
            Feel free to reach out.
          </p>



          <div
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              px-5
              py-3
              rounded-full
              bg-[#121222]
              border
              border-white/10
              text-white
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

            Open to Software Engineering Internships

          </div>


        </div>





        <Reveal>

          <div
            className="
              grid
              gap-5
              max-w-2xl
              mx-auto
            "
          >


            <ContactCard
              icon={<FiMail />}
              title="Email"
              value="mnavodyasenevirathna@gmail.com"
              link="mailto:mnavodyasenevirathna@gmail.com"
            />


            <ContactCard
              icon={<FiGithub />}
              title="GitHub"
              value="github.com/MalkiNavodya"
              link="https://github.com/MalkiNavodya"
            />


            <ContactCard
              icon={<FiLinkedin />}
              title="LinkedIn"
              value="linkedin.com/in/NavodyaSenevirathna"
              link="https://www.linkedin.com/in/navodya-senevirathna-2963622bb/"
            />


          </div>

        </Reveal>


      </div>


    </section>

  );
}


export default Contact;