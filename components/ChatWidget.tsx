// components/ChatWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

type Role = "user" | "assistant";
type Msg = { id: string; role: Role; text: string };

export default function ChatWidget() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Chat error");

      const reply =
        typeof data?.output === "string"
          ? data.output
          : JSON.stringify(data, null, 2);

      const botMsg: Msg = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: reply,
      };
      setMessages((m) => [...m, botMsg]);
    } catch {
      const botErr: Msg = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "Sorry, I couldn’t reach the assistant right now. Please try again.",
      };
      setMessages((m) => [...m, botErr]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 h-14 w-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-black/60 transition-all z-[100]"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-6 left-6 w-[380px] h-[600px] max-w-[92vw] rounded-3xl shadow-2xl border border-white/10 bg-black/50 backdrop-blur-md flex flex-col overflow-hidden z-[100]"
          style={{ fontFamily: 'Anton-Regular, sans-serif' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="text-lg text-white/90 tracking-wide">R.O.V. CHAT</span>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-white text-white/60 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto p-6 space-y-4"
          >
            {messages.length === 0 && (
              <div className="text-sm text-white/50 text-center mt-8">
                Ask us anything
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm max-w-[85%] ${m.role === "user"
                  ? "ml-auto bg-white/10 text-white border border-white/20"
                  : "mr-auto bg-white/5 text-white/90 border border-white/10"
                  }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-white/40 text-center">Thinking...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Message..."
                rows={1}
                className="flex-1 resize-none rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-all"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="rounded-2xl bg-white/10 border border-white/20 px-5 py-3 text-white text-sm disabled:opacity-30 hover:bg-white/20 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
