import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetails from "./components/ProjectDetails";


function Home(){

return(
<>
<Navbar />
<Hero/>
<About/>
<Skills/>
<Projects/>
{/*<Certifications/>*/}
<Contact/>
<Footer/>
</>
)

}



function App(){

return(

<BrowserRouter>

<Routes>


<Route
path="/"
element={<Home/>}
/>


<Route

path="/projects/:id"

element={<ProjectDetails/>}

/>


</Routes>

</BrowserRouter>

)

}


export default App;