import React, { useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Avatar from "../assets/avatar.png";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import OdooLogo from "../assets/odoo/odoo.png";
import FlutterLogo from "../assets/flutter/flutter.png";
import GodotLogo from "../assets/godot/godot.jpg";

const PortfolioHomePage = () => {
  const projects = [
    {
      id: 1,
      title: "Odoo 13 System Development & Upgrade",
      description:
        "Involve in developing an application in the system which is used for make Purchase Request, Purchase Order, Create Report Summary, do Price Survey, and Show Report Analysis",
      image: OdooLogo,
    },
    {
      id: 2,
      title: "Flutter App Development",
      description:
        "Built an application that generates cooking recipes for the user in there mobile phones",
      image: FlutterLogo,
    },
    {
      id: 3,
      title: "Mobile Game Development",
      description:
        "Built a side-scrolling mobile game for Android devices using GoDot",
      image: GodotLogo,
    },
  ];

  const socialMediaLinks = {
    github: "https://github.com/Huy-DaraPichchan",
    cv: "https://drive.google.com/file/d/1IXkKXvhLwVt6coAfhHL7MAnTiBKl4dkI/view?usp=drive_link",
    linkedin: "https://linkedin.com/your-linkedin-profile",
    facebook: "https://facebook.com/your-facebook-profile",
    telegram: "https://t.me/your-telegram-profile",
    phoneNumber: "tel:+85586418040",
  };

  const [expandedProjects, setExpandedProjects] = useState([]);

  const handleProjectExpand = (projectId) => {
    setExpandedProjects((prevExpandedProjects) => {
      if (prevExpandedProjects.includes(projectId)) {
        return prevExpandedProjects.filter((id) => id !== projectId);
      } else {
        return [...prevExpandedProjects, projectId];
      }
    });
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />

      <section id='hero' className='bg-gray-900 text-white py-16 px-8'>
        <div className='container mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Welcome to My Portfolio!
          </h1>
          <p className='text-xl md:text-2xl mb-8'>
            Code is Love, Code is Life.
          </p>
        </div>
      </section>

      <section id='about' className='bg-gray-200 py-16 px-8'>
        <div className='container mx-auto flex flex-col items-center md:flex-row'>
          {/* Avatar */}
          <div className='flex-shrink-0 mb-8 md:mb-0 md:mr-8'>
            <img className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full' src={Avatar} alt='Avatar' />
          </div>

          {/* Description */}
          <div className='flex-grow'>
            <h2 className='text-3xl font-bold mb-8'>About Me</h2>
            <p className='text-xl mb-8'>
              I'm a passionate individual who loves game development, web
              development, and learning new things. I'm driven by a strong
              desire to continuously improve my skills and expand my knowledge.
              I'm particularly passionate about learning languages and believe
              in the power of technology to create meaningful experiences.
            </p>
            <p className='text-xl'>
              Feel free to explore my projects and get in touch with me if you
              have any inquiries or opportunities for collaboration. Thank you
              for your attention.
            </p>
            <br/>
            <a
              href={socialMediaLinks.cv}
              className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-lg font-semibold'
              target='_blank'
              rel='noopener noreferrer'
            >
              Check My CV
            </a>
          </div>
        </div>
      </section>

      <section id='projects' className='py-16 px-8'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>My Projects Summary</h2>
          <div className='grid gap-8 text-center'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='bg-gray-200 rounded-lg shadow-lg p-4'
              >
                <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
                <div className='mb-4 flex justify-center'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-2/6 h-auto rounded-lg'
                  />
                </div>
                <p className='sm:mx-5 sm:text-sm md:mx-10 md:text-xl text-gray-700'>{project.description}</p>
                <div className='flex justify-end mt-4'>
                  {/* <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    View Detail
                  </a> */}
                  <button
                    className='text-white hover:opacity-70 bg-blue-500 px-4 py-2 rounded-lg text-lg font-semibold'
                    onClick={() => handleProjectExpand(project.id)}
                  >
                    {expandedProjects.includes(project.id)
                      ? "Collapse"
                      : "Expand"}
                  </button>
                </div>
                {expandedProjects.includes(project.id) && (
                  <div className='mt-4'>
                    {/* Add additional images here */}
                    <img
                      src={project.image2}
                      alt={project.title}
                      className='w-full h-auto rounded-lg'
                    />
                    <img
                      src={project.image3}
                      alt={project.title}
                      className='w-full h-auto rounded-lg'
                    />
                    {/* ... Add more images as needed ... */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='contact' className='bg-gray-200 py-16 px-8'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>Contact Me</h2>
          <p className='text-xl mb-8'>
            If you have any questions or would like to discuss a potential
            project, feel free to reach out to me using the contact information
            below.
          </p>
        </div>
        {/* Social Media Links */}
        <div className='container mx-auto mt-8 flex justify-center'>
          <a
            className='mr-4 text-black-500 hover:text-blue-700'
            href={socialMediaLinks.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={28} />
          </a>
          {/* <a
            className='mr-4 text-blue-600 hover:opacity-70'
            href={socialMediaLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={28} />
          </a> */}
          <a
            className='mr-4 text-blue-600 hover:opacity-70'
            href={socialMediaLinks.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook size={28} />
          </a>
          {/* <a
            className='mr-4 text-sky-500 hover:opacity-70'
            href={socialMediaLinks.telegram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegram size={28} />
          </a> */}

          <a
            href='mailto:huy.darapichchan19@kit.edu.kh'
            className='mr-4 text-blue-500 hover:opacity-70'
          >
            <FcGoogle size={28} />
          </a>
          <a
            className='mr-4 text-black-500 hover:opacity-70'
            href={socialMediaLinks.phoneNumber}
          >
            <BsFillTelephoneFill size={28} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioHomePage;
