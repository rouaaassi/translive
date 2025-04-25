export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
   
    {
      label: "About",
      href: "/About",
    },
    {
      label: "Customers",
      href: "/customers",
    },
    {
      label: "Pricing",
      href: "/Pricing",
    },
    {
      label: "Streams",
      href: "/streams",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
   
    {
      label: "About",
      href: "/About",
    },
    {
      label: "customers",
      href: "/customers",
    },
    {
      label: "Pricing",
      href: "/Pricing",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Streams",
      href: "/streams",
    },
  ],
  customers: {
    label: "customers",
    href: "/customers",
  },
  streams: {
    label: "Streams",
    href: "/streams",
  },
};
