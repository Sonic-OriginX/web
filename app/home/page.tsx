"use client";

import { subtitle } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <section id="home" className="inline-flex w-full items-center justify-center flex-grow">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="max-w-lg text-center inline-block z-10 space-y-2">
          <div className="flex flex-col items-center justify-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center -space-y-3"
            >
              <motion.span
                className={cn(subtitle({ sizeText: "txl" }), "font-bold")}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                OriginX
              </motion.span>
              <motion.span
                className={subtitle()}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AI-driven DeFi platform that automates staking based on your risk profile for secure and optimized returns.
              </motion.span>
            </motion.div>
          </div>
          <Link href="/generate" className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-warning text-warning-foreground data-[hover=true]:opacity-hover w-fit py-3 inline-flex">
            Let&apos;s Go
          </Link>
        </div>
      </div>
    </section>
  );
}
