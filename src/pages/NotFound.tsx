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
    <main className="min-h-[70vh] pt-28 container mx-auto px-6 flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-[0.35em] text-ancient-gold">
          Error 404
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{t('notFoundDescription')}</p>
        <div className="mt-8 flex justify-center">
          <img
            src={drakeError}
            alt="DraQu dragon"
            className="w-full max-w-xs md:max-w-sm mx-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          />
        </div>
        <div className="mt-8">
          <Button variant="mystic" asChild>
            <Link to="/">{t('backToHome')}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
