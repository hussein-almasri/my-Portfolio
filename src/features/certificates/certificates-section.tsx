"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionTitle } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import {
  certificates,
  certificateCategories,
  getFeaturedCertificates,
  type CertificateCategory,
} from "./data";
import { CertificateCard } from "./certificate-card";

type ViewMode = "grid" | "timeline";

export function CertificatesSection() {
  const [view, setView] = useState<ViewMode>("grid");
  const [activeCategory, setActiveCategory] = useState<CertificateCategory | "all">("all");

  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const featuredCertificates = getFeaturedCertificates();

  return (
    <Section id="certificates" className="py-24">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <SectionTitle
            title="Certificates & Awards"
            description="Professional certifications and achievements that validate my expertise"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          />
        </motion.div>

        {/* Featured Certificates */}
        {featuredCertificates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="mb-6 text-lg font-semibold text-foreground">Featured</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredCertificates.map((cert, index) => (
                <CertificateCard key={cert.id} certificate={cert} index={index} view="grid" />
              ))}
            </div>
          </motion.div>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={activeCategory === "all" ? "default" : "secondary"}
              className={cn(
                "cursor-pointer transition-all hover:opacity-80",
                activeCategory === "all" && "bg-primary text-primary-foreground"
              )}
              onClick={() => setActiveCategory("all")}
            >
              All ({certificates.length})
            </Badge>
            {certificateCategories.map((cat) => {
              const count = certificates.filter((c) => c.category === cat.id).length;
              if (count === 0) return null;
              return (
                <Badge
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer transition-all hover:opacity-80",
                    activeCategory === cat.id && "text-primary-foreground"
                  )}
                  style={activeCategory === cat.id ? { backgroundColor: cat.color } : undefined}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name} ({count})
                </Badge>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 rounded-lg border border-border p-1">
            <button
              onClick={() => setView("grid")}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                view === "grid"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Grid
            </button>
            <button
              onClick={() => setView("timeline")}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                view === "timeline"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Timeline
            </button>
          </div>
        </motion.div>

        {/* Certificates Display */}
        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCertificates.map((cert, index) => (
                <CertificateCard key={cert.id} certificate={cert} index={index} view="grid" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              {filteredCertificates.map((cert, index) => (
                <CertificateCard key={cert.id} certificate={cert} index={index} view="timeline" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-muted-foreground">No certificates found in this category.</p>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
