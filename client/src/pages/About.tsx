import { Link } from "wouter";
import { ArrowLeft, Heart, Book, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate",
      description: "We approach every topic with empathy, understanding, and respect for diverse experiences.",
    },
    {
      icon: Book,
      title: "Evidence-Based",
      description: "Our content is grounded in research, expert insights, and credible sources.",
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "Your exploration is confidential, judgment-free, and designed with your comfort in mind.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="border-b border-border/50 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
          <Link href="/">
            <Button 
              variant="ghost" 
              size="sm"
              className="mb-4"
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-page-title"
          >
            About Pleazure
          </h1>
          <p 
            className="text-xl text-muted-foreground"
            data-testid="text-page-subtitle"
          >
            A safe space for sexual wellness and personal growth
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <div data-testid="text-mission">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/90 leading-relaxed">
                Pleazure was created to provide a trusted, inclusive resource for sexual wellness 
                education and personal development. We believe that everyone deserves access to 
                accurate, compassionate information about intimacy, relationships, and self-discovery.
              </p>
            </div>

            <div data-testid="text-approach">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Approach</h2>
              <p className="text-foreground/90 leading-relaxed">
                We combine evidence-based research with practical, real-world insights to create 
                content that's both informative and actionable. Our articles are designed to empower 
                you with knowledge, skills, and perspectives that support your well-being and growth.
              </p>
            </div>
          </div>

          <div>
            <h2 
              className="text-2xl font-semibold text-foreground mb-6"
              data-testid="text-values-heading"
            >
              Our Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="border-border/40 bg-card/40 backdrop-blur-sm p-6 space-y-3"
                  data-testid={`card-value-${index}`}
                >
                  <value.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-lg text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div data-testid="text-commitment">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
              <p className="text-foreground/90 leading-relaxed">
                We're committed to maintaining a judgment-free environment where curiosity is 
                encouraged and all questions are valid. Whether you're seeking to improve your 
                relationships, understand yourself better, or simply learn something new, Pleazure 
                is here to support your journey.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-center text-muted-foreground mb-6">
              Ready to explore?
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button size="lg" data-testid="button-start-exploring">
                  Start Exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
