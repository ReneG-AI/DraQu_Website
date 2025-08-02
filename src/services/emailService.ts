// Email service for registration confirmations
// This is a placeholder service ready for production email integration

interface EmailTemplate {
  subject: string;
  body: string;
}

interface EmailTemplates {
  [key: string]: EmailTemplate;
}

// Multi-language email templates
const emailTemplates: EmailTemplates = {
  en: {
    subject: "Welcome to DraQu – Early Access Confirmation",
    body: `Hello [firstName],

Thank you for signing up for Early Access to DraQu: Awakening of the Elements.
Your email has been received. We'll be in touch soon with more magical news and updates.

The DraQu Team
[Placeholder for future support email]`
  },
  es: {
    subject: "Bienvenido a DraQu – Confirmación de Acceso Anticipado",
    body: `Hola [firstName],

Gracias por registrarte para el Acceso Anticipado de DraQu: El Despertar de los Elementos.
Hemos recibido tu correo electrónico. Muy pronto nos pondremos en contacto contigo con novedades y noticias mágicas.

El equipo de DraQu
[Placeholder for future support email]`
  },
  zh: {
    subject: "欢迎加入 DraQu – 早期体验确认",
    body: `您好，[firstName]，

感谢您注册《DraQu：元素觉醒》的早期体验资格。
我们已经收到您的邮件。很快我们会与您联系，带来更多魔法世界的消息与更新。

DraQu 团队敬上
[Placeholder for future support email]`
  },
  ar: {
    subject: "مرحبًا بك في DraQu – تأكيد الوصول المبكر",
    body: `مرحبًا [firstName]،

شكرًا لتسجيلك في الوصول المبكر للعبة DraQu: Awakening of the Elements.
تم استلام بريدك الإلكتروني. سنتواصل معك قريبًا مع المزيد من الأخبار والتحديثات السحرية.

فريق DraQu
[Placeholder for future support email]`
  },
  hi: {
    subject: "DraQu में आपका स्वागत है – अर्ली एक्सेस पुष्टि",
    body: `नमस्ते [firstName],

DraQu: Awakening of the Elements के अर्ली एक्सेस के लिए पंजीकरण करने के लिए धन्यवाद।
हमने आपका ईमेल प्राप्त कर लिया है। जल्द ही हम आपसे जादुई समाचारों और अपडेट्स के साथ संपर्क करेंगे।

DraQu टीम
[Placeholder for future support email]`
  },
  fr: {
    subject: "Bienvenue sur DraQu – Confirmation d'accès anticipé",
    body: `Bonjour [firstName],

Merci de vous être inscrit à l'accès anticipé de DraQu : Le Réveil des Éléments.
Votre email a bien été reçu. Nous vous contacterons bientôt avec des nouvelles magiques et des mises à jour.

L'équipe DraQu
[Placeholder for future support email]`
  }
};

// Language detection utility
export const detectUserLanguage = (): string => {
  // Try to get language from localStorage first
  const savedLanguage = localStorage.getItem('i18nextLng');
  if (savedLanguage && emailTemplates[savedLanguage]) {
    return savedLanguage;
  }

  // Fallback to browser language
  const browserLanguage = navigator.language.split('-')[0];
  if (emailTemplates[browserLanguage]) {
    return browserLanguage;
  }

  // Final fallback to English
  return 'en';
};

// Email sending function (placeholder for production)
export const sendRegistrationEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  language?: string
): Promise<boolean> => {
  try {
    const userLanguage = language || detectUserLanguage();
    const template = emailTemplates[userLanguage];
    
    const emailBody = template.body.replace('[firstName]', firstName);
    
    // In production, this would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    
    console.log('📧 Registration Email Details:', {
      to: email,
      subject: template.subject,
      body: emailBody,
      language: userLanguage,
      firstName,
      lastName
    });

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Failed to send registration email:', error);
    return false;
  }
};

// Internal notification (for team)
export const sendInternalNotification = async (
  firstName: string,
  lastName: string,
  email: string
): Promise<boolean> => {
  try {
    // This would send to internal team email
    console.log('📬 Internal Notification:', {
      message: `New DraQu registration: ${firstName} ${lastName} (${email})`,
      timestamp: new Date().toISOString()
    });
    
    return true;
  } catch (error) {
    console.error('Failed to send internal notification:', error);
    return false;
  }
};