
const About = ({isDarkMode}) => {
  return (
    <>
      <div className={`${isDarkMode?'bg-gradient-to-bl from-zinc-700 to-zinc-900 text-white':'bg-white text-black'} h-150 italic px-5 py-35`}>
        <p>
        Hi, I am Pranaya Ghimire recently graduated CS student passionate in web
        development and networking. 
          </p>

      </div>
    </>
  );
};

export default About;
