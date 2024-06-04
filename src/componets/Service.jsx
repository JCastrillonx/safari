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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat officiis beatae, expedita eligendi laboriosam dolor corrupti consequuntur in ab consequatur, modi maiores quo soluta aspernatur culpa maxime, quia quam?
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor incidunt sunt voluptatibus illum mollitia deserunt minima labore expedita. Nam fuga officiis facilis libero ipsam optio corporis aperiam at doloribus nihil?
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
                                at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempora alias rem maiores excepturi necessitatibus enim, quam inventore sint asperiores, ea recusandae architecto minima, laudantium dicta tenetur numquam vero minus?
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;