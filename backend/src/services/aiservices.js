import OpenAI from "openai";
import client from "../Config/openai.js";

// console.log("API KEY:", process.env.OPENAI_API_KEY);

export const improveResume = async (text, improvementType) => {
  const prompt = `
You are a professional resume writer. 
Improve the following resume to make it more 
professional, ATS-friendly, and impactful.

Improvement Type: ${improvementType || "full"}

Resume:
${text}

Return the improved resume in clean format.
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  //console.log("FULL AI RESPONSE:", response);

  return response.choices[0].message.content;
};
