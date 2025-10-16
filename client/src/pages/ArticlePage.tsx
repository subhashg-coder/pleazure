import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Clock, Share2, Copy, Check } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import type { Article, Category } from "@shared/schema";

export default function ArticlePage() {
  const [, params] = useRoute("/article/:slug");
  const articleSlug = params?.slug;
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: articles = [], isLoading: articlesLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const article = articles.find(a => a.slug === articleSlug);
  const category = categories.find(c => c.id === article?.categoryId);

  const currentIndex = articles.findIndex(a => a.id === article?.id);
  const nextArticle = currentIndex >= 0 && currentIndex < articles.length - 1 
    ? articles[currentIndex + 1] 
    : null;
  const nextCategory = nextArticle ? categories.find(c => c.id === nextArticle.categoryId) : null;

  const isLoading = categoriesLoading || articlesLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <Skeleton className="h-9 w-48 mb-6" />
          <header className="space-y-6 pb-8 border-b border-border/50">
            <div className="flex flex-wrap items-center gap-3">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-8 w-full" />
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-28" />
            </div>
          </header>
          <div className="py-12 space-y-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </article>
      </div>
    );
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (platform: "whatsapp" | "telegram") => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this article: ${article?.title}`);
    
    const urls = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${text}`,
    };

    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  if (!article || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground" data-testid="text-not-found">
            Article not found
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
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/category/${category.slug}`}>
          <Button 
            variant="ghost" 
            size="sm"
            className="mb-6"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {category.name}
          </Button>
        </Link>

        <header className="space-y-6 pb-8 border-b border-border/50">
          <div className="flex flex-wrap items-center gap-3">
            <Badge 
              variant="secondary" 
              className="bg-secondary/50"
              data-testid="badge-category"
            >
              {category.icon} {category.name}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span data-testid="text-readtime">{article.readTime} min read</span>
            </div>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            data-testid="text-article-title"
          >
            {article.title}
          </h1>

          <p 
            className="text-xl text-muted-foreground"
            data-testid="text-article-subtitle"
          >
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share:
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("whatsapp")}
              data-testid="button-share-whatsapp"
              className="gap-2"
            >
              <SiWhatsapp className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("telegram")}
              data-testid="button-share-telegram"
              className="gap-2"
            >
              <SiTelegram className="h-4 w-4" />
              Telegram
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              data-testid="button-copy-link"
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none py-12"
          data-testid="text-article-content"
        >
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground/90 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {nextArticle && nextCategory && (
        <section className="border-t border-border/50 bg-card/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
            <h2 
              className="text-xl font-semibold mb-6 text-foreground"
              data-testid="text-next-article-heading"
            >
              Continue Reading
            </h2>
            <Link href={`/article/${nextArticle.slug}`}>
              <Card 
                className="group border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover-elevate active-elevate-2"
                data-testid="card-next-article"
              >
                <div className="p-6 space-y-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary/50 text-xs"
                  >
                    {nextCategory.icon} {nextCategory.name}
                  </Badge>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {nextArticle.subtitle}
                  </p>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Read Next
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
