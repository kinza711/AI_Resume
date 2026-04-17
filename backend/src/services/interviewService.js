import client from "../config/openai.js";
import { interviewPrompt } from "../prompts/interviewPrompt.js";

export const startInterviewService = async (jobDesc, resume) => {
  try {
    const prompt = interviewPrompt(jobDesc);
    const aiResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });
    return aiResponse.choices[0].message.content;
  } catch (err) {
    console.error(err, "interview start service not responding");
  }
};

// answer interview
export const answerInterviewService = async (messages) => {
  try {
    const aiResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });
    return aiResponse.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return "Sorry, I couldn't understand that.";
  }
};
