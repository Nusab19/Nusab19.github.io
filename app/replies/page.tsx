import { getQuestions } from "@server/getQnA";
import AnonymousReplies from "./componenets/AnonymousReplies";

export const revalidate = 60 * 5; // 5 minutes

export default async function ExamplePage() {
  const questions = await getQuestions();

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
