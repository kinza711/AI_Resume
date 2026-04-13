import client from "../Config/openai.js";
import { coverlatterInstructions } from "../prompts/coverlatterPrompt.js";

export const generateCover = async (
  // resume,
  jobDesc = "",
  tone = "friendly",
) => {
  const prompt = coverlatterInstructions(tone, jobDesc);

  console.log("coverlater genaeated");

  const aiResponse = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return aiResponse.choices[0].message.content;
};
