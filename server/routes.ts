import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/categories - Get all categories
  app.get("/api/categories", async (_req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // GET /api/categories/:slug - Get category by slug
  app.get("/api/categories/:slug", async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category" });
    }
  });

  // GET /api/articles - Get all articles
  app.get("/api/articles", async (_req, res) => {
    try {
      const articles = await storage.getAllArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  // GET /api/articles/:slug - Get article by slug
  app.get("/api/articles/:slug", async (req, res) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });

  // GET /api/categories/:categoryId/articles - Get articles by category
  app.get("/api/categories/:categoryId/articles", async (req, res) => {
    try {
      const articles = await storage.getArticlesByCategory(req.params.categoryId);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
