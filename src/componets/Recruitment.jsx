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
                      <p>Ready to forge genuine connections with the best IT talent and boost your teams' development? Discover how we can be your ally.</p>                  
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="mailto:info@safari-group.com?subject=Descubriendo%20Safari%20Group%20HR&body=Hola!%20%0AQuiero%20conocer%20m%C3%A1s%20acerca%20de%20Safari%20Group%20HR.%20" className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 btn-primary py-4 text-white px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank'>
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
                    If you're an IT professional looking for new challenges, send us your CV. We're always eager to forge new connections.
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="mailto:jobs@safari-group.com?subject=B%C3%BAsqueda%20Laboral&body=Hola!%0AEstoy%20en%20b%C3%BAsqueda%20laboral%2C%20adjunto%20CV." className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 py-4 text-white btn-primary px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank'>
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
                    If you're seeking guidance to enhance your CV and LinkedIn profile, we're here to support you. Together, we'll address your goals.
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <a href="mailto:jobs@safari-group.com?subject=Asesor%C3%ADa%20CV%20y%20LinkedIn&body=Hola!%20%0AQuiero%20recibir%20informaci%C3%B3n%20del%20servicio%2C%20%C2%BFme%20cuentas%20m%C3%A1s%3F" className="bg-gradient-to-r from-[#EE9AE5] to-purple-800 py-4 btn-primary text-white px-4 border rounded-md inline-flex hover:-translate-y-4 transition-all duration-300" target='_blank'>
                      Contact Us
                      </a>
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default Recruitment