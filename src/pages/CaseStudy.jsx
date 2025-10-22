import React from "react";

const CaseStudy = () => {
  const caseStudyData = {
    title: "Project Phoenix: Revamping User Experience",
    description:
      "A comprehensive case study on how we transformed a struggling e-commerce platform into a user-friendly and profitable business.",
    imageUrl: "/projects/project1.png",
    content: [
      "Introduction: Project Phoenix was initiated to address the declining user engagement and conversion rates of ShopSphere, an online retail platform.",
      "Challenges: The existing platform suffered from poor navigation, a cluttered interface, and a slow loading speed.",
      "Solutions: We implemented a complete redesign, focusing on intuitive navigation, a clean and modern UI, and performance optimization.",
      "Results: Within three months, user engagement increased by 150%, conversion rates doubled, and customer satisfaction scores soared.",
    ],
  };
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {caseStudyData.title}
      </h2>
      <img
        src={caseStudyData.imageUrl}
        alt="Project Preview"
        className="rounded-lg shadow-md mb-6"
      />
      <p className="text-gray-700 leading-relaxed mb-4">
        {caseStudyData.description}
      </p>
      <div>
        <h2> Case Study: E-commerce Website Development Project.</h2>
        <h4>
          Title: [Name of the E-commerce Platform/Store, e.g., "The Gourmet
          Pantry Online Store"]
        </h4>
        <h3>Client: [Client Company Name, e.g., "Gourmet Foods Inc."]</h3>
        <h3>Industry: [Industry, e.g., Specialty Food Retail]</h3>
        <h3>Duration: [Start Date] – [Completion Date] (e.g., 6 Months) </h3>
        <ul>1. Executive Summary </ul>
        <p>
          A brief overview of the project, the client's main challenge, the
          solution provided (the new website), and the key results achieved.
        </p>
        Goal: To migrate the client from a dated, limited legacy platform to a
        scalable, modern e-commerce solution to support planned business
        expansion and improve customer experience. Result Snapshot: [e.g., 45%
        increase in online sales within the first quarter; 20% reduction in
        customer service calls related to ordering; 35% faster page load time.]
        2. The Client & The Challenge 2.1. The Client Background Brief
        description of the client's business, market position, and existing
        customer base. Example: Gourmet Foods Inc. is a local retailer
        specializing in high-end, imported culinary products with three physical
        locations. They had a small online presence using a proprietary platform
        built in 2010. 2.2. The Problem/Challenge What were the specific pain
        points that necessitated the new website? Technical: Slow loading
        speeds, frequent downtime, lack of mobile responsiveness, inability to
        integrate with current inventory system. Business: High cart abandonment
        rate (e.g., 65%), inability to offer tiered pricing or subscription
        models, lack of robust analytics, limiting growth potential. User
        Experience (UX): Confusing checkout process, difficult product
        discovery, poor search functionality. 3. The Solution & Development
        Process 3.1. Project Goals & Strategy Primary Goals: Design and develop
        a user-friendly, mobile-responsive e-commerce platform. Integrate a
        real-time inventory management system (IMS) and ERP. Implement a secure,
        multi-step checkout process with multiple payment options. Improve SEO
        and overall site performance. Platform/Technology Stack Selection:
        Example: Platform: Shopify Plus / Adobe Commerce (Magento) / Custom
        build with React & Node.js Database: PostgreSQL / MongoDB Payment
        Gateway: Stripe / PayPal / Apple Pay CMS: Headless (if applicable) 3.2.
        Key Solution Features Implemented UX/UI Focus: Intuitive navigation,
        one-page or three-step checkout, high-quality product photography
        implementation, and robust filtering options. Integrations: Integration
        with [ERP/IMS Name] for real-time stock updates. Integration with
        [Shipping Carrier API] for dynamic rate calculation. Marketing Tools:
        Implementation of an abandoned cart recovery email sequence,
        personalized product recommendations (AI-driven), and customer loyalty
        program integration. Performance: Optimization for Core Web Vitals (LCP,
        FID, CLS) and CDN implementation for global speed. 3.3. Development
        Methodology What development process was used? (e.g., Agile Scrum with
        bi-weekly sprints, Waterfall)
      </div>
    </div>
  );
};

export default CaseStudy;
