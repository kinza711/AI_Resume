// src/services/jobRolePrompts.js
export const roleInstructions = {
  react: `
Focus on React development.
Highlight hooks, state management, reusable components, APIs, performance optimization.
`,

  frontend: `
Focus on UI/UX, responsive design, HTML, CSS, JavaScript.
Highlight animations, accessibility, and cross-browser compatibility.
`,

  backend: `
Focus on server-side logic, APIs, databases, authentication.
Highlight Node.js, Express, REST APIs, and scalability.
`,

  fullstack: `
Balance frontend and backend.
Show ability to build full applications end-to-end.
`,

  ai: `
Highlight AI integrations, APIs, automation, and smart features.
Focus on problem-solving using AI tools.
`,

  wordpress: `
Focus on WordPress development.
Highlight themes, plugins, Elementor, WooCommerce, and SEO optimization.
`,

  // 🌸 General fallback for non-technical/custom roles
  default: (role) => `
Focus on the professional experience, skills, and achievements relevant to a ${role}.
Highlight accomplishments, responsibilities, and projects.
Keep it professional, concise, and impactful.
Tailor the resume to match the ${role} position.
`,
};
