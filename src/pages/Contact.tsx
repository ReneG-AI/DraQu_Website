import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for contact form submission
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {t('contactUs')}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contactGetInTouch')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{t('contactDescription')}</p>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contactGeneral')}</h3>
                    <p className="text-muted-foreground">[Contact To Be Added]</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contactSupport')}</h3>
                    <p className="text-muted-foreground">[Support Contact To Be Added]</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contactBusiness')}</h3>
                    <p className="text-muted-foreground">[Business Contact To Be Added]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contactSendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">{t('firstName')}</Label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        required 
                        className="bg-input border-border text-foreground"
                        aria-label={t('firstName')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">{t('lastName')}</Label>
                      <Input 
                        id="lastName" 
                        type="text" 
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
                      type="email" 
                      required 
                      className="bg-input border-border text-foreground"
                      aria-label={t('email')}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-foreground">{t('contactSubject')}</Label>
                    <Input 
                      id="subject" 
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
                      required 
                      rows={5}
                      className="bg-input border-border text-foreground"
                      aria-label={t('contactMessage')}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" variant="default">
                    {t('contactSend')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;