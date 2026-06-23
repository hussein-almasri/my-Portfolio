"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="container px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription>Ready to build your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
