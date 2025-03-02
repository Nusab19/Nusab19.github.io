import { getQuestions } from "@server/getQnA";
import AnonymousReplies from "./componenets/AnonymousReplies";

export const revalidate = 60 * 5; // 5 minutes

export default async function ExamplePage() {
  // Sample data
  const questionsAndAnswers = [
    {
      question: "Who are you?",
      reply: "I am Nusab Taha",
      time: "2025-03-03 03:24:55.298931",
    },
    {
      question: "What is your favorite programming language?",
      reply: "I enjoy working with TypeScript and React for web development.",
      time: "2025-03-02 15:30:22.123456",
    },
    {
      question: "How long have you been coding?",
      reply:
        "I've been coding for over 5 years now, focusing primarily on web technologies.",
      time: "2025-02-28 09:15:33.987654",
    },
    {
      question: "What projects are you currently working on?",
      reply:
        "I'm currently building a personal portfolio website and contributing to open-source projects in my spare time.",
      time: "2025-02-25 18:45:10.456789",
    },
    {
      question: "Do you have any advice for new developers?",
      reply:
        "Focus on understanding the fundamentals, build projects that interest you, and don't be afraid to ask questions. Consistent practice and curiosity will take you far.",
      time: "2025-02-20 12:10:05.654321",
    },
  ];
  const questions = await getQuestions();
  console.log(questions)

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12">
      <AnonymousReplies
        items={questions}
        title="Anonymous Questions"
        description="Replies to the anonymous messages that were sent to me"
      />
    </div>
  );
}
