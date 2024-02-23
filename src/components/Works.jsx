import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return(
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt 
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className='relative w-full h-[230px]'>
                    <img src={image} alt={name} className='w-full h-full object-contain rounded-2xl'/>
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div 
                            onClick={()=> window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag,i) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.heroSubText}>The Future</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p 
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] w-full leading-[30px] text-justify'>
                     It has been argued that space colonization is a means of ensuring the survival of human civilization given a planetary disaster. Colonizing other planets allows for the dispersal of humans and thus increases the likelihood of survival given a planetary disaster. The availability of additional resources that can be mined from space could potentially expand the capabilities of humans and largely benefit society. Leveraging these resources and moving high polluting industries to space could reduce the emissions on Earth and ultimately lead to finding cleaner energy sources. The primary blockers to colonizing space include technological and economic challenges.
                     The unique attributes of space enable astronauts to conduct research that could not otherwise be done on Earth, and the perspective from space looking at Earth enables scientists to gain more insight on the Earth's natural environment. Research conducted at the International Space Station aims to benefit human civilizations on Earth and extend human knowledge of space and space exploration. Currently, NASA's research at the ISS includes biomedical research, material science, technology advancement, and methods to enable further space exploration.[3]
                    Anti and microgravity enable astronauts to execute medical research that is impossible to perform on Earth. For example, NASA's research on new treatment options for complex diseases, such as Duchenne Muscular Dystrophy, require the use of a microgravity environment to allow the microparticles in the treatment solution to stay robust. NASA has also reported research investment in microbial vaccine development and microencapsulation of drugs for targeted and more efficient treatment delivery.    
                </motion.p>
            </div>
            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project,i) => (
                    <ProjectCard 
                    key={`project-${i}`} 
                    {...project}
                    index={i}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works,"");