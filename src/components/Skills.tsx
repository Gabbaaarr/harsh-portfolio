import React from "react";
import { ChipList, SkillCategory } from "./Chips";

const skills: { [key in SkillCategory]: string[] } = {
  languages: ["Python", "JavaScript (Familiar)"],
  frameworks: ["FastAPI", "Flask", "Langchain", "Django", "Nodejs (Familiar)"],
  creativeAI: ["Stable Diffusion (Automatic1111, ComfyUI, ForgeUI)","Gradio", "RunPod","FLUX", "DALL-E", "MidJourney","Runway", "KlingAI", "Kaiber", "ImmersityAI", "ElevenLabs", "Hugging Face Spaces", "FreepikAI"],
  databases: ["MongoDB", "MySQL"],
  practices: ["Git", "GitHub"],
  cicd: [
    "AWS",
    "Docker",
    "Vercel",
    "GitHub Actions",
    "GCP",
  ],
};

const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>

      {(Object.entries(skills) as [SkillCategory, string[]][]).map(
        ([category, items]) => (
          <div key={category} className="mb-4">
            <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
              {category === "cicd" ? category.toUpperCase() : category}
            </h4>
            <ChipList items={items} category={category} />
          </div>
        )
      )}

    </div>
  );
};

export default Skills;
