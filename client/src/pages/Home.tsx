import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import type { Article, Category } from "@shared/schema";

export default function Home() {
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: articles = [], isLoading: articlesLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  const getArticleCount = (categoryId: string) => {
    return articles.filter(a => a.categoryId === categoryId).length;
  };

  const getCategoryById = (categoryId: string) => {
    return categories.find(c => c.id === categoryId);
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,114,182,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                data-testid="text-hero-title"
              >
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Welcome to Pleazure
                </span>
              </h1>
              <p 
                className="text-xl sm:text-2xl text-muted-foreground leading-relaxed"
                data-testid="text-hero-subtitle"
              >
                Your trusted space for sexual wellness, education, and personal growth
              </p>
            </div>

            <p 
              className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl"
              data-testid="text-hero-description"
            >
              Explore evidence-based articles, practical insights, and thoughtful guidance 
              to enhance your well-being, relationships, and self-understanding.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#categories"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button 
                  size="lg" 
                  className="group"
                  data-testid="button-explore-categories"
                >
                  Explore Categories
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                    →
                  </span>
                </Button>
              </a>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-featured-title"
            >
              Featured Articles
            </h2>
            <p 
              className="text-muted-foreground"
              data-testid="text-featured-description"
            >
              Curated content to get you started
            </p>
          </div>

          {articlesLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(i => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <Skeleton className="h-5 w-24" />
                </Card>
              ))}
            </div>
          ) : featuredArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map(article => {
                const category = getCategoryById(article.categoryId);
                if (!category) return null;
                return (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    category={category}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-categories-title"
            >
              Explore by Category
            </h2>
            <p 
              className="text-muted-foreground"
              data-testid="text-categories-description"
            >
              Discover articles tailored to your interests
            </p>
          </div>

          {categoriesLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i} className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <Skeleton className="h-12 w-12 rounded" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-7 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                  <Skeleton className="h-5 w-24" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(category => (
                <CategoryCard 
                  key={category.id} 
                  category={category}
                  articleCount={getArticleCount(category.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
