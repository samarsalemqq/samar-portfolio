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
    { label: "Home", href: "/#home", icon: Home },
    { label: "Projects", href: "/#projects", icon: FolderKanban },
    { label: "Experience", href: "/#experience", icon: Briefcase },
    { label: "About", href: "/#about", icon: User },
    { label: "Skills", href: "/#skills", icon: Sparkles },
    { label: "Contact", href: "/#contact", icon: Mail },
  ],
};