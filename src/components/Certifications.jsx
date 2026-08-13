function Certifications() {


  const certificates = [

    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS Academy)",
      year: "2025",
      description:
        "Introduction to cloud computing concepts, AWS services, security, and cloud architecture."
    },


    {
      title: "University IT Courses",
      issuer: "SIBA Campus",
      year: "2025",
      description:
        "Completed academic coursework in programming, databases, networking, software engineering, and web development."
    },


    {
      title: "Python Programming Certification",
      issuer: "Online Learning Platform",
      year: "2025",
      description:
        "Covered Python programming fundamentals, problem solving, and application development."
    },


    {
      title: "AI & Machine Learning Training",
      issuer: "Online Learning Platform",
      year: "2026",
      description:
        "Explored artificial intelligence concepts, machine learning workflows, and data analysis."
    }

  ];



  return (

    <section
      id="certifications"
      className="
        py-24
        bg-[#070714]
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          md:px-12
          lg:px-16
        "
      >


        {/* Heading */}

        <div
          className="
            text-center
            mb-16
            fade-up
          "
        >

          <p
            className="
              text-[#FF7350]
              uppercase
              tracking-[4px]
            "
          >
            Certifications
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
            Learning & Achievements
          </h2>


          <p
            className="
              mt-5
              text-gray-400
            "
          >
            Professional certifications and continuous learning journey.
          </p>


        </div>





        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >

          {
            certificates.map((certificate,index)=>(

              <div
                key={index}
                className="
                  fade-up
                  bg-[#121222]
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-[#FF7350]
                  transition
                "
              >


                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-3
                  "
                >
                  {certificate.title}
                </h3>



                <p
                  className="
                    text-[#FF7350]
                    mb-2
                  "
                >
                  {certificate.issuer}
                </p>



                <p
                  className="
                    text-gray-500
                    mb-5
                  "
                >
                  {certificate.year}
                </p>



                <p
                  className="
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {certificate.description}
                </p>



                <button
                  className="
                    mt-6
                    px-6
                    py-3
                    rounded-full
                    bg-[#FF7350]
                    text-white
                    hover:scale-105
                    transition
                  "
                >
                  View Certificate
                </button>



              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Certifications;