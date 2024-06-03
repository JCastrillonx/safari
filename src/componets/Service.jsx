import recruitmentImg from '../assets/connected-world-rafiki.png'
import teampanaImg from '../assets/team-pana.png'
import goodteamImg from '../assets/good-team-pana.png'
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const Service = () => {
    return (
        <div  id='services'>
            <div className="max-w-7xl mx-auto px-6 py-6">
                <h2 className="relative flex items-center text-purple-800 text-2xl font-extrabold mb-5 leading-normal">
                    <span className="flex-grow border-t border-purple-300 mr-3"></span>
                    Our Services
                    <span className="flex-grow border-t border-purple-300 ml-3"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }}
                        className="p-8 bg-white rounded-lg shadow-md">
                        <img src={recruitmentImg} alt="Global IT Recruitment" />
                        <div className="text-xl font-bold text-purple-800">
                            Global IT Recruitment
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                            We tailor our approach to your specific needs, evaluating candidates for soft skills, technical abilities, and language proficiency. We ensure cultural fit for seamless integration with your team. Staying updated with tech advancements, we provide cutting-edge IT recruitment solutions. Connecting you to international IT talent across Latin America, the USA, and Europe.
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }}
                        className="p-8 bg-white rounded-lg shadow-md">
                        <img src={teampanaImg} alt="Personal and Team Development" />
                        <div className="text-xl font-bold text-purple-800">
                            Personal and Team Development
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                            We offer disruptive solutions and objetive guidance for effective management of your collaborators. We enhance both individual performance and that of work teams.
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }}
                        className="p-8 bg-white rounded-lg shadow-md">
                        <img src={goodteamImg} alt="CV and LinkedIn Optimization" />
                        <div className="text-xl font-bold text-purple-800">
                            CV and LinkedIn Optimization
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                            We collaborate to authentically highlight your skills, experiences, and potential on your CV and LinkedIn. Every session is custom-tailored, ensuring it aligns with the unique needs of each professional.
                        </div>
                    </motion.div>
                </div>
            </div>



            <div className="bg-[rgb(246,246,246)] ">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <h2 className="relative flex items-center text-purple-800 text-xl font-extrabold mb-5 leading-normal">
                        <span className="flex-grow border-t border-purple-300 mr-3"></span>
                        Valuing People
                        <span className="flex-grow border-t border-purple-300 ml-3"></span>
                    </h2>
                    <div className="grid grid-cols-12 text-left  sm:text-center">
                        <div className="col-span-2 hidden md:block"></div>
                        <div className="col-span-12 md:col-span-8 text-sm text-gray-600">
                            <p>
                                At Safari Group HR, we firmly believe that every individual, regardless of race, ethnicity, gender, sexual orientation, religion, or any other condition, brings a unique perspective that enriches and empowers the world. We strive to be strategic allies for companies and candidates, fostering a work culture where diversity is foundational and inclusion is experienced in every interaction, project, and initiative.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;