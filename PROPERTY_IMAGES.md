# Finding Property Images for Dubai Listings

This guide helps you find and add real images for the 16 properties in the Marta Real Estate site.

## Current Setup

- Images are stored in `lib/data/properties.ts` in the `propertyImages` object
- Each property references 4–5 images from this pool
- All images must be from **Unsplash** (free, high-quality) or you can swap to another CDN

## Where to Find Images

### 1. Unsplash (Free, Recommended)

- **Dubai general**: https://unsplash.com/s/photos/dubai
- **Dubai Marina**: https://unsplash.com/s/photos/dubai-marina
- **Palm Jumeirah**: https://unsplash.com/s/photos/palm-jumeirah
- **Luxury apartments**: https://unsplash.com/s/photos/luxury-apartment
- **Luxury villas**: https://unsplash.com/s/photos/luxury-villa
- **Dubai interiors**: https://unsplash.com/s/photos/dubai-interior

### 2. Adding a New Image

1. Find an image on Unsplash
2. Right-click → "Copy image address" or use the "Download" button
3. Use this format: `https://images.unsplash.com/photo-{id}?w=1200&h=800&fit=crop`
4. Add it to `propertyImages` in `lib/data/properties.ts`
5. Assign it to the relevant property in the `images` array

### 3. Property-Specific Searches

| Property | Search Terms |
|----------|--------------|
| Bulgari Residences | "Bulgari Dubai", "Jumeirah Bay Island" |
| Marsa Al Arab | "Dubai marina", "seven star hotel" |
| Royal Atlantis | "Atlantis Palm Dubai", "Palm Jumeirah" |
| Four Seasons Jumeirah | "Four Seasons Dubai", "beach resort" |
| Palm Jumeirah Villas | "Palm Jumeirah villa", "waterfront villa Dubai" |
| Emirates Hills | "golf course Dubai", "Emirates Hills" |
| Baccarat Residences | "luxury apartment interior", "Business Bay" |

### 4. Licensing Notes

- **Unsplash**: Free for commercial use, no attribution required
- **Pexels/Pixabay**: Also free; add to `next.config.ts` `remotePatterns` if used
- **Developer/agency photos**: Use only if you have rights; store in `/public` folder
