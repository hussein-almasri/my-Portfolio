"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>Learn more about my background</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              About content will go here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
