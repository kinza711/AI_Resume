export const coverlatterInstructions = (jobDesc, tone) => {
  return `
You are a professional career assistant.

Create a cover letter using:

Job Description: ${jobDesc || "Not provided"}
Tone: ${tone || "professional"}

Make it professional, clear, and ATS friendly.
`;
};