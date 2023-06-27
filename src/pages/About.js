// import React from "react";
// import Header from "../components/Header.js";
// import Footer from "../components/Footer.js";
// import avatarImage from "../assets/avatar.png";

// export default function About() {
//   // Define your social media links
//   const socialMediaLinks = {
//     github: "https://github.com/your-github-profile",
//     cv: "https://your-cv-link",
//     linkedin: "https://linkedin.com/your-linkedin-profile",
//     facebook: "https://facebook.com/your-facebook-profile",
//     telegram: "https://t.me/your-telegram-profile",
//     phoneNumber: "tel:+85586418040",
//   };

//   return (
//     <>
//       <Header />
//       <div className="w-full min-h-screen bg-gray-200">
//         <section id="about" className="bg-gray-200 py-16 px-8">
//           <div className="container mx-auto flex items-center">
//             {/* Avatar */}
//             <div className="flex-shrink-0 mr-8">
//               <img
//                 className="w-64 h-64 rounded-full"
//                 src={avatarImage}
//                 alt="Avatar"
//               />
//             </div>

//             {/* Description */}
//             <div className="flex-grow">
//               <h2 className="text-3xl font-bold mb-8">About Me</h2>
//               <p className="text-xl mb-8">
//                 I have a strong passion for web development and love creating
//                 beautiful, interactive websites. With expertise in React.js and
//                 Tailwind CSS, I strive to deliver high-quality solutions to my
//                 clients.
//               </p>
//               <p className="text-xl">
//                 Feel free to explore my projects and get in touch with me if
//                 you have any inquiries or opportunities for collaboration.
//               </p>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="container mx-auto mt-8 flex justify-center">
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.cv}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               CV
//             </a>
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn
//             </a>
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Facebook
//             </a>
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.telegram}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Telegram
//             </a>
//             <a
//               className="mr-4 text-blue-500 hover:text-blue-700"
//               href={socialMediaLinks.phoneNumber}
//             >
//               Phone
//             </a>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// }
