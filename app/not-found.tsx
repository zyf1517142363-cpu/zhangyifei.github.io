"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <h1 className="text-6xl font-medium opacity-20">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page Not Found</h2>
        <p className="mt-3 opacity-60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-[var(--fg)] text-[var(--bg)] rounded-full hover:opacity-80 transition-opacity"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
