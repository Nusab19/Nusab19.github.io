"use client";
import { useState, useEffect, useRef } from "react";
import { Loader2, Check, X, MessageCircleMore } from "lucide-react";
import { cn, centerText } from "@lib/utils";

const EMAIL = "nusab19@duck.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailAddr, setEmailAddr] = useState(EMAIL);
  const [buttonState, setButtonState] = useState("send"); // states: send, sending, failed, success
  const isFormValid = message.trim().length > 0;
  const messageRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.target.blur();
        return;
      }

      if (e.key === "Tab") {
        if (e.shiftKey || e.ctrlKey) {
          return;
        }

        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const value = e.target.value;

        e.target.value =
          value.substring(0, start) + "\t" + value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 1;
        setMessage(e.target.value);
      }
    };

    const messageElem = messageRef.current;
    if (messageElem) {
      messageElem.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (messageElem) {
        messageElem.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const getButtonConfig = () => {
    switch (buttonState) {
      case "sending":
        return {
          text: "Sending",
          icon: <Loader2 className="ml-2 h-4 w-4 animate-spin" />,
          className: "bg-gray-600 cursor-not-allowed",
          disabled: true,
        };
      case "success":
        return {
          text: "Success",
          icon: <Check className="ml-2 h-4 w-4" />,
          className: "bg-emerald-600 hover:bg-emerald-700 cursor-default",
          disabled: true,
        };
      case "error":
        return {
          text: "Error",
          icon: <X className="ml-2 h-4 w-4" />,
          className: "bg-red-600 hover:bg-red-700 cursor-default",
          disabled: true,
        };
      default:
        return {
          text: "Send",
          icon: null,
          className: "bg-blue-400/60 hover:bg-blue-400/80",
          disabled: false,
        };
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!isFormValid || buttonState === "sending") {
      return;
    }

    setButtonState("sending");

    const metaInfo = {
      url: window.location.href,
      referrer: document.referrer || "Direct",
      language: navigator.language,
      timestamp: new Date().toLocaleString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      userAgent: navigator.userAgent,
      cores: navigator.hardwareConcurrency || "unknown",
      memory: navigator.deviceMemory
        ? `${navigator.deviceMemory} GB`
        : "unknown",
      cookiesEnabled: navigator.cookieEnabled,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      // whyAmITakingThisData: "Cuz as this is public, I do get lotta spams. It's just my means to indentify what's a spam and what not.",
    };

    try {
      const res = await sendMessage({
        name: name.trim() || "Anonymous",
        message: message,
        metaInfo,
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setButtonState("success");

      setTimeout(() => {
        setName("");
        setMessage("");
        setButtonState("send");
      }, 1500);
    } catch (error) {
      setButtonState("error");

      setTimeout(() => {
        setButtonState("send");
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  const buttonConfig = getButtonConfig();
  return (
    <div className="bg-[#0c0c14] text-gray-100">
      <div className="mx-auto max-w-screen-lg px-0 pb-40 pt-10">
        <header className="py-10 text-center text-3xl font-bold md:mb-20 md:pb-5 md:text-5xl">
          Contact
          <div className="mx-auto max-w-md pt-5 text-center text-sm font-medium tracking-wider text-gray-400">
            Send me a short message about anything. But in general, send me a
            mail at{" "}
            <code
              className="cursor-pointer whitespace-nowrap font-mono font-light text-blue-300/80 hover:text-blue-300/90"
              onClick={() => {
                navigator.clipboard.writeText("nusab19@duck.com");
                setEmailAddr(centerText("Copied", EMAIL.length));
                setTimeout(() => setEmailAddr(EMAIL), 1000);
              }}
              title="Click to copy"
            >
              {emailAddr}
            </code>
            <br />
            <span className="mx-auto max-w-md text-xs font-light md:text-sm">
              Don&apos;t forget to give your contact below if you want me to
              reply!
            </span>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center">
          <form className="w-full px-2 lg:px-0" onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="text"
                maxLength={50}
                id="floating_outlined"
                className="border-1 peer block w-full rounded-lg border-gray-700 bg-[#2b363b] px-2.5 pb-2.5 pt-2 text-sm text-gray-200 focus:outline-none focus:ring-0"
                placeholder=""
                autoComplete="off"
                value={name}
                onChange={(c) => setName(c.target.value)}
              />
              <label
                htmlFor="floating_outlined"
                className="absolute start-1 top-2 z-10 -mt-[1px] origin-[0] -translate-y-8 transform px-2 text-sm text-gray-400
                duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:px-4 peer-focus:top-2 peer-focus:-translate-y-8 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Name (Optional)
              </label>
            </div>

            <div className="mb-4 w-full rounded-lg border border-gray-950 bg-[#1b1e20]">
              <div className="rounded-t-lg bg-[#2b363b] px-4 py-2">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  ref={messageRef}
                  value={message}
                  onKeyDown={handleKeyDown}
                  maxLength={4000}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  rows="6"
                  className="w-full bg-[#2b363b] px-0 text-sm text-white placeholder-gray-400 outline-none"
                  placeholder="Write a message...(ctrl+enter to send)"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between px-3 py-2">
                <button
                  disabled={buttonConfig.disabled || !isFormValid}
                  className={cn(
                    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-center text-xs font-medium tracking-widest text-white transition-all duration-200 focus:ring-2 focus:ring-[#3a677c]",
                    buttonConfig.className,
                    buttonState === "send" &&
                      !isFormValid &&
                      "cursor-not-allowed opacity-50",
                    buttonState === "send" && isFormValid && "cursor-pointer",
                  )}
                  type="submit"
                >
                  {buttonConfig.text}
                  {buttonConfig.icon}
                </button>
                <div className="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse">
                  <p className="text-sm font-semibold text-gray-400">
                    {message.length} / 4000
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

async function sendMessage({ name, message, metaInfo }) {
  const jsonData = {
    messageForYou:
      "Ok. So, yes, you *can* exploit this. I know. I don't have the time to fix it now. But meh!",
    name,
    message,
    extra: metaInfo,
  };
  const res = await fetch("https://doc2-photo-bot.vercel.app/api/nusab", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
  const resp = await res.json();
  return resp;
}
