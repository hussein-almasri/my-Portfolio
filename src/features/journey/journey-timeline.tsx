"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle, Container } from "@/components/ui/container";
import { journeyMilestones } from "./data";
import { TimelineItem } from "./timeline-item";

export function JourneyTimeline() {
  return (
    <Section id="journey" variant="gradient" spacing="xl">
      <Container variant="narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionTitle
            badge="My Journey"
            title="The Path So Far"
            description="Every milestone marks a step forward in my growth as a developer"
          />
        </motion.div>

        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="journey-year-badge relative rounded-full border-2 border-primary/30 bg-primary/10 px-8 py-3">
            <span className="text-2xl font-bold text-primary">2024</span>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {journeyMilestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.id}
              milestone={milestone}
              index={index}
              isLast={index === journeyMilestones.length - 1}
            />
          ))}
        </div>

        {/* End Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
            <div className="h-2 w-2 rounded-full bg-primary-foreground" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">To be continued...</p>
        </motion.div>
      </Container>
    </Section>
  );
}
