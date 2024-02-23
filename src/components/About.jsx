import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index,title, icon}) => {
 return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div 
        variants={fadeIn("right","spring",0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div 
            options={{
                max:45,
                scale:1,
                speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
 )
}

const About = () => {
    return (
       <>
       <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
       </motion.div>

       <motion.p 
       variants={fadeIn("","",0.1,1)}
       className='mt-4 text-secondary text-[17px]  w-full leading-[30px] text-justify'>
       A spacecraft is a vehicle or machine designed to fly in outer space. A type of artificial satellite, spacecraft are used for a variety of purposes, including communications, Earth observation, meteorology, navigation, space colonization, planetary exploration, and transportation of humans and cargo. All spacecraft except single-stage-to-orbit vehicles cannot get into space on their own, and require a launch vehicle.
       On a sub-orbital spaceflight, a space vehicle enters space and then returns to the surface, without having gained sufficient energy or velocity to make a full orbit of the Earth. For orbital spaceflights, spacecraft enter closed orbits around the Earth or around other celestial bodies. Spacecraft used for human spaceflight carry people on board as crew or passengers from start or on orbit only, whereas those used for robotic space missions operate either autonomously or telerobotically. Robotic spacecraft used to support scientific research are space probes. Robotic spacecraft that remain in orbit around a planetary body are artificial satellites.
       </motion.p>
       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,i)=>(
            <ServiceCard key={service.title} index={i} {...service}/>
        ))}
       </div>
       </>
    )
}

export default SectionWrapper(About, "about");