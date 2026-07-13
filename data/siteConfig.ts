// Central place for personal info, links and the CV file.
// Update the values below to make the site your own.

import { Home, FolderKanban, User, Sparkles, Mail } from "lucide-react";

export const siteConfig = {
  name: "Samar Alqahtani",
  initials: "SA",
  title: "Software Engineer",
  location: "Saudi Arabia",

  // TODO: replace with your real email address
  email: "your.email@example.com",

  // TODO: replace with your real profile links
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",

  // TODO: add your CV file to public/cv/ and update the filename below if needed
  cvPath: "/cv/Samar-Alqahtani-CV.pdf",

  // `icon` is used in the mobile menu, where a small icon next to each label
  // makes the list easier to scan. The desktop nav stays text-only on purpose
  // (icons on every link tend to look busy on a wide bar).
  nav: [
    { label: "Home", href: "/#home", icon: Home },
    { label: "Work", href: "/#projects", icon: FolderKanban },
    { label: "About", href: "/#about", icon: User },
    { label: "Skills", href: "/#skills", icon: Sparkles },
    { label: "Contact", href: "/#contact", icon: Mail },
  ],
};
