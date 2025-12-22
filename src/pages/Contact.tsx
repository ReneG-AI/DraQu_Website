import { useTranslation } from 'react-i18next';
import type { FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { t } = useTranslation();
  const contactEmail = "altf4studio.official@gmail.com";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ").trim();

    const lines: string[] = [];
    if (name) lines.push(`Name: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (message) lines.push("", message);

    const mailSubject = subject || t("contactUs");
    const mailBody = lines.join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    form.reset();
  };

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-8 text-center">
          {t('contactUs')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="heading-gradient">{t('contactGetInTouch')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t('contactDescription')}</p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold heading-gradient">{t('contactGeneral')}</h3>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold heading-gradient">{t('contactSupport')}</h3>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold heading-gradient">{t('contactBusiness')}</h3>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="heading-gradient">{t('contactSendMessage')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">{t('firstName')}</Label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="bg-input border-border text-foreground"
                      aria-label={t('firstName')}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">{t('lastName')}</Label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="bg-input border-border text-foreground"
                      aria-label={t('lastName')}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">{t('email')}</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-input border-border text-foreground"
                    aria-label={t('email')}
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground">{t('contactSubject')}</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="bg-input border-border text-foreground"
                    aria-label={t('contactSubject')}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">{t('contactMessage')}</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-input border-border text-foreground"
                    aria-label={t('contactMessage')}
                  />
                </div>
                
                <Button type="submit" className="w-full" variant="mystic">
                  {t('contactSend')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Contact;
