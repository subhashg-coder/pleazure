import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p 
            className="text-xl text-muted-foreground"
            data-testid="text-page-subtitle"
          >
            Your privacy and confidentiality matter to us
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div data-testid="text-intro">
              <p className="text-foreground/90 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-foreground/90 leading-relaxed">
                At Pleazure, we understand that privacy is especially important when exploring 
                sensitive topics. This Privacy Policy explains how we handle information when you 
                visit our website.
              </p>
            </div>

            <div data-testid="text-information-collection">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Pleazure is designed to be a simple, static information resource. We do not collect, 
                store, or process any personal information about our visitors. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                <li>We do not require you to create an account</li>
                <li>We do not track your browsing behavior</li>
                <li>We do not use cookies or similar tracking technologies</li>
                <li>We do not collect your email address or any contact information</li>
              </ul>
            </div>

            <div data-testid="text-anonymous-browsing">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Anonymous Browsing
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                You can browse Pleazure completely anonymously. We believe that learning about 
                sexual wellness should be private and judgment-free, which is why we've intentionally 
                designed our platform to respect your privacy.
              </p>
            </div>

            <div data-testid="text-third-party">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Third-Party Services
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Our website is hosted on Replit. While we don't collect data ourselves, your internet 
                service provider and hosting service may have access to basic technical information 
                (like IP addresses) as part of standard web hosting practices.
              </p>
            </div>

            <div data-testid="text-external-links">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                External Links
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                When you use our share features (WhatsApp, Telegram, Copy Link), you may be directed 
                to third-party platforms. These platforms have their own privacy policies, which we 
                encourage you to review.
              </p>
            </div>

            <div data-testid="text-changes">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                If we make any changes to this privacy policy, we will update the "Last updated" 
                date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </div>

            <div data-testid="text-contact">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Questions?
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                If you have any questions about this privacy policy or our practices, please feel 
                free to reach out through our About page.
              </p>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-border/50 text-center">
            <p className="text-muted-foreground mb-6">
              Feel safe exploring our content
            </p>
            <Link href="/">
              <Button size="lg" data-testid="button-start-reading">
                Start Reading
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
