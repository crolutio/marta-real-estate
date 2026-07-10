"use client";

import * as React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AGENCY } from "@/lib/constants";
import { toast } from "sonner";
import { useTranslation } from "@/components/language-provider";

export default function ContactPage() {
  const { dict } = useTranslation();
  const c = dict.contactPage;
  const [formData, setFormData] = React.useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Email body: From and message only (Subject goes in email subject line)
  const generateEmailBody = () => {
    return `From: ${formData.name}\n\n${formData.message}`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || c.form.defaultSubject
    );
    const body = encodeURIComponent(generateEmailBody());
    window.open(`mailto:${AGENCY.email}?subject=${subject}&body=${body}`);
    toast.success(c.form.openingEmail);
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      formData.subject
        ? `Subject: ${formData.subject}\n\n${generateEmailBody()}`
        : generateEmailBody()
    );
    window.open(`https://wa.me/${AGENCY.whatsapp}?text=${message}`, "_blank");
    toast.success(c.form.openingWhatsApp);
  };

  const isFormValid = formData.name.trim() && formData.message.trim();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              {c.hero.title}
            </h1>
            <p className="text-muted-foreground/90 text-xl md:text-2xl font-medium leading-snug mb-4">
              {c.hero.body1}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground text-editorial font-medium leading-snug">
              {c.hero.body2}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        data-animate="reveal"
        className="animate-reveal pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1.3fr] gap-10 items-stretch">
            {/* Contact Form */}
            <div className="lg:order-2">
              <Card className="h-full">
                <CardContent className="p-8 h-full">
                  <h2 className="font-subtitle text-2xl font-semibold mb-6">
                    {c.form.heading}
                  </h2>
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {c.form.name} <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={c.form.namePlaceholder}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        {c.form.subject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={c.form.subjectPlaceholder}
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {c.form.message} <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={c.form.messagePlaceholder}
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={!isFormValid}
                        className="flex-1 min-h-12 sm:min-h-0 py-4 sm:py-2 text-base"
                      >
                        <Send className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                        {c.form.sendEmail}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        disabled={!isFormValid}
                        onClick={handleWhatsAppSubmit}
                        className="flex-1 min-h-12 sm:min-h-0 py-4 sm:py-2 text-base"
                      >
                        <MessageCircle className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
                        {c.form.sendWhatsApp}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="lg:order-1 h-full">
              <Card className="h-full">
                <CardContent className="p-10 h-full space-y-10">
                  <h3 className="font-subtitle text-2xl font-semibold">{c.details.heading}</h3>

                  <div className="grid sm:grid-cols-2 gap-12">
                    <div className="space-y-10">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{c.details.phone}</p>
                          <a href={`tel:${AGENCY.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                            {AGENCY.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Mail className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{c.details.email}</p>
                          <a href={`mailto:${AGENCY.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                            {AGENCY.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <MessageCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold">{c.details.whatsapp}</p>
                          <Button asChild variant="outline" size="sm">
                            <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                              {c.details.whatsappCta}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{c.details.office}</p>
                          <p className="text-muted-foreground">
                            {AGENCY.address.line1}
                            <br />
                            {AGENCY.address.city}
                            {AGENCY.address.state ? `, ${AGENCY.address.state}` : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{c.details.hours}</p>
                          <p className="text-muted-foreground">{AGENCY.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
