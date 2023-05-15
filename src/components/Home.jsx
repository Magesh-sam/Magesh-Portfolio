import "../styles/home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export const Home = () => {
  return (
    <section className="home">
      <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration='500' className="row hello">
        <p>H</p>
        <p>e</p>
        <p>l</p>
        <p>l</p>
        <p>o</p>
        <p>,</p>
      </div>
      <div data-aos="fade-up-left" data-aos-easing="ease-in-out" data-aos-delay='500' className="row name">
        <p>
          I&apos;m <span className="letter">M</span>
          age
          <span className="letter">s</span>
          hk
          <span>a</span>
          nnan
        </p>
      </div>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay='1000'  className="description">
        A creative Frontend focused Developer building <mark>Creative</mark>,
        <mark>Engaging</mark> and <mark>Entertaining</mark> Frontend of Websites
        and Web Applications!
      </p>
      <div   className="icon-wrap">
        <a data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay='1500'
          href="https://github.com/magesh-sam"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay='1700'
          href="https://www.linkedin.com/in/mageshkannan-annathurai/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay='1900'
          href="mailto:mageshkannanam@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};
