"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Contact form will be built here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
