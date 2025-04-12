import ProjectCard from "./ProjectCard";
import Traffic_Light from "../assets/Project-Card-Images/Traffic-Light.png";
import Card_App from "../assets/Project-Card-Images/Card-App.png";
import SuperHero_App from "../assets/Project-Card-Images/SuperHero-App.png";
import Fighting_Game from "../assets/Project-Card-Images/Fighting_Game.png"; 
import YTS from "../assets/Project-Card-Images/YTS.png";
import ICC from "../assets/Project-Card-Images/ICC.png";
import Calculator from "../assets/Project-Card-Images/Calculator.png";
import Weather from "../assets/Project-Card-Images/Weather.png";
import Bank from "../assets/Project-Card-Images/Bank.png";
import Todo from "../assets/Project-Card-Images/Todo-List.png";
import Currency_Converter from "../assets/Project-Card-Images/Currency-Converter.png";
import DLS_Calculator from "../assets/Project-Card-Images/DLS-Calculator.png";
const Projects = ({isDarkMode}) => {
  return (
    <>
      <div className={`${isDarkMode?'bg-gradient-to-bl from-zinc-700 to-zinc-900 text-white':'bg-white text-black'} h-1250  md:h-650 lg:h-650 xl:h-450 2xl:h-350   px-5 flex flex-col items-center justify-center`}>
        <h2 className="font-bold my-2 text-2xl text-center">Projects:</h2>
        <div className="flex space-x-10 flex-wrap space-y-10 mt-10 ml-5">
        
        <ProjectCard imgLink={DLS_Calculator}
            projectLink="https://dls-calculator.netlify.app/"
        name="DLS Calculator App"
        TechStack="React,JavaScript & Tailwind CSS"
        />
        <ProjectCard imgLink={Traffic_Light}
        projectLink="https://traffic-light-pranaya.netlify.app/"
        name="Traffic Light App"
        TechStack="React,JavaScript & Tailwind CSS"
        />

        <ProjectCard imgLink={Bank}
        projectLink="https://bank-app-pranaya.netlify.app/"
        name="Bank App"
        TechStack="React,JavaScript & Tailwind CSS"
        />

          <ProjectCard imgLink={Card_App}
        name="Card App"
        projectLink="https://card-pranaya.netlify.app/"
        TechStack="React,TypeScript & Tailwind CSS"
        />
            <ProjectCard imgLink={SuperHero_App}
        name="Super Hero App"
        projectLink="https://superhero-pranaya.netlify.app/"
        TechStack="React,JavaScript & Tailwind CSS"
        />
            <ProjectCard imgLink={Fighting_Game}
            projectLink="https://fighting-game-pranaya.netlify.app/"
        name="Fighting Game"
        TechStack="React,JavaScript & Tailwind CSS"
        />
            <ProjectCard imgLink={YTS}
            projectLink="https://yts-clone.netlify.app/"
        name="YTS Page"
        TechStack="React,JavaScript & Tailwind CSS"
        />
            <ProjectCard imgLink={ICC}
            projectLink="https://icc-clone.netlify.app/"
        name="ICC Page"
        TechStack="React,JavaScript & Tailwind CSS"
        />
              <ProjectCard imgLink={Calculator}
            projectLink="https://calculator-app-pranaya.netlify.app/"
        name="Calculator App"
        TechStack="React,JavaScript & Tailwind CSS"
        />
                 <ProjectCard imgLink={Weather}
            projectLink="https://weather-app-pranaya-ghimire.netlify.app/"
        name="Weather App"
        TechStack="React,JavaScript & Tailwind CSS"
        />
          <ProjectCard imgLink={Todo}
            projectLink="https://todo-list-app-pranaya.netlify.app/"
        name="Todo List App"
        TechStack="React,JavaScript & Tailwind CSS"
        />
           <ProjectCard imgLink={Currency_Converter}
            projectLink="https://currency-converter-pranaya.netlify.app/"
        name="Currency Converter App"
        TechStack="React,JavaScript & Tailwind CSS"
        />
   
        </div>
  
        {/* <ul className="space-y-2">
          <li className="hover:text-blue-600 active:text-pink-600">
            <a href="https://clinquant-flan-27a22a.netlify.app/">
              Counter App using React JS and Tailwind CSS
            </a>
          </li>
          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://wonderful-fairy-5f6b64.netlify.app/">
              Background Changer using React JS and Tailwind CSS
            </a>
          </li>
          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://glowing-moonbeam-a03f9b.netlify.app/">
              Password Generator using React JS and Tailwind CSS
            </a>
          </li>

          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://weather-app-pranaya-ghimire.netlify.app/">
              Simple Weather App using React JS and Tailwind CSS
            </a>
          </li>


          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://todo-list-app-pranaya.netlify.app/">
              Simple Todo List App using React JS and Tailwind CSS 
            </a>
          </li>

          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://currency-converter-pranaya.netlify.app/">
              Simple Currency Converter App using React JS and Tailwind CSS
            </a>
          </li>

          <li className="hover:text-blue-600 active:text-pink-600">
            <a href="https://calculator-app-pranaya.netlify.app">Simple Calculator App using React JS and Tailwind CSS</a>
          </li>

          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://form-validation-pranaya.netlify.app/">
              Simple Form Validation using React JS and Tailwind CSS
            </a>
          </li>


          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://transcendent-beignet-4dde5a.netlify.app/">
              Gemini Clone using React JS
            </a>
          </li>
        
        </ul> */}
      </div>
    </>
  );
};

export default Projects;
