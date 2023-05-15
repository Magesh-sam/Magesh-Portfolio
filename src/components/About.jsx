import "../styles/about.css";
export const About = () => {
  return (
    <section className="about">
      <h1 data-aos='fade-up' data-aos-easing='ease-in-out' className="heading">
        <span className="letter">A</span>bout <span className="letter">M</span>e
        <span className="letter">!</span>
      </h1>
      <section  className="about-me">
        <p data-aos='fade-right' data-aos-easing='ease-in-out'>
          Hey there! I&apos;m Mageshkannan located in India, a ReactJS developer
          with a passion for playing with the web and creating awesome user
          experiences.
        </p>
        <p data-aos='fade-right' data-aos-easing='ease-in-out' data-aos-delay='300'>
          I believe that the web is an incredibly powerful tool, and I love
          exploring its potential by building dynamic and engaging applications.
          Whether I&apos;m experimenting with cutting-edge technologies or
          tweaking the smallest details of a UI, I always strive to create
          something that feels both fun and functional.
        </p>
        <p data-aos='fade-right' data-aos-easing='ease-in-out' data-aos-delay='600'>
          If you&apos;re looking for a ReactJS developer who&apos;s passionate
          about creating exciting, engaging, and user-friendly experiences, then
          let&apos;s chat! Check out my portfolio and drop me a line!
        </p>
      </section>
      <div data-aos='fade-up' data-aos-easing='ease-in-out'  className="skills">
        <h1 style={{textDecoration:'2px solid underline',textUnderlineOffset:'8px'}} >Skills</h1>
        <div className="wrap wrap1">
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='100'>HTML</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='200'>CSS</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='300'>Bootstrap</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='400'>JavaScript</p>
        </div>
        <div className=" wrap wrap2">
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='500'>TypeScript</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='600'>Responsive Design</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='700'>SEO</p>
        </div>
        <div className="wrap wrap1">
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='800'>Git</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='900'>GitHub</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1000'>React JS</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1100'>Redux Toolkit</p>
        </div>
        <div className="wrap wrap2">
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1200'>React Bootstrap</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1300'>MUI</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1400'>Python</p>
        </div>
        <div className="wrap wrap1">
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1500'>Linux</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1600'>AWS</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1700'>Photoshop</p>
          <p data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-delay='1800'>Power BI</p>
        </div>
      </div>
      <div data-aos='fade-up' data-aos-easing='ease-in-out' data-aos-duration='800' data-aos-delay='800' className="experience">
        <h1 style={{textAlign:'center',textDecoration:'2px solid underline',textUnderlineOffset:'8px' }} >Experience</h1>
        <h1>Capgemini India</h1>
        <h1>Senior Software Engineer</h1>
        <p>April 2021 - Present</p>
        <p>
          I have delivered high-quality and robust production code for a diverse
          range of clients
        </p>
        <p>
          my experience has taught me to always strive to deliver top-notch
          code, ensuring that it is both maintainable and scalable. I have
          learned the importance of collaborating with teams to achieve shared
          objectives and continuously seeking opportunities to improve my skills
          and knowledge.
        </p>
      </div>
    </section>
  );
};
