import { useState, useEffect } from "react";

import {
  FiMenu,
  FiX
} from "react-icons/fi";

import {
  motion
} from "framer-motion";



function Navbar(){


const [open,setOpen]=useState(false);


const [scrolled,setScrolled]=useState(false);



useEffect(()=>{


const handleScroll=()=>{

if(window.scrollY > 50){

setScrolled(true);

}

else{

setScrolled(false);

}


};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}


},[]);




const links=[

"Home",

"About",

"Skills",

"Projects",

"Contact"

];




return(


<motion.nav


initial={{
y:-100,
opacity:0
}}


animate={{
y:0,
opacity:1
}}


transition={{
duration:0.8
}}



className={`
fixed
top-5
left-1/2
-translate-x-1/2
z-50
w-[90%]
max-w-6xl

rounded-full

px-6
py-4

transition-all
duration-300

border

${

scrolled

?

"bg-[#121222]/90 backdrop-blur-xl border-white/20 shadow-orange"

:

"bg-white/5 backdrop-blur-xl border-white/10"

}

`}


>



<div className="
flex
items-center
justify-between
">


{/* Logo */}

<motion.h1

whileHover={{
scale:1.05
}}

className="
text-3xl
font-bold
cursor-pointer
"

>


Malki

<span className="text-primary">

.

</span>


</motion.h1>





{/* Desktop Menu */}


<div className="
hidden
md:flex
gap-8
text-gray-300
">


{

links.map((link)=>(


<a

key={link}

href={`#${link.toLowerCase()}`}

className="
hover:text-primary
transition
duration-300
"

>

{link}

</a>


))

}



</div>






{/* Mobile Button */}


<button

className="
md:hidden
text-2xl
"

onClick={()=>setOpen(!open)}

>


{

open ?

<FiX/>

:

<FiMenu/>

}


</button>



</div>





{/* Mobile Menu */}



{

open && (


<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
md:hidden
mt-5
bg-[#121222]
rounded-3xl
p-6
flex
flex-col
gap-5
text-center
"

>


{

links.map((link)=>(


<a

key={link}

href={`#${link.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-primary
"

>

{link}

</a>


))


}


</motion.div>


)


}



</motion.nav>


)


}



export default Navbar;