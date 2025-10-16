import { Link, useLocation } from "wouter";
import logoUrl from "@assets/pleazure logo_1760643091736.png";

export function Navigation() {
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

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "#categories", label: "Explore", isRoute: false },
    { href: "/about", label: "About", isRoute: true },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 transition-transform">
              <img 
                src={logoUrl} 
                alt="Pleazure" 
                className="h-8 w-auto"
                data-testid="img-logo"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? location === "/"
                : location.startsWith(link.href.replace("#", "/"));
              
              if (link.isRoute) {
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    <div
                      className={`
                        rounded-md px-4 py-2 text-sm font-medium transition-all
                        hover-elevate active-elevate-2
                        ${isActive 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              }
              
              return (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={handleScrollToCategories}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  <div
                    className={`
                      rounded-md px-4 py-2 text-sm font-medium transition-all
                      hover-elevate active-elevate-2 cursor-pointer
                      ${isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
