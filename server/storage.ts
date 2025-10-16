import { type Article, type Category } from "@shared/schema";

export interface IStorage {
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getAllArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getArticlesByCategory(categoryId: string): Promise<Article[]>;
}

export class MemStorage implements IStorage {
  private categories: Category[];
  private articles: Article[];

  constructor() {
    this.categories = [
      {
        id: "1",
        name: "Mind & Focus",
        description: "Cultivate mental clarity, mindfulness, and cognitive wellness for better decision-making and presence",
        icon: "🧠",
        slug: "mind-focus",
      },
      {
        id: "2",
        name: "Growth & Success",
        description: "Build confidence, set meaningful goals, and develop habits that support your personal evolution",
        icon: "🌱",
        slug: "growth-success",
      },
      {
        id: "3",
        name: "Relationships",
        description: "Deepen connection, improve communication, and navigate intimacy with partners and loved ones",
        icon: "💕",
        slug: "relationships",
      },
      {
        id: "4",
        name: "Self & Emotions",
        description: "Understand your inner world, process feelings, and build emotional resilience and self-awareness",
        icon: "🌟",
        slug: "self-emotions",
      },
      {
        id: "5",
        name: "Skills & Strategy",
        description: "Master practical techniques, communication skills, and strategies for navigating intimate moments",
        icon: "🎯",
        slug: "skills-strategy",
      },
      {
        id: "6",
        name: "Wellness",
        description: "Prioritize physical health, body awareness, and holistic well-being for a balanced life",
        icon: "💪",
        slug: "wellness",
      },
    ];

    this.articles = [
      // Mind & Focus
      {
        id: "1",
        title: "The Power of Mindful Intimacy",
        subtitle: "How staying present transforms your intimate experiences and deepens connection",
        content: `Mindful intimacy is about bringing your full attention to the present moment during intimate experiences. It's not just about physical presence—it's about mental and emotional presence too.

When we're truly present with our partner, we notice subtle cues, sensations, and emotions that we might otherwise miss. This awareness creates a feedback loop of connection, where both partners feel seen, heard, and valued.

Research shows that mindfulness practices can significantly improve sexual satisfaction and relationship quality. By reducing mental distractions and anxiety, mindfulness allows us to fully experience pleasure and connection.

Start by practicing simple breathing exercises together. Focus on synchronizing your breath with your partner's. Notice the sensations in your body without judgment. When your mind wanders—and it will—gently bring your attention back to the present moment.

The benefits extend beyond the bedroom. Couples who practice mindful intimacy report better communication, deeper emotional bonds, and greater overall relationship satisfaction. It's a skill that develops over time, so be patient with yourself and your partner.

Remember, there's no "perfect" way to be mindful. The goal is simply to show up, be present, and experience each moment as it unfolds.`,
        categoryId: "1",
        slug: "power-of-mindful-intimacy",
        readTime: 6,
        featured: true,
      },
      {
        id: "2",
        title: "Breaking Free from Performance Anxiety",
        subtitle: "Understanding and overcoming the mental barriers that affect intimate confidence",
        content: `Performance anxiety is one of the most common yet rarely discussed challenges in intimate relationships. It's a cycle where worry about performance actually creates the very problems we fear.

The root of performance anxiety often lies in unrealistic expectations—expectations we've absorbed from media, past experiences, or societal pressure. We forget that intimacy isn't a performance; it's a shared experience.

Understanding the mind-body connection is crucial. Anxiety triggers the sympathetic nervous system (fight or flight), which works against the relaxation needed for pleasurable experiences. Breaking this cycle requires both mental and physical strategies.

Cognitive reframing is powerful: instead of asking "Will I perform well?" ask "How can we enjoy this moment together?" This shift from outcome-focused to process-focused thinking reduces pressure dramatically.

Communication is your strongest tool. Talking openly with your partner about anxieties often reveals that they're more understanding and supportive than we imagine. Many partners experience similar concerns but rarely voice them.

Practice self-compassion. Everyone experiences moments of difficulty or distraction. These moments don't define your worth or capability. They're simply part of being human.

Consider seeking professional support if anxiety persists. Sex therapists and counselors specialize in these issues and can provide personalized strategies for your situation.`,
        categoryId: "1",
        slug: "breaking-free-performance-anxiety",
        readTime: 7,
        featured: false,
      },

      // Growth & Success
      {
        id: "3",
        title: "Building Confidence Through Self-Discovery",
        subtitle: "A practical guide to understanding your desires and communicating them authentically",
        content: `Confidence in intimate relationships starts with self-knowledge. Before we can clearly communicate our needs and desires to a partner, we must first understand them ourselves.

Self-discovery is an ongoing journey, not a destination. It involves curiosity about your body, your preferences, your boundaries, and your emotional landscape. This exploration is deeply personal and looks different for everyone.

Start by creating a judgment-free space for self-reflection. What brings you joy? What makes you feel safe? What are you curious about exploring? Write these thoughts down without censoring yourself.

Body awareness practices can deepen self-understanding. Notice how different sensations, environments, and mental states affect your physical experience. This awareness becomes invaluable information for intimate encounters.

Confidence grows when we honor our authentic selves rather than performing a version we think others expect. Authenticity is magnetic—it attracts connections that resonate with who we truly are.

Practice communicating your discoveries in low-stakes situations first. Share a preference, express a boundary, or voice a desire in everyday contexts. These small acts build the communication muscles you'll use in more intimate settings.

Remember that desires and preferences can evolve. What resonates today might shift tomorrow, and that's perfectly natural. Self-discovery is a continuous process of learning and growth.`,
        categoryId: "2",
        slug: "building-confidence-self-discovery",
        readTime: 6,
        featured: true,
      },
      {
        id: "4",
        title: "Setting Healthy Boundaries in Intimate Relationships",
        subtitle: "Why boundaries strengthen connections and how to establish them with care",
        content: `Boundaries aren't walls that keep people out—they're guidelines that help relationships flourish. They communicate our needs, limits, and values, creating clarity and mutual respect.

Many people struggle with boundaries because they fear being perceived as difficult or unloving. But the opposite is true: clear boundaries prevent resentment and create space for genuine intimacy.

Start by identifying your non-negotiables. What feels essential to your well-being? What makes you feel safe and respected? These core values form the foundation of your boundaries.

Communicate boundaries clearly and kindly. Use "I" statements: "I need time to process this" rather than "You're pushing me too fast." This approach reduces defensiveness and invites understanding.

Boundaries can be physical, emotional, temporal, or related to specific activities. All are equally valid. You might need space after difficult conversations, or specific agreements around intimate activities, or time for self-care.

Expect some discomfort when establishing new boundaries. Change requires adjustment for everyone involved. Stay consistent and compassionate—both toward yourself and your partner.

Healthy relationships honor boundaries even when they're inconvenient. If someone consistently disrespects your stated limits, that's valuable information about the relationship's dynamics.

Remember that boundaries can evolve. As trust deepens and circumstances change, you might adjust your boundaries—and that's perfectly healthy. The key is ongoing communication.`,
        categoryId: "2",
        slug: "setting-healthy-boundaries",
        readTime: 7,
        featured: false,
      },

      // Relationships
      {
        id: "5",
        title: "The Art of Active Listening in Intimate Conversations",
        subtitle: "Transform your relationship through the simple yet profound practice of truly hearing your partner",
        content: `Active listening is perhaps the most underrated skill in relationships. It's not just hearing words—it's fully engaging with your partner's message, emotions, and underlying needs.

In our fast-paced world, we often listen with the intent to respond rather than to understand. We're formulating our reply before our partner finishes speaking. This approach creates disconnection even in the midst of conversation.

True active listening requires presence. Put away distractions. Make eye contact. Notice body language and tone. These non-verbal cues often communicate more than words alone.

Reflect back what you hear: "It sounds like you're feeling frustrated because..." This validation shows you're engaged and helps clarify understanding. It also gives your partner the experience of being truly heard—a profound gift.

Ask clarifying questions from genuine curiosity: "Can you tell me more about that?" or "What would that look like for you?" These questions deepen understanding and show investment in their perspective.

Resist the urge to immediately problem-solve. Sometimes people just need to be heard, not fixed. Ask: "Are you looking for suggestions, or do you need me to just listen?"

Notice when defensiveness arises in you. Take a breath. Remember that your partner's feelings and experiences are valid even if they differ from your own perspective.

Practice active listening in all areas of your relationship, not just during conflicts. The skill strengthens with regular use and transforms communication patterns over time.`,
        categoryId: "3",
        slug: "art-of-active-listening",
        readTime: 6,
        featured: true,
      },
      {
        id: "6",
        title: "Navigating Desire Discrepancy with Compassion",
        subtitle: "Finding balance when partners have different levels of desire for intimacy",
        content: `Desire discrepancy—when partners want different frequencies or types of intimacy—is one of the most common relationship challenges. It's rarely about rejection and almost always about complex individual factors.

Understanding that desire exists on a spectrum helps. Some people experience spontaneous desire (arising seemingly out of nowhere), while others experience responsive desire (developing in response to stimuli). Neither is better or worse—they're simply different.

The partner with higher desire often feels rejected and undesired. The partner with lower desire may feel pressured and inadequate. Both experiences are valid and deserve compassion.

Communication is essential, but timing matters. Discuss this topic when you're both calm and connected, not in the heat of the moment or after rejection.

Explore what influences each partner's desire. Stress, fatigue, medication, hormones, relationship dynamics, and mental health all play roles. Understanding these factors reduces blame and opens possibilities for solutions.

Broaden your definition of intimacy. Physical connection exists on a spectrum from hand-holding to sex. Finding connection points that work for both partners maintains intimacy even during low-desire periods.

Consider scheduled intimacy—it sounds unromantic, but anticipation can build desire, especially for those with responsive desire patterns. It also removes the pressure of constant negotiation.

If the discrepancy causes significant distress, couples therapy or sex therapy can provide personalized strategies. Professional support offers tools that generic advice can't match.`,
        categoryId: "3",
        slug: "navigating-desire-discrepancy",
        readTime: 7,
        featured: false,
      },

      // Self & Emotions
      {
        id: "7",
        title: "Understanding and Processing Sexual Shame",
        subtitle: "Healing from shame to embrace authentic pleasure and self-acceptance",
        content: `Sexual shame is a heavy burden that many carry, often unconsciously. It stems from cultural messages, religious upbringing, past experiences, or societal expectations about how we "should" be.

Shame thrives in silence. The first step toward healing is acknowledging its presence without judgment. Notice where shame shows up: certain thoughts, activities, or body parts that trigger feelings of wrongness or inadequacy.

Differentiate between guilt and shame. Guilt says "I did something bad." Shame says "I am bad." This distinction matters because shame attacks our core identity, making it particularly painful and difficult to address.

Challenge the messages that created shame. Where did they come from? Do they align with your current values? Are they based on facts or outdated beliefs? This critical examination creates space for new, healthier narratives.

Practice self-compassion. Speak to yourself as you would to a dear friend experiencing similar feelings. Replace harsh self-judgment with understanding and kindness.

Connect with others who've experienced similar struggles. Whether through support groups, online communities, or therapy, shared experiences reduce the isolation that amplifies shame.

Reclaim your narrative. You get to decide what healthy sexuality means for you—not society, not past partners, not media. This autonomy is powerful and healing.

Healing from shame is gradual. Be patient with yourself. Each small step toward self-acceptance is valuable progress, even when the journey feels slow.`,
        categoryId: "4",
        slug: "understanding-processing-sexual-shame",
        readTime: 6,
        featured: false,
      },
      {
        id: "8",
        title: "Embracing Vulnerability in Intimate Connections",
        subtitle: "Why opening up emotionally creates the deepest bonds and how to do it safely",
        content: `Vulnerability—the willingness to be seen as we truly are—is the foundation of genuine intimacy. Yet it's also one of the scariest acts we can engage in.

We fear vulnerability because it means risk: the risk of rejection, judgment, or pain. But without vulnerability, connections remain surface-level, leaving us feeling lonely even in relationships.

Brené Brown's research shows that vulnerability is not weakness—it's courage. It takes tremendous strength to show our authentic selves, complete with imperfections, fears, and needs.

Start small. Share a minor worry or hope with someone you trust. Notice how it feels. Often, we discover that vulnerability is met with acceptance and reciprocal sharing, deepening the connection.

Vulnerability in intimate relationships means communicating desires, fears, and boundaries honestly. It means asking for what you need. It means admitting when you don't know something or when you're scared.

Create safety for vulnerability through consistent reliability and non-judgment. When your partner shares vulnerably, honor that trust by responding with compassion and maintaining confidentiality.

Not everyone deserves your vulnerability. Reserve deep sharing for relationships that have demonstrated safety, respect, and trustworthiness over time.

Remember that vulnerability is a practice, not a one-time event. As relationships deepen, so can the levels of vulnerability you share, creating ever-stronger bonds.`,
        categoryId: "4",
        slug: "embracing-vulnerability-intimate-connections",
        readTime: 6,
        featured: false,
      },

      // Skills & Strategy
      {
        id: "9",
        title: "Effective Communication During Intimate Moments",
        subtitle: "Practical techniques for expressing needs and checking in with your partner",
        content: `Communication during intimate moments can feel awkward, but it's one of the most powerful tools for mutual pleasure and connection. The key is making it natural and integrated.

Start conversations outside the bedroom. Discuss preferences, boundaries, and desires when you're both relaxed and clothed. This removes pressure and allows for thoughtful communication.

Use positive framing: "I really enjoy when you..." rather than "You never..." This approach encourages openness without triggering defensiveness.

Develop a shared vocabulary. Some couples use playful code words, while others prefer direct language. Find what works for your dynamic and reduces awkwardness.

Check-ins don't have to be verbal. A squeeze of the hand, eye contact, or a specific sound can communicate "yes, keep going" or "let's slow down." Establish these signals together.

Practice giving and receiving feedback graciously. "A little to the left" or "softer please" are helpful guides, not criticisms. Respond to feedback with curiosity and appreciation.

"Yes/No/Maybe" lists can be fun tools for exploration. Each partner marks activities they're interested in, creating a roadmap of shared interests and boundaries.

Remember that consent is ongoing. A "yes" at the beginning doesn't mean "yes" throughout. Regular check-ins ensure everyone remains comfortable and engaged.

If verbal communication feels too disruptive, try incorporating it as part of the experience: "Tell me what feels good" or "Should I keep going?" can enhance connection.`,
        categoryId: "5",
        slug: "effective-communication-intimate-moments",
        readTime: 7,
        featured: false,
      },
      {
        id: "10",
        title: "Exploring New Territory with Confidence and Care",
        subtitle: "A thoughtful approach to trying new experiences in your intimate life",
        content: `Curiosity about new experiences is natural and healthy. The key is approaching exploration with intention, communication, and mutual respect.

Before suggesting something new, reflect on why it interests you. Understanding your motivation helps you communicate clearly and assess whether it aligns with your values and relationship dynamics.

Start the conversation with curiosity rather than pressure: "I've been curious about..." or "How do you feel about..." These openings invite dialogue rather than demands.

Research together. Read articles, watch educational content, or explore resources as a team. Shared learning builds excitement and ensures you're both informed.

Establish boundaries before trying anything new. Discuss what you're comfortable with, what you'd like to explore gradually, and what's off-limits. These boundaries can evolve but should be clear from the start.

Take things slowly. You don't have to dive into the deep end immediately. Gradual exploration allows for adjustment, feedback, and increasing comfort levels.

Debrief afterward. What did you both enjoy? What felt uncomfortable? What would you want to repeat or modify? These conversations improve future experiences.

Remember that "no" is a complete answer. If your partner isn't interested in exploring something, respect that boundary without pressure or resentment. Their comfort and enthusiasm matter as much as yours.

Recognize that fantasies and reality differ. Something that seems appealing in theory might not translate to practice—and that's okay. Experimentation includes discovering what doesn't work for you.`,
        categoryId: "5",
        slug: "exploring-new-territory-confidence-care",
        readTime: 7,
        featured: false,
      },

      // Wellness
      {
        id: "11",
        title: "The Connection Between Overall Health and Intimate Wellness",
        subtitle: "How physical health, mental well-being, and intimate satisfaction influence each other",
        content: `Our intimate lives don't exist in isolation—they're deeply connected to our overall physical and mental health. Understanding these connections empowers us to support our well-being holistically.

Physical health directly impacts intimate function. Cardiovascular health, hormone levels, sleep quality, and chronic conditions all play roles. Regular exercise improves blood flow, energy levels, and body confidence.

Mental health is equally crucial. Depression, anxiety, and stress significantly affect desire, arousal, and pleasure. Addressing mental health concerns often improves intimate experiences as a natural side effect.

Sleep deprivation is a silent intimacy killer. Fatigue reduces desire and makes it harder to be present. Prioritizing sleep is one of the simplest yet most effective ways to support intimate wellness.

Nutrition matters more than we often realize. What we eat affects hormone production, energy levels, and overall vitality. A balanced diet supports the body's natural functions, including those related to intimacy.

Stress management is essential. Chronic stress keeps the body in fight-or-flight mode, which inhibits relaxation and pleasure. Regular stress-reduction practices—meditation, exercise, hobbies—create space for intimacy to flourish.

Certain medications can affect desire and function. If you notice changes after starting a new medication, discuss options with your healthcare provider. Often, alternatives or adjustments are available.

Preventive care matters. Regular check-ups, health screenings, and open communication with healthcare providers about intimate concerns ensure you're addressing issues before they become significant problems.

Remember that intimate wellness is part of overall wellness, not separate from it. Caring for your whole self ultimately supports the intimate aspects of your life.`,
        categoryId: "6",
        slug: "connection-health-intimate-wellness",
        readTime: 7,
        featured: false,
      },
      {
        id: "12",
        title: "Body Positivity and Intimate Confidence",
        subtitle: "Cultivating self-acceptance and comfort in your own skin",
        content: `Body image significantly impacts intimate confidence. When we're worried about how we look, it's difficult to relax into pleasure and connection.

The messages we receive about bodies—from media, peers, and culture—often create unrealistic standards. These standards have nothing to do with actual attractiveness or worthiness of pleasure and everything to do with profit and control.

Your body is not an ornament for others' viewing pleasure—it's the vessel through which you experience life, connection, and sensation. This shift in perspective is profound.

Practice body neutrality if body positivity feels too far of a stretch. You don't have to love every aspect of your body, but you can appreciate what it does for you and treat it with respect.

Notice how you talk to yourself about your body. Would you speak to a friend that way? Replace harsh criticism with neutral observation or gentle kindness.

Explore your body from a sensation-focused perspective rather than an appearance-focused one. What feels good? What's sensitive? What's comfortable? This awareness builds embodied confidence.

Communicate with partners about insecurities if needed, but remember: they chose to be intimate with you. Their attraction is about the whole package—personality, energy, connection, and yes, your body.

Limit exposure to media that makes you feel inadequate. Curate your social media, choose body-positive content, and remember that even "perfect" bodies in images are often heavily edited.

Movement and activities that feel good in your body—dancing, stretching, walking—help you inhabit your body with joy rather than criticism.`,
        categoryId: "6",
        slug: "body-positivity-intimate-confidence",
        readTime: 6,
        featured: false,
      },
    ];
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categories;
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return this.categories.find(c => c.slug === slug);
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articles;
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return this.articles.find(a => a.slug === slug);
  }

  async getArticlesByCategory(categoryId: string): Promise<Article[]> {
    return this.articles.filter(a => a.categoryId === categoryId);
  }
}

export const storage = new MemStorage();
