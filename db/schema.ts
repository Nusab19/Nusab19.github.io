import mongoose, { Schema, Document, model, models, Model } from "mongoose";

// Define the interface
interface IAnonymousQuestion extends Document {
  question: string;
  reply: string;
  time: string; // Changed from Date to string
  ip: string;
}

const AnonymousQuestionSchema = new Schema<IAnonymousQuestion>(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    reply: {
      type: String,
      default: "",
      trim: true,
      required: true,
    },
    time: {
      type: String, // Changed from Date to String
      default: () => new Date().toISOString(), // Convert Date to ISO string
      required: true,
    },
    ip: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { collection: "replies" },
);

// Add indexes
AnonymousQuestionSchema.index({ time: -1 });

// Ensure the model is registered properly
const AnonymousQuestion = 
  mongoose.models.AnonymousQuestion || 
  mongoose.model<IAnonymousQuestion>("AnonymousQuestion", AnonymousQuestionSchema);

export default AnonymousQuestion;