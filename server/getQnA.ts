"use server";

import connectDB from "@db/connect";
import mongoose from "mongoose";
import AnonymousQuestion from "@/db/schema"; // Import your model

// Define the interface to match the schema
interface IAnonymousQuestion {
  _id: mongoose.Types.ObjectId;
  question: string;
  reply: string;
  time: string; // Changed from Date to string
  ip: string;
}

// Function to get all questions from the collection
async function getAllQuestions(): Promise<IAnonymousQuestion[]> {
  await connectDB();
  try {
    // Ensure connection is established before querying
    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB connection not established");
    }

    // Use the imported model instead of trying to recreate it
    // Fetch all questions sorted by time (newest first)
    const questions = await AnonymousQuestion.find({})
      .sort({ time: -1 })
      .lean();

    return questions as unknown as IAnonymousQuestion[];
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

// Function to transform MongoDB documents to component-friendly format
function formatQuestionsForComponent(questions: IAnonymousQuestion[]): any[] {
  return questions.map((question) => ({
    question: question.question,
    reply: question.reply,
    time: question.time,
  }));
}

async function getQuestions() {
  const questions = await getAllQuestions();
  return formatQuestionsForComponent(questions);
}

export { getQuestions };
