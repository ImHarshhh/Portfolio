import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaStackOverflow, FaInstagram, FaCode } from 'react-icons/fa';
import Container from './Container';

const Socials = () => {
  return (
    <section id="socials" className="py-16 md:py-24 bg-gray-50">
      <Container className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a2b4d] mb-8">
          Connect With Me
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl">
          Let's connect and build something amazing! You can find me on these platforms:
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a
            href="https://www.linkedin.com/in/harsh-chaudhari-a00b58244/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <FaLinkedin className="text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>

          <a
            href="https://github.com/ImHarshhh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <FaGithub className="text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/IamHarshh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <FaCode className="text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">LeetCode</span>
          </a>

          <a
            href="https://www.instagram.com/harshc_148/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <FaInstagram className="text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold">Instagram</span>
          </a>

        </div>
      </Container>
    </section>
  );
};

export default Socials;