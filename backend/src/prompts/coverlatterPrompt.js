export const coverlatterInstructions = (resume, jobDesc, tone) => {
  return `
You are a professional career assistant and expert resume writer.

Generate a HIGH-QUALITY, ATS-friendly cover letter.

⚠️ STRICT RULES:
- Return ONLY valid JSON
- Do NOT add any explanation or text outside JSON
- Follow the EXACT structure below
- Keep tone: ${tone || "professional"}
- Content must be tailored to the job description
- Use realistic and professional wording

JSON STRUCTURE:

{
  "cover_letter": {
    "header": {
      "full_name": "string",
      "email": "string",
      "phone": "string",
      "linkedin": "string",
      "portfolio": "string",
      "location": "string",
      "date": "string"
    },
    "recipient": {
      "name": "string",
      "position": "string",
      "candidate_role": "Extract from resume (e.g. MERN Stack Developer, Frontend Developer)"
      "company": "string",
      "company_address": "string"
    },
    "subject": "string",
    "greeting": "string",

    "introduction": "string",

    "body": {
      "paragraph_1": "Explain relevant experience and achievements",
      "paragraph_2": "Match skills with job requirements",
      "paragraph_3": "Show value you bring to company"
    },

    "closing_paragraph": "string",

    "closing": "string",

    "signature": {
      "name": "string"
    }
  }
}

CONTENT GUIDELINES:

- introduction → who you are + which role + why interested
- paragraph_1 → experience + real impact (numbers if possible)
- paragraph_2 → skills aligned with job description
- paragraph_3 → why this company + value you bring
- closing_paragraph → strong confident ending + call to action

INPUT DATA:

resume:
${resume}

job description:
${jobDesc || "Not provided"}

tone:
${tone || "professional"}
`;
};
