import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import type { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

export function CategoryCard({ category, articleCount = 0 }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} data-testid={`link-category-${category.id}`}>
      <Card 
        className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover-elevate active-elevate-2 h-full"
        data-testid={`card-category-${category.id}`}
      >
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div 
              className="text-4xl transition-transform group-hover:scale-110 duration-300"
              data-testid={`text-icon-${category.id}`}
            >
              {category.icon}
            </div>
            {articleCount > 0 && (
              <div 
                className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-muted/30"
                data-testid={`text-count-${category.id}`}
              >
                {articleCount} {articleCount === 1 ? "article" : "articles"}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h3 
              className="font-semibold text-xl text-foreground group-hover:text-accent transition-colors"
              data-testid={`text-name-${category.id}`}
            >
              {category.name}
            </h3>
            <p 
              className="text-sm text-muted-foreground line-clamp-2"
              data-testid={`text-description-${category.id}`}
            >
              {category.description}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-sm font-medium text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
              Explore 
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
