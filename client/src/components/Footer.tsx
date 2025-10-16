import { Link, useLocation } from "wouter";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, setLocation] = useLocation();

  const handleScrollToCategories = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById("categories");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("categories");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/20 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground" data-testid="text-footer-brand">
              Pleazure
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted space for sexual wellness and education
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground" data-testid="text-footer-explore">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-home">
                  Home
                </span>
              </Link>
              <a href="#categories" onClick={handleScrollToCategories}>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-categories">
                  Categories
                </span>
              </a>
              <Link href="/about">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-about">
                  About
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground" data-testid="text-footer-legal">
              Legal
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-privacy">
                  Privacy Policy
                </span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2" data-testid="text-footer-copyright">
            <span>© {currentYear} Pleazure. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>for your wellness journey</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
