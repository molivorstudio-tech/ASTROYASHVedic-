import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BLOG_POSTS = [
  {
    slug: "your-weekly-horoscope-august-2026",
    title: "Your Weekly Horoscope: Planetary Transits & Lunar Cycles",
    category: "Horoscopes",
    date: new Date("2026-08-26"),
    readTime: "5 min read",
    gradient: "from-amethyst-600/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Key planetary shifts this week for all 12 ascendants, including Moon transits and auspicious timing windows.",
    content: [
      "As we enter the final week of August, major celestial movements bring a shift in focus across career, relationships, and internal recalibration. The Moon moves through Taurus into Gemini, creating favorable windows for strategic planning and clear communication.",
      "Saturn's steady aspect encourages discipline over impulsive decision-making. If you have been delaying important financial reviews or administrative tasks, early this week provides the mental stamina to complete them efficiently.",
      "For fire ascendants (Aries, Leo, Sagittarius), Jupiter's supportive angle highlights potential expansion in creative ventures and team collaborations. Water ascendants (Cancer, Scorpio, Pisces) will benefit from setting healthy boundaries and prioritizing restful evening routines.",
      "Remember that horoscopes reflect the broader atmospheric weather. Your individual natal chart and current Mahadasha cycle determine how these planetary transits unfold specifically in your personal journey.",
    ].join("\n\n"),
    pullQuote:
      "Planetary transits set the background tone, but your ascendant and Dasha timeline determine your personal opportunity windows.",
    pullQuoteAttribution: "Yash Singh",
  },
  {
    slug: "understanding-your-saturn-return",
    title: "Understanding Your Saturn Return: Karmic Growth & Maturity",
    category: "Vedic Astrology",
    date: new Date("2026-08-20"),
    readTime: "8 min read",
    gradient: "from-indigo-600/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Demystifying Saturn's 2.5-year transit through your natal house and how to navigate structural life changes with grace.",
    content: [
      "Few astrological events carry as much cultural anxiety as the Saturn Return. Occurring approximately every 29.5 years when Saturn returns to the exact position it occupied at your birth, this period represents a pivotal rite of passage into true maturity.",
      "In classical Vedic astrology, Saturn (Shani) is not a punishing force, but the supreme auditor of karma. Saturn asks one fundamental question: Are the structures of your life — your career, relationships, habits, and self-conception — built on authentic foundations?",
      "During a Saturn Return, superficial commitments or unsustainable patterns tend to dissolve. While this process can feel uncomfortable initially, it ultimately strips away illusion and forces you to claim genuine self-responsibility.",
      "To navigate your Saturn Return effectively, focus on patience, daily discipline, and long-term craft over quick fixes. Embracing structural changes early prevents Saturn from having to dismantle them for you.",
    ].join("\n\n"),
    pullQuote:
      "Saturn removes only what was already unstable, leaving behind the unshakeable foundation of your true path.",
    pullQuoteAttribution: "Yash Singh",
  },
  {
    slug: "how-synastry-reveals-relationship-compatibility",
    title: "How Synastry Reveals Relationship Compatibility",
    category: "Relationships",
    date: new Date("2026-08-15"),
    readTime: "7 min read",
    gradient: "from-purple-600/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Beyond Sun sign matching: analyzing Ashtakoota points, Seventh House lords, and Venus-Mars synastry alignments.",
    content: [
      "Popular astrology often reduces relationship compatibility to simple Sun sign pairings. However, authentic Vedic synastry examines the intricate interweaving of two complete natal horoscopes.",
      "In Vedic tradition, compatibility begins with Moon sign alignment (Rashi) and Nakshatra positions through the Ashtakoota 36-point scoring system. This evaluates emotional harmony, temperament, spiritual alignment, and genetic longevity.",
      "Beyond numerical scores, analyzing the 7th house lord, Venus (Karaka of love), and Mars (energy and passion) reveals how a couple communicates, resolves friction, and supports each other's evolutionary growth.",
      "Synastry does not promise a conflict-free partnership; rather, it highlights where natural harmony exists and where conscious effort, empathy, and Vedic remedies can bridge differences.",
    ].join("\n\n"),
    pullQuote:
      "True compatibility is not the absence of differences, but the alignment of karmic direction and mutual emotional support.",
    pullQuoteAttribution: "Yash Singh",
  },
  {
    slug: "reading-your-dasha-timeline-beginners-guide",
    title: "Reading Your Dasha Timeline: A Beginner's Guide",
    category: "Vedic Astrology",
    date: new Date("2026-08-10"),
    readTime: "10 min read",
    gradient: "from-amethyst-700/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Learn how Mahadasha and Antardasha planetary cycles govern the major chapters and turning points of your life.",
    content: [
      "One of the most powerful diagnostic tools unique to Vedic astrology is the Vimshottari Dasha system — a 120-year planetary timeline that dictates the unfolding chapters of your life.",
      "While transits describe current weather conditions, your Dasha timeline reveals which planet holds the main stage. The major period (Mahadasha) sets the multi-year theme, while sub-periods (Antardasha) bring specific events to fruition.",
      "For instance, entering a Mercury Mahadasha often shifts focus toward learning, communication, commerce, and networking, whereas a Jupiter period expands wisdom, mentorship, and family life.",
      "Understanding your active Dasha period allows you to align your goals with celestial timing rather than pushing against natural planetary currents.",
    ].join("\n\n"),
    pullQuote:
      "Transits show the weather, but your Dasha timeline shows the season of life you are currently living in.",
    pullQuoteAttribution: "Yash Singh",
  },
  {
    slug: "mercury-retrograde-what-it-actually-means",
    title: "Mercury Retrograde: What It Actually Means for Your Chart",
    category: "Vedic Astrology",
    date: new Date("2026-08-04"),
    readTime: "6 min read",
    gradient: "from-blue-600/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Moving past the panic: how to use Mercury retrograde periods for reflection, contract reviews, and inner recalibration.",
    content: [
      "Mercury retrograde has become internet shorthand for technology glitches, delayed flights, and communication breakdowns. But from an astronomical and astrological perspective, retrograde motion is simply a period of apparent backward movement.",
      "When Mercury appears to move backward three to four times a year, it invites us to turn inward. Words starting with 're-' — re-evaluating, re-visiting, re-vising, and re-connecting — are the true domain of Mercury retrograde.",
      "Rather than fearing this phase, use it as a cosmic buffer. It is an ideal window for auditing ongoing projects, refining manuscripts, reconnecting with past mentors, and double-checking fine print in contracts.",
      "By approaching Mercury retrograde with awareness rather than anxiety, you turn a period of potential friction into a season of strategic refinement.",
    ].join("\n\n"),
    pullQuote:
      "Mercury retrograde is not a curse — it is nature's mandatory pause button for reflection and course-correction.",
    pullQuoteAttribution: "Yash Singh",
  },
  {
    slug: "career-timing-when-transits-favor-a-job-change",
    title: "Career Timing: When Planetary Transits Favor a Job Change",
    category: "Career",
    date: new Date("2026-07-28"),
    readTime: "9 min read",
    gradient: "from-emerald-600/40 via-cosmic-800/60 to-cosmic-950",
    excerpt:
      "Identifying optimal windows for promotions, business launches, and career transitions using 10th house Dasha timing.",
    content: [
      "Timing is everything in professional life. Pushing for a promotion or launching a new company during unfavorable transits can feel like swimming upstream, while acting during supportive windows creates natural momentum.",
      "In natal chart analysis, career matters are governed by the 10th house (Karma Bhava), its ruling planet, and the divisional Dasamsha chart (D-10). When positive planets transit your 10th or 11th house, career recognition typically accelerates.",
      "Key indicators for a successful career transition include beneficial Sun, Jupiter, or Mercury Dasha sub-periods activating your 10th house lord, paired with supportive Saturn transits.",
      "Consulting your planetary timing before making major career commitments ensures your strategic moves align with natural cosmic momentum.",
    ].join("\n\n"),
    pullQuote:
      "Strategic ambition combined with celestial timing turns hard work into inevitable professional breakthroughs.",
    pullQuoteAttribution: "Yash Singh",
  },
];

