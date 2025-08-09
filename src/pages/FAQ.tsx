import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    const title = `${t("faqPageTitle", { defaultValue: "Preguntas Frecuentes" })} | DraQu`;
    document.title = title;
    setMetaTag(
      "description",
      t(
        "faqMetaDescription",
        {
          defaultValue:
            "Preguntas frecuentes de DraQu: fechas, comunidad, mundo del juego y cómo apoyar el desarrollo.",
        }
      )
    );
    setCanonical(`${window.location.origin}/faq`);
  }, [t]);

  const items = useMemo(
    () => [
      {
        q: t("faqWhenTitle", { defaultValue: "¿Cuándo sale DraQu: El Despertar de los Elementos?" }),
        a: t(
          "faqWhenAnswer",
          {
            defaultValue:
              "Lo más pronto posible. Estoy desarrollando el juego yo solo, y aunque eso lleva su tiempo, le estoy poniendo todo mi cariño y esfuerzo para que desde el primer momento sea divertido, jugable y con ese toque mágico que buscamos. Prefiero que salga bien y que os encante, a sacarlo a medias.",
          }
        ),
        id: "when",
      },
      {
        q: t("faqWhereTitle", { defaultValue: "¿Dónde puedo seguir todo lo nuevo?" }),
        a: t(
          "faqWhereAnswer",
          {
            defaultValue:
              "En nuestro Discord. Ahí os enseñaré vídeos del progreso, escenas del juego y pruebas internas. Además, cuando empecemos con los updates en Steam, los veréis primero allí.",
          }
        ),
        id: "where",
      },
      {
        q: t("faqWorldTitle", { defaultValue: "¿Qué puedo esperar del mundo del juego?" }),
        a: t(
          "faqWorldAnswer",
          {
            defaultValue:
              "Muy pronto os contaremos más del lore… pero aquí va un adelanto: el juego está ambientado en un mundo donde los dragones han tomado el control de los elementos, y los jugadores deberán cooperar para restaurar el equilibrio en la Taberna de los Elementos. Cada partida será un reto contra las fuerzas que gobiernan este universo.",
          }
        ),
        id: "world",
      },
      {
        q: t("faqSupportTitle", { defaultValue: "¿Cómo puedo apoyar desde ya?" }),
        a: t(
          "faqSupportAnswer",
          {
            defaultValue:
              "Añádelo a tu lista de deseados en Steam. Es gratis, nos ayuda muchísimo y te avisará cuando esté listo para jugar.",
          }
        ),
        id: "support",
      },
    ],
    [t]
  );

  // JSON-LD for FAQPage
  const faqJsonLd = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((it) => ({
        '@type': 'Question',
        name: it.q,
        acceptedAnswer: { '@type': 'Answer', text: it.a },
      })),
    };
  }, [items]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="pt-28 pb-12 bg-gradient-to-b from-background to-background/60">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-center">
            <span aria-hidden="true" className="mr-2 align-middle">🔥</span>
            <span className="bg-gradient-dragon bg-clip-text text-transparent">
              {t("faqHeroText", { defaultValue: "Preguntas Frecuentes" })}
            </span>
          </h1>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            {t(
              "faqIntro",
              { defaultValue: "Resolvemos tus dudas sobre fechas, comunidad y el mundo de DraQu." }
            )}
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
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <aside className="mt-12 max-w-3xl mx-auto">
          <blockquote className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-background/60 to-card/80 p-6 md:p-8 shadow-xl">
            <p className="text-xl md:text-2xl font-bold bg-gradient-dragon bg-clip-text text-transparent">
              {t(
                "faqQuote",
                { defaultValue: "“Un solo desarrollador. Un mundo de dragones. Una misión: despertar los elementos.”" }
              )}
            </p>
          </blockquote>
        </aside>
      </main>
    </>
  );
};

export default FAQ;
