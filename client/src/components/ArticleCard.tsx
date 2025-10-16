import { Link } from "wouter";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article, Category } from "@shared/schema";

interface ArticleCardProps {
  article: Article;
  category: Category;
}

export function ArticleCard({ article, category }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`} data-testid={`link-article-${article.id}`}>
      <Card 
        className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover-elevate active-elevate-2 h-full"
        data-testid={`card-article-${article.id}`}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className="bg-secondary/50 text-xs"
              data-testid={`badge-category-${article.id}`}
            >
              {category.icon} {category.name}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span data-testid={`text-readtime-${article.id}`}>{article.readTime} min</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 
              className="font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2"
              data-testid={`text-title-${article.id}`}
            >
              {article.title}
            </h3>
            <p 
              className="text-sm text-muted-foreground line-clamp-2"
              data-testid={`text-subtitle-${article.id}`}
            >
              {article.subtitle}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
              Read More 
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
