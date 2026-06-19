import { Send } from "lucide-react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { submitContactForm } from "@/lib/contact-form";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const honeypot = formData.get("website");
    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await submitContactForm({ name, email, message });

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast({
        title: "Error",
        description: import.meta.env.DEV
          ? "Message could not be sent locally. Deploy the site or configure EmailJS environment variables."
          : "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let's discuss your project">
      <div className="container mx-auto max-w-2xl" ref={ref}>
        <motion.div
          className="rounded-2xl p-8 bg-card border border-border"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="website"
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Contact form"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Don't fill this out if you're human</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  aria-label="Your name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  aria-label="Your email address"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={6}
                required
                aria-required="true"
                aria-label="Your message"
                disabled={isSubmitting}
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-violet hover:bg-violet-dark text-white"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
