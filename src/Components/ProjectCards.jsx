import { motion } from "framer-motion";
import { styles } from '../styles'
import { projects } from "../Constants/constants";
import { Tilt } from "react-tilt";
import { githubIcon } from "../assets";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: window.innerWidth < 990 ? 1 : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-8xl mx-auto relative z-0 w-[100%]`}
      >
        <Component />
      </motion.section>
    )
  };

  const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
    return (
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 40,
            scale: 1,
            speed: 450
          }}
          className='text-grayscale-50 p-5 rounded-lg w-[280px]'
          style={{ marginTop: '-10%' }}
          >
          <div
            className="relative w-[280px] h-[180px]"
          >
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
            >
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
               <img 
                src={githubIcon}
                alt="github"
                className="w-15 h-15 object-contain"
                />
              </div>
            </div>
          </div>
  
          <div className="mt-3 h-full w-[280px]">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-[18px]">{description}</p>
          </div>
          <div
            className="mt-2 flex flex-wrap gap-1"
          >
          </div>
          <div 
            className="mt-3 flex justify-center items-center"
          >
            <a 
              className="shadow-md shadow-primary m-3 p-2 bg-tertiary w-[60%] rounded-lg flex justify-center"
              href={demo_link}
              target='_blank'
            >
              See More
            </a>
          </div>
        </Tilt>
      </motion.div>
    )
  }  

const Works = () => {
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-12">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");