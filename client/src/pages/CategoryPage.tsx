import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article, Category } from "@shared/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  const categorySlug = params?.slug;

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: articles = [], isLoading: articlesLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const category = categories.find(c => c.slug === categorySlug);
  const categoryArticles = articles.filter(a => a.categoryId === category?.id);
  
  const isLoading = categoriesLoading || articlesLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
            <Skeleton className="h-9 w-32" />
            <div className="flex items-start gap-4">
              <Skeleton className="h-16 w-16 rounded" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-12 w-64" />
                <Skeleton className="h-6 w-full max-w-2xl" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(i => (
                <Card key={i} className="p-6 space-y-4">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-5 w-24" />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground" data-testid="text-not-found">
            Category not found
          </p>
          <Link href="/">
            <Button variant="outline" data-testid="button-go-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="border-b border-border/50 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
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

          <div className="flex items-start gap-4">
            <div 
              className="text-5xl sm:text-6xl"
              data-testid="text-category-icon"
            >
              {category.icon}
            </div>
            <div className="flex-1 space-y-3">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
                data-testid="text-category-name"
              >
                {category.name}
              </h1>
              <p 
                className="text-lg text-muted-foreground max-w-2xl"
                data-testid="text-category-description"
              >
                {category.description}
              </p>
              <p 
                className="text-sm text-muted-foreground/80"
                data-testid="text-article-count"
              >
                {categoryArticles.length} {categoryArticles.length === 1 ? "article" : "articles"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryArticles.length === 0 ? (
            <div 
              className="text-center py-12 text-muted-foreground"
              data-testid="text-no-articles"
            >
              No articles in this category yet. Check back soon!
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  category={category}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
