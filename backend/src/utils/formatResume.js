export const formatResumeData = (text) => {
  return {
    name: text.match(/Name:\s*(.*)/)?.[1]?.trim() || "",
    email: text.match(/Email:\s*(.*)/)?.[1]?.trim() || "",
    phone: text.match(/Phone:\s*(.*)/)?.[1]?.trim() || "",
    linkedin: text.match(/LinkedIn:\s*(.*)/)?.[1]?.trim() || "",
    github: text.match(/GitHub:\s*(.*)/)?.[1]?.trim() || "",
    portfolio: text.match(/Portfolio:\s*(.*)/)?.[1]?.trim() || "",

    title: text.match(/Title:\s*(.*)/)?.[1]?.trim() || "",

    summary: text.match(/Professional Summary:\s*([\s\S]*?)\n\n/)?.[1]?.trim() || "",

    skills: text.match(/Skills:\s*([\s\S]*?)\n\n/)?.[1]
      ?.split("\n")
      .map(s => s.replace("-", "").trim()) || [],

    experience: text.match(/Experience:\s*([\s\S]*)/)?.[1]?.trim() || "",
  };
};