import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Flame } from "lucide-react";

const setMetaTag = (name: string, content: string) => {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const FAQ = () => {
  const { t } = useTranslation();

  // SEO
  useEffect(() => {
    const title = `${t("faqPageTitle")} | DraQu`;
    document.title = title;
    setMetaTag("description", t("faqMetaDescription"));
    setCanonical(`${window.location.origin}/faq`);
  }, [t]);

  const items = useMemo(
    () => [
      {
        q: t("faqLaunchTitle"),
        a: t("faqLaunchAnswer"),
        id: "launch",
      },
      {
        q: t("faqPlayableTitle"),
        a: t("faqPlayableAnswer"),
        id: "playable",
      },
      {
        q: t("faqCoopTitle"),
        a: t("faqCoopAnswer"),
        id: "coop",
      },
      {
        q: t("faqLanguagesTitle"),
        a: t("faqLanguagesAnswer"),
        id: "languages",
      },
    ],
    [t]
  );

  // JSON-LD for FAQPage
  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    };
  }, [items]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="pt-28 pb-12 bg-gradient-to-b from-background to-background/60">
        <div className="container mx-auto px-6">
          <h1 id="faq-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center">
            <Flame className="mr-2 inline-block h-6 w-6 align-middle text-ancient-gold" aria-hidden="true" />
            <span className="bg-gradient-dragon bg-clip-text text-transparent">
              {t("faqHeroText")}
            </span>
          </h1>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            {t("faqIntro")}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-20">
        <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full divide-y divide-border/60 rounded-xl border border-border/60 bg-card/50 backdrop-blur-md shadow-lg">
            {items.map((it) => (
              <AccordionItem key={it.id} value={it.id}>
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-foreground px-4 md:px-6">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-4 md:px-6">
                  {it.id === "playable" ? (
                    <>
                      {it.a}{" "}
                      <a 
                        href="https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline transition-colors"
                      >
                        {t("steamPage")}
                      </a>
                    </>
                  ) : (
                    it.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
};

export default FAQ;
