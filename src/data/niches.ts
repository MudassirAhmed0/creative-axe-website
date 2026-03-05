export interface NicheConfig {
  title: string;
  headline: string;
  subheadline: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  services: Array<{ name: string; description: string; icon: string }>;
  stats: Array<{ value: number; suffix?: string; prefix?: string; label: string }>;
  ctaHeadline: string;
  metaDescription: string;
}

export const NICHE_DATA: Record<string, NicheConfig> = {
  plumbers: {
    title: "Websites for Plumbers",
    headline: "Websites That Turn Leaks Into Leads",
    subheadline: "Most plumbing websites look like they were built in 2005. Your customers are searching on their phones at 2 AM with a burst pipe — if your site doesn't load fast and convert instantly, you're losing jobs.",
    body: "We build premium, mobile-first plumbing websites with click-to-call, emergency CTAs, and local SEO baked in. Your site becomes your best-performing technician.",
    imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Professional plumber at work",
    services: [
      { name: "Emergency-First Design", description: "Click-to-call buttons, emergency banners, and after-hours forms that capture jobs while you sleep.", icon: "🚨" },
      { name: "Local SEO Domination", description: "Google Maps pack optimization, city pages, and review management to own your service area.", icon: "📍" },
      { name: "Service Pages That Convert", description: "Dedicated pages for every service — drain cleaning, water heaters, repiping — each optimized to rank and convert.", icon: "🔧" },
      { name: "Google Ads Management", description: "High-intent campaigns targeting 'plumber near me' and emergency keywords with landing pages built to convert.", icon: "📈" },
    ],
    stats: [
      { value: 62, suffix: "%", label: "Lower Cost Per Lead" },
      { value: 3, suffix: "x", label: "More Service Calls" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 48, suffix: "hr", label: "Hour Turnaround" },
    ],
    ctaHeadline: "Get Your Free Plumbing Website Audit",
    metaDescription: "Premium websites for plumbing companies. Mobile-first, SEO-optimized, built to convert emergency callers into booked jobs. Free audit available.",
  },
  dentists: {
    title: "Websites for Dentists",
    headline: "Websites That Fill Your Chair",
    subheadline: "Patients choose their dentist online before they ever call. If your website looks dated or loads slowly, they're booking with the practice down the street.",
    body: "We build premium dental websites with online booking, patient education content, and SEO that dominates the local pack. Your site becomes your best front desk.",
    imageSrc: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    imageAlt: "Modern dental office",
    services: [
      { name: "Patient-First Design", description: "Clean, trustworthy design with online booking, new patient forms, and insurance info — everything patients need before they call.", icon: "🦷" },
      { name: "Local SEO & Reviews", description: "Google Maps domination, review generation systems, and location pages for multi-practice groups.", icon: "⭐" },
      { name: "Service Pages", description: "Dedicated pages for cosmetic, implants, emergency, pediatric — each designed to educate and convert.", icon: "📋" },
      { name: "Patient Acquisition Ads", description: "Google and Meta ad campaigns targeting high-value procedures like implants, veneers, and Invisalign.", icon: "📈" },
    ],
    stats: [
      { value: 180, suffix: "%", label: "More New Patients" },
      { value: 40, suffix: "%", label: "Conversion Rate Lift" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 220, suffix: "%", label: "Organic Traffic Growth" },
    ],
    ctaHeadline: "Get Your Free Dental Website Audit",
    metaDescription: "Premium websites for dental practices. Online booking, patient education, local SEO — built to fill your chairs. Free audit available.",
  },
  restaurants: {
    title: "Websites for Restaurants",
    headline: "Websites That Fill Your Tables",
    subheadline: "Your food is incredible but your website is a Yelp redirect. Customers want to see your menu, book a table, and order online — all in under 3 seconds.",
    body: "We build stunning restaurant websites with online ordering, reservation systems, and menus that make people hungry. Your site becomes your best host.",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    imageAlt: "Modern restaurant interior",
    services: [
      { name: "Menu & Ordering", description: "Beautiful digital menus with online ordering integration. No more PDF menus that nobody can read on mobile.", icon: "🍽️" },
      { name: "Reservation System", description: "Built-in reservation widgets, waitlist management, and event booking — no more missed tables.", icon: "📅" },
      { name: "Local SEO", description: "Dominate 'restaurants near me' searches with optimized Google Business profiles and location pages.", icon: "📍" },
      { name: "Social Integration", description: "Instagram feed integration, event promotions, and review showcases that drive weekend traffic.", icon: "📱" },
    ],
    stats: [
      { value: 40, suffix: "%", label: "More Bookings" },
      { value: 3, suffix: "x", label: "Online Orders" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 55, suffix: "%", label: "Mobile Traffic Lift" },
    ],
    ctaHeadline: "Get Your Free Restaurant Website Audit",
    metaDescription: "Premium websites for restaurants. Online ordering, reservations, stunning menus — built to fill your tables. Free audit available.",
  },
  contractors: {
    title: "Websites for Contractors",
    headline: "Websites That Win More Bids",
    subheadline: "Homeowners search online before hiring a contractor. If your website doesn't showcase your work and make it easy to request a quote, you're losing bids to competitors with better sites.",
    body: "We build contractor websites with project galleries, quote request forms, and local SEO that makes you the obvious choice. Your site becomes your best estimator.",
    imageSrc: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    imageAlt: "Professional contractor on job site",
    services: [
      { name: "Project Galleries", description: "Before/after photo galleries, project case studies, and video walkthroughs that build instant trust.", icon: "📸" },
      { name: "Quote Request Forms", description: "Smart forms that capture project details, timelines, and budgets — qualifying leads before you call back.", icon: "📝" },
      { name: "Local SEO", description: "Service area pages, Google Maps optimization, and review generation to dominate your market.", icon: "📍" },
      { name: "Google Ads", description: "High-intent campaigns targeting 'contractor near me' with landing pages built to generate quote requests.", icon: "📈" },
    ],
    stats: [
      { value: 150, suffix: "%", label: "More Quote Requests" },
      { value: 45, suffix: "%", label: "Higher Close Rate" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 3, suffix: "x", label: "ROI on Ad Spend" },
    ],
    ctaHeadline: "Get Your Free Contractor Website Audit",
    metaDescription: "Premium websites for contractors. Project galleries, quote forms, local SEO — built to win more bids. Free audit available.",
  },
  lawyers: {
    title: "Websites for Law Firms",
    headline: "Websites That Win More Cases",
    subheadline: "Potential clients are searching for legal help right now. If your firm's website doesn't convey authority and make it easy to schedule a consultation, they're calling someone else.",
    body: "We build law firm websites with practice area pages, attorney profiles, case results, and intake forms that convert visitors into consultations.",
    imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Professional law office",
    services: [
      { name: "Practice Area Pages", description: "Dedicated pages for each practice area — personal injury, family law, criminal defense — each optimized to rank and convert.", icon: "⚖️" },
      { name: "Attorney Profiles", description: "Professional bios, credentials, case results, and client testimonials that build trust before the first call.", icon: "👤" },
      { name: "Intake Forms", description: "Smart consultation request forms that qualify leads and capture case details — reducing wasted consultations.", icon: "📋" },
      { name: "Legal SEO", description: "Content strategy, local SEO, and Google Ads for high-value practice areas like PI and family law.", icon: "🔍" },
    ],
    stats: [
      { value: 200, suffix: "%", label: "More Consultations" },
      { value: 55, suffix: "%", label: "Conversion Rate Lift" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 4, suffix: "x", label: "ROI on Marketing" },
    ],
    ctaHeadline: "Get Your Free Law Firm Website Audit",
    metaDescription: "Premium websites for law firms. Practice area pages, attorney profiles, intake forms — built to win more clients. Free audit available.",
  },
  hvac: {
    title: "Websites for HVAC Companies",
    headline: "Websites That Keep the Calls Coming",
    subheadline: "When someone's AC dies in July, they're not scrolling through page 2 of Google. If your HVAC site isn't fast, mobile-friendly, and easy to call — you're losing emergency jobs.",
    body: "We build HVAC websites with emergency CTAs, service area pages, and seasonal campaign support. Your site becomes your best dispatcher.",
    imageSrc: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    imageAlt: "HVAC technician at work",
    services: [
      { name: "Emergency-First Design", description: "Click-to-call, emergency banners, and after-hours forms. Capture every call, even at 2 AM.", icon: "🚨" },
      { name: "Service Area Pages", description: "City and zip code pages that dominate local search for 'AC repair near me' and 'heating company near me'.", icon: "📍" },
      { name: "Seasonal Campaigns", description: "Landing pages for AC tune-ups in spring and furnace inspections in fall — timed to match demand.", icon: "🗓️" },
      { name: "Google Ads", description: "Emergency and seasonal ad campaigns with landing pages built to convert calls, not just clicks.", icon: "📈" },
    ],
    stats: [
      { value: 75, suffix: "%", label: "More Emergency Calls" },
      { value: 3, suffix: "x", label: "Summer Revenue" },
      { value: 95, suffix: "+", label: "Lighthouse Score" },
      { value: 50, suffix: "%", label: "Lower Cost Per Lead" },
    ],
    ctaHeadline: "Get Your Free HVAC Website Audit",
    metaDescription: "Premium websites for HVAC companies. Emergency CTAs, service area SEO, seasonal campaigns — built to keep the calls coming. Free audit available.",
  },
};
