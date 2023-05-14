import "../styles/about.css";
export const About = () => {
  return (
    <section className="about">
      <h1 className="heading">
        <span className="letter">A</span>bout <span className="letter">M</span>e
        <span className="letter">!</span>
      </h1>
      <section className="about-me">
        <p>
          Hey there! I&apos;m Mageshkannan located in India, a ReactJS developer
          with a passion for playing with the web and creating awesome user
          experiences.
        </p>
        <p>
          I believe that the web is an incredibly powerful tool, and I love
          exploring its potential by building dynamic and engaging applications.
          Whether I&apos;m experimenting with cutting-edge technologies or
          tweaking the smallest details of a UI, I always strive to create
          something that feels both fun and functional.
        </p>
        <p>
          If you&apos;re looking for a ReactJS developer who&apos;s passionate
          about creating exciting, engaging, and user-friendly experiences, then
          let&apos;s chat! Check out my portfolio and drop me a line!
        </p>
      </section>
      <div className="skills">
        <h1 style={{textDecoration:'2px solid underline',textUnderlineOffset:'8px'}} >Skills</h1>
        <div className="wrap wrap1">
          <p>HTML</p>
          <p>CSS</p>
          <p>Bootstrap</p>
          <p>JavaScript</p>
        </div>
        <div className=" wrap wrap2">
          <p>TypeScript</p>
          <p>Responsive Design</p>
          <p>SEO</p>
        </div>
        <div className="wrap wrap1">
          <p>Git</p>
          <p>GitHub</p>
          <p>React JS</p>
          <p>Redux Toolkit</p>
        </div>
        <div className="wrap wrap2">
          <p>React Bootstrap</p>
          <p>MUI</p>
          <p>Python</p>
        </div>
        <div className="wrap wrap1">
          <p>Linux</p>
          <p>AWS</p>
          <p>Photoshop</p>
          <p>Power BI</p>
        </div>
      </div>
      <div className="experience">
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
