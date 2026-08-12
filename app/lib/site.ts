// Single source of truth for all business content and data.
// Edit here and every section updates.
// Exception: menu items live in Sanity so the shop edits them without code.

export type Location = {
  name: string;
  address: string;
  phone: string;
  hours: string[];
  ordering: {
    doordash?: string;
    grubhub?: string;
  };
};

export const site = {
  name: "Singh's Roti Shop",
  tagline: "West Indian Food · Trinidad and Tobago",

  hero: {
    eyebrow: "West Indian Food, Trinidad and Tobago",
    heading: "A taste of Trinidad, right here in Boston",
    sub: "The Singh family has been frying doubles and rolling roti for three decades. Come hungry.",
  },

  story: {
    eyebrow: "Our story",
    heading: "Over Twenty years of Trinidad, made by hand",
    image: "/images/story.jpg",
    paragraphs: [
      "Singh's Roti Shop was started by Ricky and Kay Boodoosingh, who came to Boston from Trinidad and Tobago and wanted to bring a taste of home to their community. They opened their first doors about twenty five years ago on Columbia Road in Dorchester.",
      "It is still a family shop. Ricky and Kay run it alongside their children, Dillian and Brianna, now from a larger spot just up the road in Dorchester and a second location steps from Revere Beach. Everything is handmade to order, the way it always has been.",
    ],
    award:
      "A two-time Best of Boston winner, named Best Caribbean Restaurant and, a decade later, Dorchester's Best Neighborhood Restaurant by Boston Magazine.",
  },

  links: {
    facebook: "https://www.facebook.com/singhs.roti",
  },

  // Catering orders run through Dorchester's Grubhub catering page.
  catering:
    "https://www.grubhub.com/restaurant/singhs-roti-shop-554-columbia-rd-dorchester/6247680/catering",

  // TODO: confirm hours with the shop, and add the Revere Beach phone.
  locations: [
    {
      name: "Dorchester",
      address: "554 Columbia Rd, Dorchester, MA 02125",
      phone: "(617) 282-7977",
      hours: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 9:00 AM - 7:00 PM"],
      ordering: {
        doordash: "https://www.doordash.com/store/singhs-roti-shop-boston-57982/",
        grubhub:
          "https://www.grubhub.com/restaurant/singhs-roti-shop-554-columbia-rd-dorchester/6247680",
      },
    },
    {
      name: "Revere Beach",
      address: "76 Revere Beach Blvd, Revere, MA 02151",
      phone: "(781) 629-3049", // TODO: add the Revere Beach phone number
      hours: ["Mon - Sat: 11:00 AM - 8:00 PM", "Sun: 11:00 AM - 7:00 PM"],
      ordering: {
        doordash:
          "https://www.doordash.com/en/store/singh%27s-roti-shop-2-(revere-beach-blvd)-revere-31991861/",
      },
    },
  ] satisfies Location[],
};