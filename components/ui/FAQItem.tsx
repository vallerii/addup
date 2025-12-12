"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function FAQItem({ question, answer, expanded = false }: { question: string; answer?: string, expanded?: boolean }) {
  const [isExpanded, setExpanded] = useState(expanded);

  return (
    <div
      className="px-4 py-3.5 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
      onClick={() => setExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-base font-medium text-neutral-1000">{question}</h4>
        {isExpanded ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
            <path
              d="M12 6.85841H6.85714L5.14286 6.86037V6.85841H0V5.14413H5.14286L6.85714 5.13916L12 5.14413V6.85841Z"
              fill="#2A2A2A"
            />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
            <path
              d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z"
              fill="#2A2A2A"
            />
          </svg>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && answer && (
          <motion.p
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium text-neutral-500 pr-6 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

