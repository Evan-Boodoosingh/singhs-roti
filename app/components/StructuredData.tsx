import { site } from "../lib/site";

// Emits one LocalBusiness (Restaurant) record per shop so Google can show
// each location with its address, phone, and map. Invisible on the page.
export default function StructuredData() {
  const data = site.locations.map((loc) => {
    const [street, city, stateZip] = loc.address.split(",").map((s) => s.trim());
    const [region, postalCode] = (stateZip ?? "").split(" ").filter(Boolean);

    return {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: `${site.name}${loc.name === "Revere Beach" ? " 2" : ""}`,
      servesCuisine: ["Trinidadian", "Caribbean", "West Indian"],
      image: "/images/hero.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: street,
        addressLocality: city,
        addressRegion: region,
        postalCode,
        addressCountry: "US",
      },
      ...(loc.phone ? { telephone: loc.phone } : {}),
    };
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}