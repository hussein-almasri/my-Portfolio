"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FilterTab {
  id: string;
  label: string;
  count: number;
  color?: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export function FilterTabs({ tabs, activeTab, onChange, className }: FilterTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
      role="tablist"
      aria-label="Filter options"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
              isActive
                ? "text-white shadow-md"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            )}
            style={
              isActive && tab.color
                ? { backgroundColor: tab.color, boxShadow: `0 4px 14px ${tab.color}40` }
                : {}
            }
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full", isActive ? "bg-white/50" : "")}
              style={!isActive && tab.color ? { backgroundColor: tab.color } : {}}
            />
            {tab.label}
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                isActive ? "bg-white/20" : "bg-muted text-muted-foreground"
              )}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
