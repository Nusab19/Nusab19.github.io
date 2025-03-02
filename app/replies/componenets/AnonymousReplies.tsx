"use client";

import { useState, useEffect } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { MessageCircle, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Noto_Serif_Bengali } from "next/font/google";
import { cn } from "@lib/utils";

const BanglaFont = Noto_Serif_Bengali({
  subsets: ["latin"],
  weight: ["500"],
});

interface QuestionAnswer {
  question: string;
  reply: string;
  time: string;
}

interface AnonymousRepliesProps {
  items: QuestionAnswer[];
  title?: string;
  description?: string;
}

export default function AnonymousReplies({
  items = [],
  title = "Anonymous Questions",
  description = "Questions and answers from the community",
}: AnonymousRepliesProps) {
  const [sortedItems, setSortedItems] = useState<QuestionAnswer[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<QuestionAnswer[]>(items);

  useEffect(() => {
    // Sort items by time in descending order (newest first)
    const sorted = [...items].sort((a, b) => {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });
    setSortedItems(sorted);
  }, [items]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems(sortedItems);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = sortedItems.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.reply.toLowerCase().includes(query),
    );
    setFilteredItems(filtered);
  }, [searchQuery, sortedItems]);

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-3xl rounded-lg bg-zinc-900 p-6 text-zinc-100",
        BanglaFont.className,
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <Badge
          variant="outline"
          className="flex items-center gap-1 border-zinc-700 bg-zinc-800 text-zinc-300"
        >
          <MessageCircle className="h-3 w-3" />
          {items.length}
        </Badge>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
        <Input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-zinc-700 bg-zinc-800 pl-8 text-zinc-200 placeholder:text-zinc-500"
        />
      </div>

      {filteredItems.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredItems.map((item, index) => (
            <QuestionAnswerItem key={index} item={item} index={index} />
          ))}
        </Accordion>
      ) : (
        <div className="flex h-24 items-center justify-center text-zinc-500">
          {searchQuery ? "No matching questions found" : "No questions yet"}
        </div>
      )}
    </div>
  );
}

function QuestionAnswerItem({
  item,
  index,
}: {
  item: QuestionAnswer;
  index: number;
}) {
  // Parse the time string to a Date object
  const date = parseISO(item.time);

  // Format the relative time (e.g., "2 days ago")
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  // Format the actual time for the tooltip
  const actualTime = new Date(date).toLocaleString();

  return (
    <AccordionItem
      value={`item-${index}`}
      className="overflow-hidden rounded-md border-zinc-800"
    >
      <AccordionTrigger className="bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-800 hover:no-underline focus:outline-none">
        <div className="flex w-full flex-col">
          <div className="mb-1 flex w-full items-center justify-between">
            <span className="text-xs font-medium text-emerald-400">
              Question
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-xs text-zinc-500">
                    {relativeTime}
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="border-zinc-700 bg-zinc-800"
                >
                  <p className="text-xs text-zinc-300">{actualTime}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm font-medium text-zinc-100">
            {item.question}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-zinc-850 px-4 py-3 text-zinc-300">
        <div className="border-l border-zinc-700 pl-3">
          <div className="mb-1 text-xs font-medium text-zinc-400">Reply</div>
          <div className="text-sm">{item.reply}</div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
