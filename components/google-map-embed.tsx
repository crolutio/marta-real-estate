"use client";

/**
 * Embeds a Google Map by search query (no API key required).
 * Use for About Dubai and property Location tab.
 */
interface GoogleMapEmbedProps {
  /** Search query for the map (e.g. "Dubai, UAE" or full address) */
  query: string;
  /** Optional title for accessibility */
  title?: string;
  className?: string;
}

export function GoogleMapEmbed({
  query,
  title = "Map",
  className = "",
}: GoogleMapEmbedProps) {
  const encoded = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?output=embed&q=${encoded}`;

  return (
    <div className={`aspect-[16/9] rounded-lg overflow-hidden border border-border ${className}`}>
      <iframe
        title={title}
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full min-h-[280px]"
      />
    </div>
  );
}
