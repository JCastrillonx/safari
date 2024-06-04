import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Story = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="bg-[rgb(246,246,246)] ">
            <div className="max-w-7xl mx-auto px-6 py-6" id='story'>
            <h2 className="relative flex items-center text-purple-800 text-2xl font-extrabold mb-5 leading-normal">
                <span className="flex-grow border-t border-purple-300 mr-3"></span>
                Our Story in Numbers
                <span className="flex-grow border-t border-purple-300 ml-3"></span>
            </h2>

            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true}}
                ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={1000000} duration={2} prefix="+" separator="," />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis enim minus id, quas 
                    </div>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={35} duration={2} prefix="+" />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit, enim exercitationem doloremque
                    </div>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={150} duration={2} prefix="+" />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={2} duration={2} prefix="+" />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos hic quasi nam 
                    </div>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={5000} duration={2} prefix="+" />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum totam maxime cumque.
                        </p>
                    </div>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-purple-800">
                        {inView && <CountUp end={250} duration={2} prefix="+" />}
                    </div>
                    <div className="mt-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta pariatur quas quia
                    </div>
                </div>
            </motion.div>
        </div>
        </div>
        
    );
};

export default Story;
