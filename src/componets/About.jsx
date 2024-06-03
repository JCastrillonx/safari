import aboutImg from '../assets/company-amico.png'
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const About = () => {

    
    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-s mb-10 pt-6 " id='about'>
            <h2 className="relative flex items-center text-purple-800 text-2xl font-extrabold mb-5 leading-normal">
                <span className="flex-grow border-t border-purple-300 mr-3"></span>
                About Us
                <span className="flex-grow border-t border-purple-300 ml-3"></span>
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-center items gap-2">
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="md:w-1/2">
                    <img src={aboutImg} alt="" />
                </motion.div>
                <motion.div 
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true}}
                className="md:w-3/5 text-gray-600  sm:text-center text-left sm:px-8 text-lg">
                    <p className="mb-2 ">
                        Safari Group HR is more than a consultancy. We're a team of recruiters and developers driven by genuine connections between people and technology. With 5 years in the IT sector, we understand the demands of technical talent.
                    </p>
                    <p className="mb-2 ">
                        We collaborate with a select group of clients, ensuring efficiency and establishing authentic, long-lasting relationships.
                    </p>
                    <p className="mb-5">
                        Our philosophy is based on the power of genuine connections, a principle that has guided us from our beginnings. We understood that these connections are redefining IT recruitment. In a world of constant technological evolution, Safari Group HR always prioritizes commitment to human values.
                    </p>
                    <br/>
                    <a href="http://www.linkedin.com/in/jesicalogioco-safarigrouphr" className="bg-gradient-to-r from-purple-500 to-purple-800 py-4 text-white btn-primary px-4 border rounded-md  inline-flex hover:-translate-y-4 transition-all duration-300">
                        "Connect with our Foundress"
                    </a>
                </motion.div>

            </div>
        </div>
        </div>
        
    )
}

export default About