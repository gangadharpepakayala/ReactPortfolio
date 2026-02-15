import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="bg-gray-100 dark:bg-primary-dark py-8 text-center border-t border-gray-200 dark:border-cyan-400/20 min-h-auto transition-colors duration-300">
            <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex justify-center items-center gap-2">
                Designed & Developed <FaHeart className="text-red-500 animate-pulse" /> by Gangadhar
            </div>
        </section>
    );
};

export default Footer;
