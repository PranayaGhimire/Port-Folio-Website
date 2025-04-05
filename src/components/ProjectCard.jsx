

const ProjectCard = ({imgLink,projectLink,name,TechStack}) => {
  return (
    <div className="">
        <div className="w-80 h-70 overflow-hidden rounded-t-lg hover:border-6 hover:border-yellow-600">
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
