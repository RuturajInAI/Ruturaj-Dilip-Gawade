import { GoogleGenAI, Type } from "@google/genai";
import type { PortfolioContent } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not found");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getPortfolioContent = async (): Promise<PortfolioContent> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a full set of portfolio content for a fictional, highly-skilled 'PLC & HMI/SCADA Automation Engineer'. The theme is an 'Industrial Control Panel' or HMI. The tone should be technical, professional, and competent. 
      - For projects, create 3 realistic case studies of industrial automation projects they completed during their work. Focus on the problem, solution, and result. Do not use personal projects.
      - For skills, categorize them into 'PLC Programming', 'HMI/SCADA Development', 'Industrial Networking', and 'Robotics & Motion Control'. Provide 3-4 skills per category.
      - Invent plausible company names and job details for their experience.
      - Use the email 'ruturajabroad@gmail.com' for the contact section.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "A plausible full name." },
            title: { type: Type.STRING, description: "The job title: PLC & HMI/SCADA Automation Engineer." },
            tagline: { type: Type.STRING, description: "A short, technical tagline about building and optimizing industrial automation systems." },
            about: { type: Type.STRING, description: "A 2-3 sentence paragraph for an 'Operator Profile' section." },
            skills: {
              type: Type.ARRAY,
              description: "A list of 4 skill categories with specific skills under each.",
              items: {
                type: Type.OBJECT,
                properties: { 
                  category: { type: Type.STRING },
                  skills: { 
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: { name: { type: Type.STRING } },
                      required: ["name"]
                    }
                  }
                },
                required: ["category", "skills"],
              },
            },
            projects: {
              type: Type.ARRAY,
              description: "A list of 3 distinct and detailed work projects.",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING, description: "Describe the industrial problem, the automation solution, and the positive outcome." },
                  tech: { type: Type.ARRAY, items: { type: Type.STRING } },
                  link: { type: Type.STRING, description: "A placeholder URL for the project case study." },
                },
                required: ["title", "description", "tech", "link"],
              },
            },
            experience: {
              type: Type.ARRAY,
              description: "A list of 2 past job experiences.",
              items: {
                type: Type.OBJECT,
                properties: {
                  company: { type: Type.STRING },
                  title: { type: Type.STRING },
                  period: { type: Type.STRING, description: "e.g., 'Jan 2021 - Present'" },
                  description: { type: Type.STRING, description: "A sentence about key responsibilities in the role." },
                },
                required: ["company", "title", "period", "description"],
              },
            },
            contact: {
              type: Type.OBJECT,
              properties: {
                email: { type: Type.STRING, description: "Use this exact email address: ruturajabroad@gmail.com" },
                linkedin: { type: Type.STRING, description: "A placeholder LinkedIn URL." },
                github: { type: Type.STRING, description: "A placeholder GitHub URL." },
              },
               required: ["email", "linkedin", "github"],
            },
          },
          required: ["name", "title", "tagline", "about", "skills", "projects", "experience", "contact"],
        },
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error generating portfolio content:", error);
    throw new Error("Failed to generate portfolio content from AI.");
  }
};