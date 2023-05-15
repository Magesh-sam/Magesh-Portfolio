// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/projects.css";
import project1 from "/carousel/project1.webp";
import project2 from "/carousel/project2.webp";
import project3 from "/carousel/project3.webp";
import project4 from "/carousel/project4.webp";
import project5 from "/carousel/project5.webp";

// import required modules
import { Pagination, Autoplay, EffectCoverflow, Navigation } from "swiper";

export default function Projects() {
  return (
    <section className="projects">
      <h1 data-aos='fade-up' data-aos-easing='ease-in-out' className="project-heading">
        <span className="letter">P</span>rojects
      </h1>
      <h2 data-aos='fade-right' data-aos-easing='ease-in-out' className="featured-projects">
        <span className="letter">F</span>eatured
        <span className="letter">P</span>rojects
      </h2>
      <Swiper
        grabCursor={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper main-project"
      >
        <SwiperSlide>
          <img src={project1} alt="Project 1" />
          <div className="slide-content">
            <h1 className="project-title">
              <span className="letter">E</span>-
              <span className="letter">C</span>ommerce
            </h1>
            <p>
              <span className="letter">E</span>-commerce shopping cart demo
              built with React, Redux Toolkit, and TypeScript. It allows users
              to add items to a cart, remove items from the cart, and checkout.
              The cart is stored in the Redux store, and the state of the cart
              is updated whenever a user adds or removes an item.
            </p>
            <div className="icon-wrapper">
              <a
                href="https://shoppingcart-rtk-ts.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/Magesh-sam/shopping-cart"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="Project 2" />
          <div className="slide-content">
            <h1 className="project-title">
              <span className="letter">W</span>eather{" "}
              <span className="letter">A</span>pp
            </h1>
            <p>
              <span className="letter">T</span>he website you linked is a
              weather app built with React, Redux Toolkit, and TypeScript. It
              allows users to search for a location and see the current weather
              conditions, as well as the forecast for the next few days. The
              weather data is fetched from the OpenWeatherMap API.
            </p>
            <div className="icon-wrapper">
              <a
                href="https://weather-app-react-redux-toolkit.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/Magesh-sam/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="Project 3" />
          <div className="slide-content">
            <h1 className="project-title">
              <span className="letter">R</span>eact{" "}
              <span className="letter">C</span>ustom{" "}
              <span className="letter">P</span>agination
            </h1>
            <p>
              <span className="letter">R</span>eact custom pagination
              application that displays a list of cryptocurrencies. The list is
              paginated, so users can view more or fewer cryptocurrencies at a
              time. The application uses the CoinMarketCap API to fetch the
              cryptocurrency data.
            </p>
            <div className="icon-wrapper">
              <a
                href="https://react-custom-pagination-crypto-api.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/Magesh-sam/react-custom-pagination"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="Project 4" />
          <div className="slide-content">
            <h1 className="project-title">
              <span className="letter">K</span>now{" "}
              <span className="letter">Y</span>our{" "}
              <span className="letter">C</span>ountry
            </h1>
            <p>
              <span className="letter">R</span>eact application developed based
              on REST counties API. we can search and filter out countries and
              view more details about the country
            </p>
            <div className="icon-wrapper">
              <a
                href="https://knowyourcountryv2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/Magesh-sam/knowyourcountryv2"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project5} alt="Project 5" />
          <div className="slide-content">
            <h1 className="project-title">
              <span className="letter">V</span>ualized{" "}
              <span className="letter">T</span>o-Do{" "}
              <span className="letter">A</span>pp
            </h1>
            <p>
              <span className="letter">T</span>his is not just a normal To-do
              App. we can choose categories of the task name and we can filter
              out todo based on the category. the app uses google react chart
              which helps to visualize taks using Pie chart and bar chart
            </p>
            <div className="icon-wrapper">
              <a
                href="https://visualized-todo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/Magesh-sam/visualized-todo"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h2 data-aos='fade-right' data-aos-easing='ease-in-out' className="featured-projects">
        <span className="letter">O</span>ther <span className="letter">P</span>
        rojects
      </h2>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true ,}}
        modules={[EffectCoverflow, Pagination,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="other-project">
          <h1>contact (PWA)</h1>
          <p>Contact app (Progressive Web App) developed using React,Redux and TS with MUI</p>
          <div className="project-link">
            <a
              href="https://contact-app-redux-tk.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/contacts"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Animated To-Do</h1>
          <p>Animated to-do app developed using React with Framer Motion and MUI</p>
          <div className="project-link">
            <a
              href="https://animated-todo-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/animated-todo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Currency Converter</h1>
          <p>Currency converter app developed using React, React Select and Fixer API</p>
          <div className="project-link">
            <a
              href="https://react-currency-converter-fixer.netlify.app//"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/currency-converter"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Todo app using Redux</h1>
          <p>To-Do app developed using react with redux toolkit</p>
          <div className="project-link">
            <a
              href="https://todoapp-rtk-mui-ts.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/todo-rtk-ts-mui"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Blog App</h1>
          <p>Blog App developed using React with MUI</p>
          <div className="project-link">
            <a
              href="https://blogapp-ts-mui.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/blogapp-mui-ts"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Planet App</h1>
          <p>Planet App developed using React with planet API</p>
          <div className="project-link">
            <a
              href="https://planet-app-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/Planet-App"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Bill Generator</h1>
          <p>Bill generator developed using React, we can print the bill</p>
          <div className="project-link">
            <a
              href="https://github.com/Magesh-sam/Billgenerator"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://react-bill-generator.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Keyboard Game</h1>
          <p>Keyboard game for kids to learn Alphabets</p>
          <div className="project-link">
            <a
              href="https://magesh-sam.github.io/keyboard-game/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/keyboard-game"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Unsplash Clone</h1>
          <p>Unsplash Clone Developed using Unsplash API with React</p>
          <div className="project-link">
            <a
              href="https://unsplash-react-gallery.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/unsplash-react-gallery"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Responsive Landing page with Dark/Light Mode</h1>
          <p>Simple Landing page developed with Dark and Light Mode</p>
          <div className="project-link">
            <a
              href="https://magesh-sam.github.io/landingpage-darkmode-lightmode/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/landingpage-darkmode-lightmode"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Know Your Country</h1>
          <p>A React app to know about countries</p>
          <div className="project-link">
            <a
              href="https://knowyourcountry-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/knowyourcountry"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>Sidebar and Navbar</h1>
          <p>A Responsive Sidebar and Navbar</p>
          <div className="project-link">
            <a
              href="https://magesh-sam.github.io/Responsive-Sidebar-Navbar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/Responsive-Sidebar-Navbar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>BMI Calculator</h1>
          <p>A simple BMI Calculator</p>
          <div className="project-link">
            <a
              href="https://magesh-sam.github.io/BMI-Calculator/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/BMI-Calculator"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="other-project">
          <h1>React Calculator</h1>
          <p>A simple Calculator using React</p>
          <div className="project-link">
            <a
              href="https://mageshkannan-react-calculator.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/Magesh-sam/react-calculator"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
