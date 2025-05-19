"use server";

export async function generateLatex(
  jobDescription: string,
  resumeParsed: string,
  language: string,
  tone: string,
  length: string,
  latexTemplate: string
): Promise<string> {
  try {
    const prompt = createCoverLetterPrompt(
      jobDescription,
      resumeParsed,
      language,
      tone,
      length,
      latexTemplate
    );

    // Using Google's Gemini API instead of OpenAI
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2000,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`API error: ${data.error?.message || "Unknown error"}`);
    }

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No valid response from Gemini API");
    }

    // Extract the content from Gemini response
    const content = data.candidates[0].content.parts[0].text;

    // Extract the LaTeX code from the response
    const latexCode = content.includes("```latex")
      ? content.split("```latex")[1].split("```")[0].trim()
      : content.trim();

    // Validate the LaTeX code
    // const isValidLatex = latex.validate(latexCode);

    const htmlPreview = "<pre>" + latexCode + "</pre>";

    return htmlPreview;
  } catch (error) {
    console.error("Error generating LaTeX cover letter:", error);
    throw new Error("Failed to generate cover letter");
  }
}

const createCoverLetterPrompt = (
  jobDescription: string,
  resumeParsed: string,
  language: string,
  tone: string,
  length: string,
  latexTemplate: string
): string => {
  return `
    You are a professional resume and cover letter writer with LaTeX expertise. Your task is to generate a highly tailored, grammatically correct, and professionally formatted cover letter in LaTeX format. Follow the instructions and structure precisely.

    ---

    📌 INSTRUCTIONS:

    1. Use the provided job description and personal data to craft a persuasive, role-specific cover letter.
    2. Output a **compilable LaTeX document** using the \`article\` class and \`geometry\` package.
    3. Match tone, length, and language exactly as specified.
    4. Structure: sender info, recipient placeholder, date, greeting, 3-body-paragraph layout (intro, value proposition, closing), signature.
    5. Do not include a CV or any extraneous info — only the cover letter.
    6. Ensure LaTeX syntax correctness (compiles with \`pdflatex\`).

    ---

    📄 JOB DESCRIPTION:
    ${jobDescription}

    ---

    👤 CANDIDATE PROFILE:
    ${resumeParsed}

    ---

    ⚙️ SETTINGS:
    - Language: ${language}
    - Tone: ${tone}
    - Length: ${length}
    - Template Style: Professional (standard corporate format)

    ---

    🎯 OUTPUT FORMAT:
    Return only the **raw LaTeX code** for the cover letter using this base structure:

    \`\`\`latex
    ${latexTemplate}
    \`\`\`
    Ensure the LaTeX code is clean, well-structured, and ready for compilation. Do not include any additional text or explanations outside of the LaTeX code block.
    `;
};
