import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import drakeError from "@/assets/drake_error_sin_fondo.png";
import logoDraqu from "@/assets/Logo DraQu_Sin fondo.png";

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

const Roadmap = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = `${t("roadmapPageTitle")} | DraQu`;
    document.title = title;
    setMetaTag("description", t("roadmapPageDescription"));
    setCanonical(`${window.location.origin}/roadmap`);
  }, [t]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,196,48,0.18),rgba(0,0,0,0))] blur-3xl" />
        <img
          src={drakeError}
          alt=""
          aria-hidden="true"
          className="absolute right-[-8%] top-20 w-[520px] max-w-none opacity-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        />
        <img
          src={drakeError}
          alt=""
          aria-hidden="true"
          className="absolute left-[-12%] bottom-[-10%] w-[420px] max-w-none opacity-10 rotate-[-8deg]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 sm:pt-16 md:pt-12 pb-20">
        <header className="text-center -translate-y-12 sm:-translate-y-16 md:-translate-y-24 lg:-translate-y-28">
          <div className="flex justify-center">
            <img
              src={logoDraqu}
              alt="DraQu"
              className="h-[clamp(14rem,34vw,34rem)] md:h-[clamp(20rem,42vw,46rem)] w-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
          <h1 className="-mt-24 sm:-mt-28 md:-mt-36 lg:-mt-44 text-4xl md:text-6xl font-extrabold heading-gradient relative z-10">
            {t("roadmapPageTitle")}
          </h1>
          <p className="mt-1 md:mt-2 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("roadmapPageDescription")}
          </p>
        </header>

        <section className="mt-6 md:mt-8">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/35 px-6 py-10 backdrop-blur-md shadow-epic md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(244,196,48,0.18),rgba(0,0,0,0))]" />
            <div className="absolute -right-10 -bottom-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,120,200,0.18),rgba(0,0,0,0))] blur-2xl" />
            <div className="relative text-center">
              <h2 className="text-2xl md:text-3xl font-semibold heading-gradient">
                {t("roadmapWipTitle")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("roadmapWipDescription")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Roadmap;
