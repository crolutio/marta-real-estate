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

export default function ContactPage() {
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
      formData.subject || "Inquiry from Website"
    );
    const body = encodeURIComponent(generateEmailBody());
    window.open(`mailto:${AGENCY.email}?subject=${subject}&body=${body}`);
    toast.success("Opening your email client...");
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      formData.subject
        ? `Subject: ${formData.subject}\n\n${generateEmailBody()}`
        : generateEmailBody()
    );
    window.open(`https://wa.me/${AGENCY.whatsapp}?text=${message}`, "_blank");
    toast.success("Opening WhatsApp...");
  };

  const isFormValid = formData.name.trim() && formData.message.trim();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-muted-foreground/90 text-xl md:text-2xl font-medium leading-snug mb-4">
              Whether you&apos;re looking to buy, sell, or invest in luxury real
              estate, we&apos;re here to provide personalized guidance and expert
              insight. Reach out to begin your journey.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground text-editorial font-medium leading-snug">
              You&apos;re in expert hands. We&apos;ll take care of every detail to ensure a smooth, successful experience.
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
          <div className="grid lg:grid-cols-[1.2fr_1.3fr] gap-6 items-start">
            {/* Contact Form */}
            <div className="lg:order-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-semibold mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
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
                        className="flex-1"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send via Email
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        disabled={!isFormValid}
                        onClick={handleWhatsAppSubmit}
                        className="flex-1"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Send via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 lg:order-1">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-serif text-2xl font-semibold">Contact Details</h3>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
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
                          <p className="font-semibold mb-1">Email</p>
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
                          <p className="font-semibold">WhatsApp</p>
                          <Button asChild variant="outline" size="sm">
                            <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                              Message on WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Office</p>
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
                          <p className="font-semibold mb-1">Hours</p>
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
