"use client";

import * as React from "react";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { AGENCY } from "@/lib/constants";
import { Property } from "@/lib/types";
import { formatPrice } from "@/lib/data/properties";
import { toast } from "sonner";

interface PropertyContactCardProps {
  property: Property;
}

export function PropertyContactCard({ property }: PropertyContactCardProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${property.title} (${formatPrice(property.price, property.currency)}).`,
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
    return `Hello, I'm ${formData.name}.\n\nI'm interested in:\n${property.title}\nLocation: ${property.location}\nPrice: ${formatPrice(property.price, property.currency)}\n\n${formData.message}\n\nContact: ${formData.email}${formData.phone ? `, ${formData.phone}` : ""}`;
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Inquiry: ${property.title}`);
    const body = encodeURIComponent(generateMessage());
    window.open(`mailto:${AGENCY.email}?subject=${subject}&body=${body}`);
    toast.success("Opening your email client...");
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/${AGENCY.whatsapp}?text=${message}`, "_blank");
    toast.success("Opening WhatsApp...");
  };

  const isFormValid = formData.name.trim() && formData.email.trim();

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {property.priceLabel ?? "Listed Price"}
          </p>
          <CardTitle className="font-serif text-3xl">
            {formatPrice(property.price, property.currency)}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              window.open(`tel:${AGENCY.phone}`);
            }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              const message = encodeURIComponent(
                `Hi, I'm interested in ${property.title} (${formatPrice(property.price, property.currency)}).`
              );
              window.open(
                `https://wa.me/${AGENCY.whatsapp}?text=${message}`,
                "_blank"
              );
            }}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        <Separator />

        {/* Contact Form */}
        <div className="space-y-4">
          <h3 className="font-semibold">Request Details</h3>
          <div className="space-y-3">
            <Input
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={handleEmailSubmit}
              disabled={!isFormValid}
            >
              <Mail className="h-4 w-4 mr-2" />
              Send via Email
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleWhatsAppSubmit}
              disabled={!isFormValid}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Send via WhatsApp
            </Button>
          </div>
        </div>

        <Separator />

        {/* Schedule Button */}
        <Button variant="secondary" className="w-full">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule a Viewing
        </Button>
      </CardContent>
    </Card>
  );
}
