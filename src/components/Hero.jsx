import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub, FaDownload, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import profileImg from '../assets/images/profile2.jpg';
import resumePdf from '../assets/images/GangadharRes3.pdf';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-transparent text-white pt-20 px-8 relative z-10">
            <div className="max-w-[1200px] w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-xl font-bold mb-2 text-white">Hi, I'm</h2>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
                        Gangadhar Pepakayala
                    </h1>
                    <div className="text-xl md:text-2xl font-semibold mb-6 flex flex-col md:flex-row gap-2 justify-center md:justify-start">
                        <span className="text-cyan-400">Full Stack Developer</span>
                    </div>

                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
                        To secure a challenging role where I can apply
                        my skills, continuously enhance my expertise, and contribute fully to the
                        organization's growth by delivering innovative solutions, maintaining excellence,
                        and driving impactful results.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8 text-base text-cyan-400">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span>+91 9390143192</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope />
                            <span>gangadharpepakayala22@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>Hyderabad, Telangana</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center md:justify-start mb-8">
                        {[
                            { Icon: FaFacebookF, link: 'https://www.facebook.com/share/19vG3sKymt/?mibextid=qi2Omg' },
                            { Icon: FaInstagram, link: 'https://www.instagram.com/__gangadhar__the_rrrockkk' },
                            { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/gangadhar-pepakayala' },
                            { Icon: FaTwitter, link: 'https://x.com/gangadhar_rocK_?t=uuVXBcFb85ly-DVogBuxdg&s=09' },
                            { Icon: FaGithub, link: 'https://github.com/gangadharpepakayala' }
                        ].map(({ Icon, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-cyan-400 text-cyan-400 text-lg flex items-center justify-center hover:bg-cyan-400 hover:text-[#0f172a] hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href={resumePdf}
                            download
                            className="px-8 py-3 bg-cyan-400 text-[#0f172a] font-bold text-lg rounded-full shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 flex items-center gap-2"
                        >
                            Download CV <FaDownload />
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"></div>
                        <img
                            src={profileImg}
                            alt="Gangadhar Pepakayala"
                            className="w-full h-full object-cover rounded-full p-2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
