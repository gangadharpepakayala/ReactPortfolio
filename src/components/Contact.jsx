import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const form = useRef();
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setShowToast(false);

        // Using the credentials from your previous setup
        const SERVICE_ID = 'service_cs09qul';
        const TEMPLATE_ID = 'dsvsdvybsdvsdv';
        const PUBLIC_KEY = 'VFx-iOduTkCatcCQx';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setToastMsg("Message sent successfully!");
                setIsError(false);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setToastMsg("Failed to send message. Please try again.");
                setIsError(true);
            })
            .finally(() => {
                setLoading(false);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 4000);
            });
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-3 sm:mb-4">
                        Contact Me
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto"></div>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mb-12 sm:mb-16">
                    {/* Contact Form (Left) */}
                    <div className="relative group" data-aos="fade-right">
                        <div className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                                <div className="group/input">
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="Full Name"
                                        autoComplete="off"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="group/input">
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="Email Address"
                                        autoComplete="off"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="group/input">
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        placeholder="Your Message"
                                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info & Social Links (Right) */}
                    <div className="space-y-6" data-aos="fade-left">
                        {/* Get in Touch Card */}
                        <div className="relative group">
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                                <div className="space-y-4">
                                    {/* Email */}
                                    <a href="mailto:gangadharpepakayala22@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/item">
                                        <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 border border-cyan-400/20 group-hover/item:bg-cyan-400/20 transition-colors">
                                            <MdEmail className="text-cyan-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1">Email</p>
                                            <p className="text-white font-medium break-all">gangadharpepakayala22@gmail.com</p>
                                        </div>
                                    </a>

                                    {/* WhatsApp */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/item">
                                        <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center flex-shrink-0 border border-teal-400/20 group-hover/item:bg-teal-400/20 transition-colors">
                                            <IoLogoWhatsapp className="text-teal-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                                            <p className="text-white font-medium">+91 9390143192</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/item">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-400/10 flex items-center justify-center flex-shrink-0 border border-indigo-400/20 group-hover/item:bg-indigo-400/20 transition-colors">
                                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1">Location</p>
                                            <p className="text-white font-medium">Hyderabad, Telangana</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Card */}
                        <div className="relative group">
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-6">Social Links</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <a href="https://github.com/gangadharpepakayala" target="_blank" rel="noopener noreferrer"
                                        className="group/social flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/social:bg-cyan-400/20 transition-colors">
                                            <FaGithub className="text-2xl text-gray-300 group-hover/social:text-cyan-400 transition-colors" />
                                        </div>
                                        <span className="text-xs text-gray-400 group-hover/social:text-white transition-colors">GitHub</span>
                                    </a>

                                    <a href="https://linkedin.com/in/gangadhar-pepakayala" target="_blank" rel="noopener noreferrer"
                                        className="group/social flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/social:bg-indigo-400/20 transition-colors">
                                            <FaLinkedin className="text-2xl text-gray-300 group-hover/social:text-indigo-400 transition-colors" />
                                        </div>
                                        <span className="text-xs text-gray-400 group-hover/social:text-white transition-colors">LinkedIn</span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="text-center space-y-2">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()}{" "}
                            <span className="text-white font-medium">Gangadhar Pepakayala</span>. All
                            rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built with <span className="text-cyan-400">React.js</span> &{" "}
                            <span className="text-cyan-400">Tailwind CSS</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div
                    className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[90vw] sm:max-w-md ${isError
                        ? "bg-red-500/90 backdrop-blur-md border border-red-400/50"
                        : "bg-green-500/90 backdrop-blur-md border border-green-400/50"
                        } text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-2xl animate-fade-in mx-4`}
                    role="status"
                    aria-live="polite"
                >
                    <div className="flex items-center gap-2 sm:gap-3">
                        {isError ? (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        <span className="font-medium text-sm sm:text-base">{toastMsg}</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
