import HeroScene from "./3d/HeroScene";
import profile from "../assets/images/profile/malki1.png";
import cv from "../assets/documents/Malki_Navodya_CV.pdf";

import {
  FiDownload,
  FiMail
} from "react-icons/fi";


function Hero() {

return (

<section
  id="home"
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#070714]
    pt-28
    pb-20
  "
>

{/* Background glow */}

<div
className="
absolute
top-20
right-[-180px]
w-[500px]
h-[500px]
rounded-full
bg-[#FF7350]
opacity-[0.07]
blur-[140px]
"
/>


<div
className="
absolute
bottom-0
left-[-180px]
w-[500px]
h-[500px]
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
min-h-[calc(100vh-7rem)]
grid
lg:grid-cols-[1.05fr_0.95fr]
gap-12
items-center
"
>


{/* LEFT SIDE */}

<div className="max-w-2xl">


<p
className="
text-[#FF7350]
uppercase
tracking-[4px]
text-sm
mb-6
"
>
Hello, I'm Malki
</p>



<h1
className="
text-6xl
sm:text-7xl
lg:text-8xl
font-bold
text-white
leading-[0.9]
"
>

Malki N Senevirathna
<span className="text-[#FF7350]">
.
</span>

</h1>



<h2
className="
mt-7
text-2xl
sm:text-3xl
lg:text-4xl
font-semibold
text-gray-200
"
>

IT Undergraduate

<br/>

<span className="text-[#FF7350]">
Software Developer & AI Enthusiast
</span>

</h2>




<p
className="
mt-7
max-w-xl
text-gray-400
text-lg
leading-relaxed
"
>

I build modern web applications,
explore artificial intelligence,
cloud technologies, and create
innovative software solutions
for real-world problems.

</p>



{/* BUTTONS */}

<div
className="
flex
flex-wrap
gap-4
mt-9
"
>


{/* DOWNLOAD CV */}

<a
href={cv}
download="Malki_Navodya_CV.pdf"
className="
inline-flex
items-center
gap-2
px-7
py-4
rounded-full
bg-[#FF7350]
text-white
font-semibold
shadow-[0_0_35px_rgba(255,115,80,0.25)]
hover:scale-105
transition
"
>

<FiDownload size={20}/>

Download CV

</a>




{/* CONTACT */}

<a
href="#contact"
className="
inline-flex
items-center
gap-2
px-7
py-4
rounded-full
border
border-[#FF7350]
text-[#FF7350]
font-semibold
hover:bg-[#FF7350]
hover:text-white
transition
"
>

<FiMail size={20}/>

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
bg-white/[0.04]
border
border-white/10
text-gray-300
"
>

<span
className="
w-3
h-3
rounded-full
bg-green-400
animate-pulse
"
/>

Open to Software Engineering Internships

</div>




{/* Tech tags */}

<div
className="
flex
flex-wrap
gap-3
mt-10
"
>

{
[
"React",
"Python",
"AI",
"AWS"
].map((tech)=>(

<span
key={tech}
className="
px-4
py-2
rounded-full
bg-white/[0.03]
border
border-white/10
text-gray-400
text-sm
"
>

{tech}

</span>

))
}

</div>


</div>





{/* RIGHT SIDE */}

<div
className="
relative
flex
justify-center
items-center
min-h-[480px]
lg:min-h-[600px]
"
>


<div
className="
absolute
inset-0
"
>

<HeroScene/>

</div>




<div
className="
absolute
w-[380px]
h-[380px]
rounded-full
bg-[#FF7350]
opacity-20
blur-[100px]
"
/>



<div
className="
relative
z-10
w-[280px]
h-[360px]
sm:w-[330px]
sm:h-[420px]
lg:w-[370px]
lg:h-[470px]
rounded-[40%]
overflow-hidden
border
border-[#FF7350]/50
shadow-[0_0_80px_rgba(255,115,80,0.2)]
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


</div>


</div>



</div>



</section>


);

}


export default Hero;