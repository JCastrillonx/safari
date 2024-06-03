import Slider from "react-slick";
import { heroItems } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const SliderArrow = ({ className, style, onClick, position }) => {
    const arrowStyle =
      position === 'next'
        ? { ...style, right: '10px' }
        : { ...style, left: '10px', zIndex: '1' };
  
    return <div className={className} style={arrowStyle} onClick={onClick} />;
  };

const HeaderText = ({ title, text, btn }) => (
    <motion.div 
    variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true}}
    
    className="container mx-auto py-5 px-4 sm:px-6 lg:px-8 text-left" >
        <h2 className="text-3xl text-[#ffc107]
         font-extrabold break-words">
          {title}
        </h2>
        <p className="text-xl text-white font-semibold max-w-[500px] mb-5 break-words">{text}</p>
      
        {btn && (
          <a
            href={btn.href} target="_blank" rel="noopener"
            className="btn-primary px-5 py-2 rounded-full text-white border inline-flex hover:-translate-y-2 transition-all duration-300"
          >
            {btn.label}
          </a>
        )}
        
    </motion.div>
  );

const HeaderSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      /*nextArrow: <SliderArrow position="next" />,
      prevArrow: <SliderArrow position="prev" />,*/
    };
  
    return (
      <Slider {...settings}>
        { heroItems.map((item, index) => (
          <div key={index}>
            <div
              className="h-[525px] flex bg-center bg-cover relative"
              style={{
                backgroundImage: `url('${item.img}')`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-row justify-start items-end sm:items-center ml-4">
                <div></div>
                <HeaderText title={item.title} text={item.text} btn={item.btn} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };


const Hero = () => {

    return (
        <div className="w-full h-[575px] overflow-hidden" id="home">
            <HeaderSlider />
        </div>
    )
}

export default Hero;