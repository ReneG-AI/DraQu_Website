import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, 'required'),
  lastName: z.string().min(1, 'required'),
  email: z.string().email('invalidEmail'),
  consent: z.boolean().refine((value) => value === true, {
    message: 'consentRequired',
  }),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate email sending - in production, use proper email service
      const emailData = {
        to: 'renegarciaeduca@gmail.com',
        subject: 'New DraQu Early Access Registration',
        body: `
          New early access registration:
          
          Name: ${data.firstName} ${data.lastName}
          Email: ${data.email}
          Consent: ${data.consent ? 'Yes' : 'No'}
          Registration Date: ${new Date().toISOString()}
        `,
      };

      // In production, replace with actual email service call
      console.log('Email would be sent:', emailData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-md border border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-dragon bg-clip-text text-transparent text-center">
            {t('registrationTitle')}
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center space-y-4 py-8">
            <CheckCircle className="w-16 h-16 text-primary" />
            <p className="text-center text-lg text-foreground">
              {t('successMessage')}
            </p>
            <Button onClick={handleClose} variant="mystic" className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('firstName')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background/50 border-border/50"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.firstName?.message && 
                         t(form.formState.errors.firstName.message)}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('lastName')}</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background/50 border-border/50"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.lastName?.message && 
                         t(form.formState.errors.lastName.message)}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('email')}</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="bg-background/50 border-border/50"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message && 
                       t(form.formState.errors.email.message)}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-muted-foreground cursor-pointer">
                        {t('consent')}
                      </FormLabel>
                      <FormMessage>
                        {form.formState.errors.consent?.message && 
                         t(form.formState.errors.consent.message)}
                      </FormMessage>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                variant="mystic" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  t('submit')
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;