import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../../styles';
import {services} from '../../constants';
import {fadeIn , textVariant} from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const ServiceCard=({index ,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right ","spring " ,index * 0.5,0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow '>
        <div
        options={{
          max:45,
          scale:1,
           speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-[0_20px_50px_rgba(140,_20,_252,_0.3)]'
        >
          <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","" ,0.1,1)} 
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px ]'>
    I'm a fullstack developer, I am equipped with a broad set of skills that enable me to handle both front-end and back-end development tasks. My education and training have provided me with a solid foundation in web development technologies, and I am eager to apply this knowledge in a professional setting. I have a strong grasp of HTML, CSS , tailwind css, and JavaScript, allowing me to create and style interactive web pages. I am proficient in using React to build dynamic user interfaces Additionally, I understand responsive design principles to ensure applications look and function well on various devices. 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>

      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')