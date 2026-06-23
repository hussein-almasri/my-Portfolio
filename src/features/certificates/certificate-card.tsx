"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Certificate } from "./data";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  view: "grid" | "timeline";
}

export function CertificateCard({ certificate, index, view }: CertificateCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  if (view === "timeline") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative flex gap-6"
      >
        {/* Timeline Line */}
        <div className="absolute bottom-0 left-[19px] top-10 w-[2px] bg-border" />

        {/* Timeline Dot */}
        <div
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2"
          style={{
            borderColor: certificate.color,
            backgroundColor: `${certificate.color}20`,
          }}
        >
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: certificate.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <Card className="glass-subtle hover:shadow-elevation-3 group relative overflow-hidden transition-all duration-300">
            {/* Hover Glow */}
            <div
              className="absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
              style={{ backgroundColor: certificate.color }}
            />

            <CardContent className="relative p-5">
              <div className="mb-3 flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="text-base font-semibold leading-tight text-foreground">
                    {certificate.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatDate(certificate.date)}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {certificate.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {certificate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>

              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Credential
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-subtle hover:shadow-elevation-3 group relative h-full overflow-hidden transition-all duration-300">
        {/* Hover Glow */}
        <div
          className="absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
          style={{ backgroundColor: certificate.color }}
        />

        {/* Top Color Bar */}
        <div
          className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: certificate.color }}
        />

        <CardContent className="relative flex h-full flex-col p-5">
          {/* Header */}
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Issuer Icon */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${certificate.color}15` }}
              >
                <span className="text-lg font-bold" style={{ color: certificate.color }}>
                  {certificate.issuer.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-base font-semibold leading-tight text-foreground">
                  {certificate.title}
                </h4>
                <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {certificate.description}
          </p>

          {/* Skills */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {certificate.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-normal">
                {skill}
              </Badge>
            ))}
            {certificate.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs font-normal">
                +{certificate.skills.length - 3}
              </Badge>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs text-muted-foreground">{formatDate(certificate.date)}</span>

            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
              >
                Verify
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">ID: {certificate.credentialId}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
