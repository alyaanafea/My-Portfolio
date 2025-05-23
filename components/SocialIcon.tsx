import React from "react";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  delay?: string;
}

const SocialIcon = ({ href, icon, delay = "0" }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {icon}
    </Link>
  );
};

export default SocialIcon;
