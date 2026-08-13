import Reveal from "./Reveal";
import profile from "../assets/images/profile/malki2.png";

import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiCloud,
  FiCalendar,
  FiMapPin
} from "react-icons/fi";


function About() {


return (

<section
id="about"
className="
relative
py-24
bg-[#070714]
overflow-hidden
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
opacity-[0.07]
blur-[140px]
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
blur-[140px]
"
/>





<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
sm:px-8
lg:px-16
"
>


{/* Heading */}

<Reveal>

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
About Me
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
Building Technology With Purpose
</h2>


<p
className="
text-gray-400
mt-5
max-w-2xl
mx-auto
"
>
A passionate IT undergraduate focused on software
development, artificial intelligence, and creating
innovative technology solutions.
</p>


</div>

</Reveal>






{/* Main Content */}

<div
className="
grid
lg:grid-cols-2
gap-12
items-center
"
>




{/* Profile Card */}


<Reveal>


<div
className="
relative
flex
justify-center
"
>


<div
className="
absolute
w-[350px]
h-[350px]
rounded-full
bg-[#FF7350]
opacity-20
blur-[100px]
"
/>


<div
className="
relative
w-[330px]
h-[420px]
rounded-[40%]
overflow-hidden
border
border-[#FF7350]/40
shadow-[0_0_60px_rgba(255,115,80,0.15)]
"
>


<img
src={profile}
alt="Malki Senevirathna"
className="
w-full
h-full
object-cover
"
/>


</div>


</div>


</Reveal>






{/* Details */}

<Reveal>


<div>


<h3
className="
text-3xl
font-bold
text-white
mb-6
"
>

Hello, I'm Malki 👋

</h3>



<p
className="
text-gray-400
leading-relaxed
mb-6
"
>

I am an Information Technology undergraduate
with a strong interest in software engineering,
artificial intelligence, and modern web
technologies.

I enjoy building full-stack applications,
exploring AI solutions, and transforming ideas
into practical digital experiences.

</p>



<p
className="
text-gray-400
leading-relaxed
"
>

Currently, I am looking for a software engineering
internship opportunity where I can apply my skills,
learn from experienced developers, and contribute
to meaningful projects.

</p>





{/* Quick info */}


<div
className="
grid
sm:grid-cols-2
gap-5
mt-8
"
>


<div
className="
bg-[#121222]
border
border-white/10
rounded-2xl
p-5
"
>

<FiBookOpen
className="
text-[#FF7350]
text-2xl
mb-3
"
/>


<h4
className="
text-white
font-semibold
"
>
Degree
</h4>


<p
className="
text-gray-400
text-sm
mt-2
"
>
BSc in Information Technology
</p>


</div>





<div
className="
bg-[#121222]
border
border-white/10
rounded-2xl
p-5
"
>

<FiCalendar
className="
text-[#FF7350]
text-2xl
mb-3
"
/>


<h4
className="
text-white
font-semibold
"
>
Graduation
</h4>


<p
className="
text-gray-400
text-sm
mt-2
"
>
Expected 2027
</p>


</div>



</div>





</div>


</Reveal>



</div>







{/* Education + Expertise */}

<Reveal>


<div
className="
grid
md:grid-cols-2
gap-8
mt-16
"
>



{/* Education */}


<div
className="
bg-[#121222]
border
border-white/10
rounded-3xl
p-8
hover:border-[#FF7350]/50
transition
"
>


<div
className="
flex
items-center
gap-3
mb-5
"
>

<FiMapPin
className="
text-[#FF7350]
text-2xl
"
/>


<h3
className="
text-xl
font-semibold
text-white
"
>
Education
</h3>

</div>


<p
className="
text-gray-300
font-medium
"
>
Sri Lanka International Buddhist Academy
(SIBA Campus)
</p>


<p
className="
text-gray-500
mt-3
"
>
BSc in Information Technology
</p>


</div>







{/* Expertise */}


<div
className="
bg-[#121222]
border
border-white/10
rounded-3xl
p-8
hover:border-[#FF7350]/50
transition
"
>


<div
className="
flex
items-center
gap-3
mb-5
"
>

<FiCode
className="
text-[#FF7350]
text-2xl
"
/>


<h3
className="
text-xl
font-semibold
text-white
"
>
Areas of Interest
</h3>

</div>



<div
className="
grid
grid-cols-2
gap-4
"
>


<div className="text-gray-400 flex items-center gap-2">
<FiCode/>
Full Stack
</div>


<div className="text-gray-400 flex items-center gap-2">
<FiCpu/>
AI 
</div>


<div className="text-gray-400 flex items-center gap-2">
<FiCloud/>
Cloud
</div>


<div className="text-gray-400 flex items-center gap-2">
IoT
</div>


</div>


</div>



</div>


</Reveal>



</div>


</section>

);

}


export default About;