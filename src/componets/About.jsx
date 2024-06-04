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
                    <p className="mb-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eius, quod laborum facilis temporibus nulla ea cumque nihil porro eligendi praesentium laboriosam nam dignissimos earum. Dolores, nobis? Totam, deleniti magni.</p>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic, maiores distinctio aliquid nihil tempore maxime eos architecto soluta fuga totam qui suscipit inventore praesentium rerum delectus mollitia consequuntur sit.
                    </p>
                    <br/>
                    <a href="https://www.linkedin.com/in/jm-castrillon/" className="bg-gradient-to-r from-purple-500 to-purple-800 py-4 text-white btn-primary px-4 border rounded-md  inline-flex hover:-translate-y-4 transition-all duration-300">
                        "Connect with our Foundress"
                    </a>
                </motion.div>

            </div>
        </div>
        </div>
        
    )
}

export default About