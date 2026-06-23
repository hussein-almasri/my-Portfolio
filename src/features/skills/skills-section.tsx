"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Technologies I work with</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Skills and technologies will be listed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
