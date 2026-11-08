// Central place for personal info, links and the CV file.
// Update the values below to make the site your own.

import { Home, FolderKanban, User, Sparkles, Mail, Briefcase } from "lucide-react";

export const siteConfig = {
  name: "Samar Alqahtani",
  initials: "SA",
  title: "Software Engineer",
  location: "Saudi Arabia",

  email: "Samarsalemqq@gmail.com",

  github: "https://github.com/samarsalemqq",
  linkedin: "https://www.linkedin.com/in/samar-alqahtani-8814241a7",

  cvPath: "/cv/Samar Salem Alqahtani-CV.pdf",

   nav: [
    { href: "/#home", icon: Home },
    { href: "/#projects", icon: FolderKanban },
    { href: "/#experience", icon: Briefcase },
    { href: "/#about", icon: User },
    { href: "/#skills", icon: Sparkles },
    { href: "/#contact", icon: Mail },
  ],
};