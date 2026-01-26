import { Send } from "lucide-react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaValue) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const now = new Date().toLocaleString();
    formData.append("time", now); // Send {{time}} to template

    setIsSubmitting(true);

    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID,
                         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                         {
                           name: formData.get("name"),
                           email: formData.get("email"),
                           message: formData.get("message"),
                           time: formData.get("time"),
                         },
                         import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setRecaptchaValue(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let's discuss your project">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl p-8 bg-card border border-border">
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Kontaktformular">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Ihr Name" 
                  required 
                  aria-required="true"
                  aria-label="Ihr Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  E-Mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ihre@email.com"
                  required
                  aria-required="true"
                  aria-label="Ihre E-Mail-Adresse"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Nachricht
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Ihre Nachricht"
                rows={6}
                required
                aria-required="true"
                aria-label="Ihre Nachricht"
              />
            </div>
            <div className="flex justify-center" aria-label="reCAPTCHA Verifizierung">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(value) => setRecaptchaValue(value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-violet hover:bg-violet-dark text-white"
              disabled={isSubmitting || !recaptchaValue}
              aria-label={isSubmitting ? "Nachricht wird gesendet" : "Nachricht absenden"}
            >
              <Send className="w-4 h-4 mr-2" aria-hidden="true" />
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
