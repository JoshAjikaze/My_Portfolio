// Site configuration
// Joshua Ajwojuolorun - Fullstack Web & Mobile App Developer Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Joshua Ajwojuolorun | Fullstack Developer",
  description: "Fullstack Web Developer & Mobile App Developer with 5+ years of experience building scalable, user-centric digital solutions based in Lagos, Nigeria.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Joshua.",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Let's Talk",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Joshua Ajwojuolorun",
  roles: ["Fullstack Developer", "Mobile App Dev", "UI/UX Enthusiast", "Problem Solver"],
  backgroundImage: "/images/hero-bg.png",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm Joshua Ajwojuolorun, a passionate Fullstack Web Developer and Mobile App Developer based in Lagos, Nigeria. With over 5 years of experience, I specialize in building scalable digital solutions using Django, FastAPI, React, Next.js, and React Native. I deploy and manage applications on AWS and Azure, ensuring high availability and performance. I thrive on turning complex ideas into elegant, functional applications that solve real-world problems and deliver exceptional results for clients worldwide.",
  experienceValue: "5+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Joshua working on code" },
    { src: "/images/about-2.jpg", alt: "Development workspace" },
    { src: "/images/about-3.jpg", alt: "Mobile app development" },
    { src: "/images/about-4.jpg", alt: "Team collaboration" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Can Do For You",
  services: [
    {
      iconName: "Code",
      title: "Fullstack Web Development",
      description: "End-to-end web development using React, Next.js for frontend and Django, FastAPI for backend. I build scalable, high-performance web applications with clean architecture and modern best practices.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Smartphone",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native. I create smooth, intuitive apps for iOS and Android with native-like performance and beautiful user interfaces.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Palette",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. I create wireframes, prototypes, and polished interfaces that enhance user experience and drive engagement.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Cloud",
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup and deployment on AWS and Azure. I implement CI/CD pipelines, containerization with Docker, and ensure your applications run smoothly at scale with high availability.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
  url?:string;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Featured Projects",
  description: "A selection of my recent work showcasing fullstack web applications built with Django, FastAPI, React, and Next.js, mobile apps with React Native, and cloud deployments on AWS and Azure.",
  projects: [
    {
      title: "Vibe Garage (Music Streaming Platform)",
      category: "FastAPI + React JS + AWS",
      year: "2026",
      image: "/images/portfolio-1.png",
      featured: true,
      url:"https://vibegarage.app"
    },
    {
      title: "Stockinch Inventory (Mobile App)",
      category: "React Native + FastAPI",
      year: "2024",
      image: "/images/portfolio-2.png",
      url:"https://stockinch.netlify.app"
    },
    {
      title: "Deeplearn (Cybersecurity Training)",
      category: "React JS + DotNet + Azure",
      year: "2026",
      image: "/images/portfolio-3.png",
    },
    {
      title: "Real Estate Portal",
      category: "FastAPI + React JS + AWS",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "PlatFormX (SaaS Inventory Platform)",
      category: "Django + React Js + Azure",
      year: "2025",
      image: "/images/portfolio-5.jpg",
      url:"https://platform-xx.netlify.app"
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Build Something Amazing Together",
    linkText: "Start a Project",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Joshua delivered beyond our expectations. His technical skills combined with his understanding of user experience resulted in a product that our customers love. Highly recommended!",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "TechStart Africa",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Joshua was a game-changer for our business. He built our mobile app from scratch and it has significantly improved our customer engagement and retention.",
      author: "Michael Adeyemi",
      role: "Founder",
      company: "PaySwift Nigeria",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Exceptional developer with great communication skills. Joshua understood our requirements perfectly and delivered a robust solution on time and within budget.",
      author: "Jennifer Okonkwo",
      role: "Product Manager",
      company: "HealthPlus Digital",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Django & FastAPI", "React & Next.js", "React Native", "AWS & Azure"],
  heading: "Ready to Bring Your Ideas to Life?",
  description: "I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help you build scalable applications with Django, FastAPI, React, and cloud infrastructure.",
  buttonText: "Get In Touch",
  buttonHref: "mailto:joshua.ajwojuolorun@gmail.com",
  email: "joshua.ajwojuolorun@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Joshua.",
  description: "Fullstack Developer specializing in Django, FastAPI, React, Next.js, React Native, AWS, and Azure. Based in Lagos, Nigeria, building scalable solutions for clients worldwide.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Cloud & DevOps", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Dribbble", href: "https://dribbble.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com", label: "GitHub" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Dribbble", href: "https://dribbble.com", label: "Dribbble" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get the latest updates on my projects and tech insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Joshua Ajwojuolorun. All rights reserved.",
  credit: "Crafted with passion in Lagos, Nigeria",
};
