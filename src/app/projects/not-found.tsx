import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
        <span className="text-4xl font-bold text-muted-foreground">404</span>
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground">Project Not Found</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The project you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/#projects">Back to Projects</Link>
      </Button>
    </Container>
  );
}
