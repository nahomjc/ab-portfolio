"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi! I'm your creative AI helper. Ask me anything about design! 🎨",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");
      // Simulate AI reply
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { from: "ai", text: "🤖 I'm just a demo, but I'm here to help!" },
        ]);
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            key="open"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-accent text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl hover:scale-110 focus:outline-none"
            onClick={() => setOpen(true)}
            aria-label="Open chat"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-accent"
          >
            <div className="bg-accent text-white px-4 py-3 flex items-center justify-between">
              <span className="font-bold">AI Helper</span>
              <button
                className="text-white text-xl hover:text-gray-200 focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className="flex-1 px-4 py-2 overflow-y-auto max-h-60 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`my-2 flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow
                      ${
                        msg.from === "user"
                          ? "bg-accent text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              className="flex items-center border-t border-gray-200 bg-white"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <input
                className="flex-1 px-3 py-3 text-base rounded-bl-2xl focus:outline-none bg-white text-gray-900 placeholder-gray-400"
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={open}
              />
              <button
                type="submit"
                className="px-4 py-2 text-accent font-bold hover:text-white hover:bg-accent rounded-br-2xl transition-colors"
                aria-label="Send message"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
