import "./styles/app.css";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  const toggleMenu = (event) => {
    event.currentTarget.classList.toggle("opened");
    event.currentTarget.setAttribute(
      "aria-expanded",
      event.currentTarget.classList.contains("opened")
    );
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    menuRef.current.classList.toggle("opened");
    menuRef.current.setAttribute(
      "aria-expanded",
      menuRef.current.classList.contains("opened")
    );
    setOpenMenu(!openMenu);
  };

  const navLinksVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      {/* Menu */}
      <div className="menu-wrap">
        <button
          className="menu"
          onClick={(e) => toggleMenu(e)}
          aria-label="Main Menu"
          ref={menuRef}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        {openMenu && (
          <motion.ul
            className="menulist"
            variants={navLinksVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.li
              className="menu-item"
              variants={linkVariants}
              transition={{ delay: 0.1 }}
            >
              <Link to="home" onClick={() => closeMenu()}>
                Home
              </Link>
            </motion.li>
            <motion.li className="menu-item" variants={linkVariants}>
              <Link to="about" onClick={() => closeMenu()}>
                About
              </Link>
            </motion.li>
            <motion.li className="menu-item" variants={linkVariants}>
              <Link to="projects" onClick={() => closeMenu()}>
                Projects
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </div>
      <Home />
      <About />
      <Projects />
      <Footer/>
    </>
  );
};
