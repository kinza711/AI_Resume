import OpenAI from "openai";
import client from "../Config/openai.js";
import { buildResumePrompt } from "../prompts/resumePrompt.js";

// console.log("API KEY:", process.env.OPENAI_API_KEY);

export const improveResume = async (
  text,
  improvementType = "full",
  jobRole = "react",
) => {
  try {
    const prompt = buildResumePrompt({ text, improvementType, jobRole });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI SERVICE ERROR:", error);
    throw new Error("Failed to improve resume");
  }
};
