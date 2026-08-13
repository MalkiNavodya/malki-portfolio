import { Link } from "react-router-dom";
import { FiGithub, FiArrowRight } from "react-icons/fi";


function ProjectCard({project}) {

return (

<div
className="
bg-[#121222]
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-[#FF7350]
hover:-translate-y-2
transition-all
duration-300
"
>


<img
src={project.image}
alt={project.title}
className="
w-full
h-56
object-cover
"
/>


<div className="p-6">


<h3
className="
text-2xl
font-bold
text-white
mb-3
"
>
{project.title}
</h3>


<p
className="
text-gray-400
mb-5
"
>
{project.description}
</p>



<div className="
flex
flex-wrap
gap-2
mb-6
">

{
project.technologies.map((tech)=>(
<span
key={tech}
className="
px-3
py-1
rounded-full
bg-[#070714]
border
border-white/10
text-sm
text-gray-300
"
>
{tech}
</span>
))
}

</div>



<div className="
flex
gap-3
">


<Link

to={`/projects/${project.id}`}

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
bg-[#FF7350]
text-white
font-semibold
"
>

View Project

<FiArrowRight/>

</Link>



<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
border
border-white/20
text-white
"

>

<FiGithub/>

GitHub

</a>


</div>


</div>


</div>

)

}

export default ProjectCard;