async function main() {
  console.log("🌱 Starting Prisma database seed...");

  // 1. Upsert Author ("Yash Singh")
  const author = await prisma.author.upsert({
    where: { slug: "yash-singh" },
    update: {
      name: "Yash Singh",
      bio: "Vedic astrologer with 12+ years experience specializing in natal chart analysis, planetary transit timing, and practical remedial guidance.",
    },
    create: {
      name: "Yash Singh",
      slug: "yash-singh",
      bio: "Vedic astrologer with 12+ years experience specializing in natal chart analysis, planetary transit timing, and practical remedial guidance.",
    },
  });

  console.log(`✅ Upserted Author: ${author.name} (ID: ${author.id})`);

  // 2. Upsert 6 Blog Posts
  for (const postData of BLOG_POSTS) {
    const post = await prisma.post.upsert({
      where: { slug: postData.slug },
      update: {
        title: postData.title,
        category: postData.category,
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        readTime: postData.readTime,
        body: postData.content,
        pullQuote: postData.pullQuote,
        pullQuoteAttribution: postData.pullQuoteAttribution,
        gradient: postData.gradient,
        authorId: author.id,
      },
      create: {
        title: postData.title,
        slug: postData.slug,
        category: postData.category,
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        readTime: postData.readTime,
        body: postData.content,
        pullQuote: postData.pullQuote,
        pullQuoteAttribution: postData.pullQuoteAttribution,
        gradient: postData.gradient,
        authorId: author.id,
      },
    });

    console.log(`✅ Upserted Post: ${post.title}`);
  }

  console.log("🎉 Seeding complete! All 6 posts and author record upserted in Prisma database.");
}

main()
  .catch((e) => {
    console.error("❌ Database seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
