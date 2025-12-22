import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import drakeError from "@/assets/drake_error_sin_fondo.png";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,196,48,0.18),rgba(0,0,0,0))] blur-3xl" />
      <div className="absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(70,120,200,0.15),rgba(0,0,0,0))] blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative">
            <span className="pointer-events-none absolute inset-x-0 -top-10 select-none text-[8rem] font-black tracking-[0.2em] text-white/5 md:text-[12rem]">
              404
            </span>
            <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Error</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold heading-gradient">Error 404</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              {t('notFoundDescription')}
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-black/35 px-6 py-8 backdrop-blur-md shadow-epic md:py-10">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(244,196,48,0.2),rgba(0,0,0,0))] blur-2xl" />
              <img
                src={drakeError}
                alt="DraQu dragon"
                className="w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              />
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="mystic" asChild>
                <Link to="/">{t('backToHome')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
