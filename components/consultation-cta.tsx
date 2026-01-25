"use client";

import * as React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AGENCY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ConsultationCtaProps {
  className?: string;
  variant?: "default" | "outline" | "gold";
  size?: "default" | "lg";
}

export function ConsultationCta({
  className,
  variant = "default",
  size = "default",
}: ConsultationCtaProps) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
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

  const generateMessage = () => {
    return `Hello, I'm ${formData.name}. I would like to schedule a consultation to discuss luxury real estate opportunities.${
      formData.message ? `\n\nAdditional details: ${formData.message}` : ""
    }\n\nContact: ${formData.email}${formData.phone ? `, ${formData.phone}` : ""}`;
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent("Consultation Request");
    const body = encodeURIComponent(generateMessage());
    window.open(`mailto:${AGENCY.email}?subject=${subject}&body=${body}`);
    toast.success("Opening your email client...");
    setOpen(false);
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/${AGENCY.whatsapp}?text=${message}`, "_blank");
    toast.success("Opening WhatsApp...");
    setOpen(false);
  };

  const isFormValid = formData.name.trim() && formData.email.trim();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant === "gold" ? "default" : variant}
          size={size}
          className={cn(
            variant === "gold" &&
              "bg-accent text-accent-foreground hover:bg-accent/90",
            className
          )}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book a Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-editorial">
            Share your details and we&apos;ll arrange a private consultation to
            discuss your real estate goals.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 mt-4">
          <div className="grid gap-4 sm:grid-cols-2">
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
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message (optional)
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your real estate interests..."
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              onClick={handleEmailSubmit}
              disabled={!isFormValid}
              className="flex-1"
            >
              Send via Email
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppSubmit}
              disabled={!isFormValid}
              className="flex-1"
            >
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
