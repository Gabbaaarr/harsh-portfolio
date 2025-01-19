import React from "react";
import Image from "next/legacy/image";
import { FaYoutube } from "react-icons/fa";
import { ChipList } from "./Chips";

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  youtubeLink?: string;
}

const projects: Project[] = [
  {
    name: "AI-Film (Ended up in Top3 in Generative AI Buildathon)",
    description: [
      "Finalist in the Generative AI Buildathon, crafting an AI-driven film that combined seamless storytelling and visual generation, securing a top 3 spot in the highly competitive AI Film Making category. [Short film link attached below].☄️",
    ],
    technologies: [
      "FLUX",
      "ComfyUI",
      "RunwayML",
      "custom character training",
      "LoRA Model",
    ],
    image: "/AI-Film.png",
    youtubeLink: "https://youtu.be/u3sWBztK-k8?si=ljUmqxLyup9tyma8",
  },
  {
    name: "SketchBot",
    description: [
      "SketchBot is a real-time selfie-to-sketch system that combines Stable Diffusion, AWS backend, and robotic arm integration to create precise, hand-drawn art at live events. 📦",
    ],
    technologies: ["Python", "Flask", "Stable Diffusion", "Controlnet", "LoRA Models"],
    image: "/sketchbot.png",
    youtubeLink: "https://drive.google.com/file/d/1e5nRCz0axtENIt8wohl9W8bdUK35V6AO/view?usp=drive_link",
  },
  {
    name: "Real-time AI Mirror",
    description: [
      "Built a real-time AI mirror that transforms prompts into dynamic visuals, animations, and interactive content instantly. 🌟 ",
    ],
    technologies: ["ComfyUI", "Controlnet Models", "Huggingface", "python"],
    image: "/realtime.png",
    youtubeLink: "https://drive.google.com/file/d/1_3Hs5yhtIEftWdc7-ZEKes1IOJiEksWL/view?usp=sharing",
  },
  {
    name: "TwitterBot",
    description: [
      "TwitterBot is an AI-powered system that generates dynamic images and witty responses using DALL-E and ChatGPT, ensuring real-time engagement with a scalable AWS backend. ⚙️",
    ],
    technologies: ["Python", "Twitter API", "Nodejs", "DALL-E", "Chatgpt 4o API"],
    image: "/twitterbot.jpeg",
    youtubeLink: "https://www.linkedin.com/posts/harsh-satarkar-950794203_teamroninlabs-oneplus-projectsuccess-activity-7217172199814680576-y4z7?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "VirtuLook",
    description: [
      "Created a comfyUI workflow for VirtuLook, enabling seamless virtual try-ons by generating realistic clothing overlays from user input, ensuring a personalized and immersive experience. 🤖 ",
    ],
    technologies: ["ComfyUI", "IDM models", "Controlnet models", "FLUX"],
    image: "/virtulook.jpeg",
    youtubeLink: "https://www.linkedin.com/posts/harsh-satarkar-950794203_genai-comfyui-visualtryon-activity-7256702759951851523-CZp8?utm_source=share&utm_medium=member_desktop",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="py-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
        <ul className="space-y-12">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={150}
                    className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                    {project.name}
                  </h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="mr-2 mt-1.5 text-gray-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <ChipList items={project.technologies} category="frameworks" />
                  <div className="flex space-x-4 mt-4">
                    {project.youtubeLink && (
                      <a
                        href={project.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <FaYoutube className="mr-2" />
                        <span>View link</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
