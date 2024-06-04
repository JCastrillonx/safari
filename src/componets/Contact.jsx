import contactImg from '../assets/learning-languages-bro.png'
import { MessageCircleHeart } from 'lucide-react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id='contact'>
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/*Banner image*/}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}>
            <img src={contactImg} alt="Send us a message WhatsApp" className='lg:h-[386px]' />
          </motion.div>

          {/*Banner content*/}

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="md:w-3/5">
            <h2 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed">You need more information about us</h2>
            <p className="text-[#EBEBEB] text-lg mb-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam et esse pariatur nostrum animi illum, dolores voluptatibus adipisci sunt ipsum quos illo iure saepe odit. Aspernatur commodi at natus.
            </p>
            <div className="space-x-5 space-y-5">
              <a href="https://www.linkedin.com/in/jm-castrillon/" target='_blank' rel="noopener noreferrer" className="bg-[#673ab7] font-semibold inline-flex py-4 text-white px-3 hover:bg-[#ffc107] rounded-md hover:-translate-y-4 transition-all duration-300">
                <MessageCircleHeart className="mr-2" />Send us a message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <p className="text-sm ml-2 text-gray-500 my-3">
        People illustrations by <a href="https://storyset.com/people" target='blank' className='hover:underline' title="Freepik" rel="noopener noreferrer" >Storyset</a>
      </p>
    </div>
  )
}

export default Contact