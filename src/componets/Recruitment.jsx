import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const Recruitment = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6" id="recruitment">
            <h2 className="relative flex items-center text-purple-800 text-2xl font-extrabold mb-5 leading-normal">
                <span className="flex-grow border-t border-purple-300 mr-3"></span>
                Recruitment
                <span className="flex-grow border-t border-purple-300 ml-3"></span>
            </h2>

            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-sm">
                   
                    <div className="text-xl mt-3 font-bold text-purple-800">
                    For IT Companies Solutions 
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nihil, dolores illo nesciunt, optio beatae quos ipsum deserunt ratione vero explicabo voluptas quis rerum earum dolorem corrupti error quam iure!</p>                  
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="https://www.linkedin.com/in/jm-castrillon/" className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 btn-primary py-4 text-white px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank'  rel="noopener noreferrer">
                      Contact Us
                      </a>
                    </div>
                    

                </motion.div>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-lg">
                  
                    <div className="text-xl font-bold text-purple-800">
                    For IT Professionals Seeking Employment
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi tenetur laboriosam iste velit eum ab eaque, consequuntur quo rerum adipisci repellendus repudiandae amet perferendis recusandae iure consectetur, magni officiis.
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="https://www.linkedin.com/in/jm-castrillon/" className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 py-4 text-white btn-primary px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank'  rel="noopener noreferrer">
                      Send Your CV
                      </a>
                    </div>

                </motion.div>
                <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-sm">
                    
                    <div className="text-xl font-bold text-purple-800">
                    For CV and LinkedIn Consultation
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, error inventore ipsum illum delectus odio perferendis iure itaque commodi dolor cumque! Doloribus consequatur repudiandae tempora commodi, tempore similique cupiditate quaerat!
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="https://www.linkedin.com/in/jm-castrillon/" className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 py-4 btn-primary text-white px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank' rel="noopener noreferrer" >
                      Contact Us
                      </a>
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default Recruitment