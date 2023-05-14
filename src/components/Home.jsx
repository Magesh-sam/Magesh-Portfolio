import "../styles/home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Home = () => {
  return (
    <section className="home">
      <div className="row hello">
        <p>H</p>
        <p>e</p>
        <p>l</p>
        <p>l</p>
        <p>o</p>
        <p>,</p>
      </div>
      <div className="row name">
        <p>
          I&apos;m <span className="letter">M</span>age
          <span className="letter">s</span>hk<span className="letter">a</span>
          nnan
        </p>
      </div>
      <p className="description">
        A creative Frontend focused Developer building <mark>Creative</mark>,
        <mark>Engaging</mark> and <mark>Entertaining</mark> Frontend of Websites
        and Web Applications!
      </p>
      <div className="icon-wrap">
        <a
          href="https://github.com/magesh-sam"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mageshkannan-annathurai/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:mageshkannanam@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <div className="line-wrap">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
          <div className="line line5"></div>
          <div className="line line6"></div>
        </div>
      </div>

    </section>
  );
};
