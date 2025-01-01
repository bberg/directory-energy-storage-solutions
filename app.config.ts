import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Find Energy Storage",
    logo: "/logo.png",
    // iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Directory of Energy Storage Solutions",
    description: "Energy Storage Solutions for Home and Businesses",
    url: "https://FindEnergyStorage.com",
    favicon: {
      image: "",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Search {0} Energy Storage Providers",
      icon: "tabler:battery",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Entry not found.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: false,
        first: false,
        title: "Submit a company",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: false,
      showOnSide: false,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
{"name": "Enterprise Systems", "color": "gray"},
  {"name": "Commercial Systems", "color": "gray"},
  {"name": "Product Manufacturer", "color": "gray"},
  {"name": "Renewable Producer Solutions", "color": "gray"},
  {"name": "Integrated Utility", "color": "gray"},
  {"name": "Plug and Play", "color": "gray"},
  {"name": "Configurable", "color": "gray"},
  {"name": "Microgrid", "color": "gray"},
  {"name": "System Developer", "color": "gray"},
  {"name": "Design Build", "color": "gray"},
  {"name": "Battery Inverters", "color": "gray"},
  {"name": "Residential Systems", "color": "gray"},
  {"name": "Data Center UPS", "color": "gray"},
  {"name": "Power Management Software", "color": "gray"},
  {"name": "Rental", "color": "gray"},
  {"name": "Gravity Storage", "color": "gray"},
  {"name": "Hydrogen Storage", "color": "gray"},
  {"name": "Customizable", "color": "gray"}
],
    tagPages: {
      title: "Available {0} items:",
      description:
        "View all items in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Add your listing",
      link: "https://Directory.com",
      brandText: "Directory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        // { name: "Info", to: "/blog" },
        // { name: "Advertise", to: "/advertise" },
        // {
        //   name: "Analytics",
        //   to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
        //   target: "_blank",
        // },
      ],
    },
    actionButton: {
      text: "Add a Listing",
      href:  "/submit",
    },
  },
  footer: {
    description: "Directory for exploring energy storage solutions for homes and businesses",
    // socials: {
    //   github: {
    //     link: "",
    //     icon: "tabler:brand-github",
    //   },
    //   facebook: {
    //     link: "",
    //     icon: "tabler:brand-facebook",
    //   },
    //   instagram: {
    //     link: "",
    //     icon: "tabler:brand-instagram",
    //   },
    //   x: {
    //     link: "https://x.com/mark_bruderer",
    //     icon: "tabler:brand-twitter",
    //   },
    //   youtube: {
    //     link: "https://www.youtube.com/@mark_hacks",
    //     icon: "tabler:brand-youtube",
    //   },
    // },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
