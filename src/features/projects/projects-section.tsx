"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Featured work and experiments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Projects will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
