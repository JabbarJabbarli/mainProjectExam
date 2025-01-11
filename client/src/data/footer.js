import footerIcon from "../assets/headerIcon/Logomark.svg";
import github from "../assets/social/Github.svg";
import instagram from "../assets/social/Instagram.svg";
import youtube from "../assets/social/Youtube.svg";
import amex from "../assets/colored/Amex.svg";
import master from "../assets/colored/Mastercard.svg";
import visa from "../assets/colored/Visa.svg";
export const footerData = [
  {
    title: "Ecommerce",
    icon: footerIcon,
    description:
      "DevCut is a YouTube channel for practical project-based learning",
    socialIcons: [github, instagram, youtube],
  },
];

export const footerLinks = [
  {
    title: "SUPPORT",
    links: ["FAQ", "Terms of use", "Privacy Policy"],
  },
  {
    title: "COMPANY",
    links: ["About us", "Contact", "Careers"],
  },
  {
    title: "SHOP",
    links: ["My Account", "Checkout", "Cart"],
  },
];

export const footerPayment = [
  {
    title: "ACCEPTED PAYMENTS",
    payment: [visa, master, amex],
  },
];
