import client from "../Config/openai.js";
import { coverlatterInstructions } from "../prompts/coverlatterPrompt.js";

export const generateCover = async (
  resume,
  jobDesc = "",
  tone = "friendly",
) => {
  const prompt = coverlatterInstructions(resume, tone, jobDesc);

  console.log("coverlater genaeated");

  const aiResponse = await client.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: "You must return the response in valid JSON format.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return aiResponse.choices[0].message.content;
};
