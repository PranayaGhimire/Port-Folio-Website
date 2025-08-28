
const About = ({isDarkMode}) => {
  return (
    <>
      <div className={`${isDarkMode?'bg-gradient-to-bl from-zinc-700 to-zinc-900 text-white':'bg-gray-200 text-black'} h-150 italic  py-35`}>
        <p className={`${isDarkMode ? "bg-gray-500":"bg-white"} m-10 p-8 rounded-lg`}>
        Hi, I am Pranaya Ghimire recently graduated CS student passionate in web
        development and networking. 
          </p>

      </div>
    </>
  );
};

export default About;
