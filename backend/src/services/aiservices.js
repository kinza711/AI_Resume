import OpenAI from "openai";
import client from "../Config/openai.js";

// console.log("API KEY:", process.env.OPENAI_API_KEY);

// export const improveResume = async (text, improvementType) => {
//   const prompt = `
// You are a professional resume writer and JSON formatter.

// Improve the following resume to make it more professional, ATS-friendly, and impactful.

// Return the output strictly in this JSON structure:

// {
//   "name": "Full Name",
//   "email": "Email Address",
//   "phone": "Phone Number",
//   "linkedin": "LinkedIn URL",
//   "github": "GitHub URL",
//   "portfolio": "Portfolio URL",
//   "title": "Professional Title",
//   "summary": "A concise professional summary",
//   "skills": ["Skill 1", "Skill 2", "..."],
//   "experience": [
//     {
//       "role": "Role",
//       "company": "Company Name",
//       "duration": "Duration",
//       "details": ["Achievement 1", "Achievement 2"]
//     }
//   ],
//       "projects ": [
//     {
//       "title": "LMS Website with AI-Integration",
//       "techstack": ["MERN" ,"mongodb", "react", "nodemon", "express", "jwt", "bcrypt"],
//       "live": "live demo"

//     }
//   ]
// }

// Improvement Type: ${improvementType || "full"}

// Original Resume Text:
// ${text}

// Make sure:
// - All fields are filled if information is available.
// - Skills are returned as an array.
// - Experience is an array of objects with role, company, duration, and details.
// - Links (LinkedIn, GitHub, Portfolio) are properly formatted URLs.
// - Do not add extra text outside JSON.
// `;

//   const response = await client.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }],
//   });
//   //console.log("FULL AI RESPONSE:", response);

//   return response.choices[0].message.content;
// };

export const improveResume = async (text, improvementType) => {
  const prompt = `
You are a professional resume writer and JSON formatter. 

Improve the following resume to make it more professional, ATS-friendly, and impactful.

Return ONLY raw JSON. No backticks, no markdown, no extra text. Just pure JSON.

Use this exact structure:
{
  "name": "Full Name",
  "email": "Email Address",
  "phone": "Phone Number",
  "linkedin": "LinkedIn URL",
  "github": "GitHub URL",
  "portfolio": "Portfolio URL",
  "title": "Professional Title",
  "summary": "A concise professional summary",
  "skills": ["Skill 1", "Skill 2"],
  "experience": [
    {
      "role": "Role",
      "company": "Company Name",
      "duration": "Duration",
      "details": ["Achievement 1", "Achievement 2"]
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "techstack": ["React", "Node.js"],
      "live": "https://live-demo-url.com"
    }
  ]
}

Improvement Type: ${improvementType || "full"}

Original Resume:
${text}

Rules:
- Fill all fields if information is available
- Skills as array
- Experience as array of objects
- Projects as array of objects
- Valid URLs only
- Return ONLY JSON — no backticks, no markdown
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }, // 🔥 yeh lagao
  });

  return response.choices[0].message.content;
};
