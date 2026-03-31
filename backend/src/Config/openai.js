import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// client obj to craete connection to openai

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export default client;
