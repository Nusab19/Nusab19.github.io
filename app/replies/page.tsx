import AnonymousReplies from "./componenets/AnonymousReplies";
import questions from "../../public/questions.json";

export default function Replies() {
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
