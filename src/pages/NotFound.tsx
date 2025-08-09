import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

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
    <main className="min-h-[60vh] pt-28 container mx-auto px-6 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-dragon bg-clip-text text-transparent">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t('notFoundDescription', { defaultValue: '¡Ups! Página no encontrada.' })}</p>
        <div className="mt-6">
          <Button variant="mystic" asChild>
            <Link to="/">{t('backToHome', { defaultValue: 'Volver al inicio' })}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
