import { useState } from "react"


const ProjectCard = ({imgLink,projectLink,name,TechStack}) => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="">
        <div
        onMouseOver={()=>setIsOpen(true)}
        onMouseOut={()=>setIsOpen(false)}
        className={`w-80 h-70 overflow-hidden rounded-t-lg hover:border-6 ${isOpen?"border-yellow-600":"border-none"}`}>
        <a href={projectLink}>
        <img src={imgLink} alt="Project Card"
      className="w-full h-full object-cover"
      />
      
            </a>
       
        </div>
     
        <div className="bg-pink-600 text-center rounded-b-lg text-white">
                  <p className="font-bold">Project Name: {name}</p>
                  <p className="font-semibold">Tech Stack: {TechStack}</p>
                  </div>
    
    </div>
  )
}

export default ProjectCard
