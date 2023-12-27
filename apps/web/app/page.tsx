import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Web() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Heading
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              expedita natus? Tempora blanditiis ullam amet corporis nisi,
              dolorum, id quo tempore explicabo voluptas, necessitatibus omnis
              quia reprehenderit impedit natus deleniti?
            </p>
            <div className="space-x-4">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
