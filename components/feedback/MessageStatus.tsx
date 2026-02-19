"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StatusType = "success" | "failed";

export default function MessageStatus({
  open,
  type,
  onClose,
  onAction,
}: {
  open: boolean;
  type: StatusType;
  onClose: () => void;
  onAction?: () => void;
}) {
  const isSuccess = type === "success";

  const title = isSuccess
    ? "Message Sent Successfully!"
    : "Message failed to send.";

  const description = isSuccess
    ? "Thank you for reaching out. I’ll get back to you as soon as possible"
    : "An unexpected error occurred. Kindly try again in a few moments.";

  const buttonText = isSuccess ? "Back to Home" : "Try Again";

  const imageSrc = isSuccess ? "/png/success.png" : "/png/failed.png";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />

          {/* Card */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "absolute left-1/2 top-16 -translate-x-1/2",
              "w-[92%] max-w-105",
              "rounded-[28px] bg-[#0b0b0f]",
              "p-6 text-center",
              "shadow-[0_30px_90px_rgba(0,0,0,0.75)]",
              "ring-1 ring-white/10",
            )}
          >
            {/* Illustration */}
            <div className="flex justify-center">
              <Image
                src={imageSrc}
                alt="status"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-lg font-semibold text-white">{title}</h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {description}
            </p>

            {/* Button */}
            <button
              onClick={() => {
                if (onAction) onAction();
                onClose();
              }}
              className={cn(
                "mt-8 w-full rounded-full py-4",
                "text-sm font-semibold text-white",
                "bg-linear-to-r from-pink-500 to-purple-500",
                "shadow-[0_18px_40px_rgba(168,85,247,0.25)]",
                "hover:brightness-110 active:brightness-95 transition",
              )}
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
