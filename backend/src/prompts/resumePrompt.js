// src/services/resumePromptBuilder.js
import { roleInstructions } from "./jobrolePrompt.js";

export const buildResumePrompt = ({ text, improvementType, jobRole }) => {
  // pick instructions; if jobRole is not in map, use default
  const instructions =
    roleInstructions[jobRole] ||
    (typeof roleInstructions.default === "function"
      ? roleInstructions.default(jobRole)
      : "General resume improvement");

  return `
You are a professional resume writer and JSON formatter.

Improve the following resume to make it professional, ATS-friendly, and tailored to the job role.

Job Role: ${jobRole}
Improvement Type: ${improvementType}

Non Tech Role specific Instructions:${instructions}


Role-specific Instructions:
${roleInstructions[jobRole] || "General resume improvement"}

Return ONLY raw JSON. No markdown, no backticks.

Use this structure:
{
  "name": "",
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "portfolio": "",
  "title": "",
  "summary": "",
  "skills": [],
  "experience": [
    {
      "role": "",
      "company": "",
      "duration": "",
      "details": []
    }
  ],
  "projects": [
    {
      "title": "",
      "techstack": [],
      "live": ""
    }
  ]
}

Rules:
- Tailor skills and experience to match the job role
- Remove irrelevant technologies
- Use strong action words
- Keep it concise and impactful
- Return ONLY JSON

Resume:
${text}
`;
};
