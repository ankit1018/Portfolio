import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="w-screen h-screen px-[8vw] lg:px-[12vw] font-sans flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ankit Kumar
          </h2>

          {/* Typing Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="typing-gradient inline-block text-[#8245ec]">
              <Typewriter
                words={['Frontend Developer', 'Gen AI Enthusiast', 'Coder']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a <span className="text-white font-semibold">Web developer</span> with hands-on experience in building <span className="text-white font-semibold">responsive applications</span> using <span className="text-[#a855f7] font-semibold">React JS, Redux, Appwrite, CSS</span>, and <span className="text-[#a855f7] font-semibold">Bootstrap</span>. 
            Growing experience in <span className="text-white font-semibold">Gen AI</span> and <span className="text-white font-semibold">LLMs</span>. 
            Experienced in applying <span className="text-white font-semibold">ML algorithms</span> such as <span className="text-white font-semibold">K-means clustering</span> and <span className="text-white font-semibold">Skyline Computation</span> to develop intelligent, cost-effective solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 focus:ring-4 ring-[#a855f7] hover:ring-2"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-full md:w-[30rem] max-w-full"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ankit Kumar"
              className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(130,69,236,0.8)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
