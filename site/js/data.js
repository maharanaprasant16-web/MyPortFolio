/* ===== EDIT YOUR CONTENT HERE =====
   Everything on the site is generated from this object. Change text, add or delete items in any list.
   An empty list or missing block hides that section automatically. Save, then refresh the browser. */
window.PORTFOLIO = {
  theme: { primary: "#1d4ed8", secondary: "#4f46e5", accent: "#0d9488", dark: "#0b1b4d" },
  resume: "assets/resume.pdf",
  name: "Prasanta Maharana",
  initials: "PM",
  navTitle: "Techno-Functional Product Leader",
  hero: {
    badge: "Available for Application Head / Product Owner / Solution Delivery Roles",
    title: "Techno-Functional Product Leader & Application Owner",
    tagline: "Digital Lending Transformation • LOS/LMS Architecture • Fintech Ecosystem Delivery",
    summary: "<b>13+ years</b> of proven expertise driving end-to-end digital lending transformation across NBFCs, Small Finance Banks, and Fintech firms. Bridging business requirements and software engineering to architect and deliver high-scale LOS/LMS, digital onboarding/eKYC, credit decisioning, and automated collection ecosystems.",
    chips: ["Microfinance & Two-Wheeler", "Home Loan & LAP & MSME", "API Integrations & Credit Bureau", "Agile Delivery & System Modernization"],
    stats: [
      { value: "13+", label: "Years Experience" }, { value: "5+", label: "Lending Products" },
      { value: "4+", label: "Major Enterprise Platforms" }, { value: "IIM", label: "Trichy Alum (PG)" }
    ]
  },
  contact: {
    location: "Bengaluru, Karnataka, India", status: "L&T Finance Lead",
    email: "maharanaprasant16@gmail.com", email2: "prasanta.pgcbf05@iimtrichy.ac.in",
    phone: "+91 8431932522",
    linkedinLabel: "PrasantaMaharana", linkedinUrl: "",   // paste your full LinkedIn URL to make it clickable
    headline: "Let's build the next digital lending platform",
    text: "Open to Application Head, Application Owner and Product Owner roles across digital lending. Reach out and I will get back to you."
  },
  career: {
    eyebrow: "Career Journey", title: "Progressive Leadership Roadmap",
    sub: "Consistent growth across Top NBFCs, SFBs, and Microfinance Leaders",
    steps: [
      { dates: "Nov 2012 – Dec 2014", org: "Micro Finance Ltd", role: "Sr. Tech Support Lead", note: "Production operations, incident triage & reporting analytics." },
      { dates: "Jul 2015 – Nov 2018", org: "Ujjivan Small Fin. Bank", role: "Business Analyst", note: "Mobile GLOW LOS, CBS integration & data migration on SQL." },
      { dates: "Nov 2018 – Sep 2022", org: "IIFL Samasta Finance", role: "Sr. Application Manager", note: "GLOW LOS, DW/MDM, Zoho CRM & digital collections." },
      { dates: "Sep 2022 – Nov 2023", org: "Fincare Small Fin. Bank", role: "Tech Product Manager", note: "LAP/Home Loan LOS, UPI collections & M-Care/M-Serve modernization." },
      { dates: "Nov 2023 – Present", org: "L&T Finance Limited", role: "Solution Delivery Lead", note: "Partner onboarding (PhonePe, CRED), digital KYC & credit stack.", current: true }
    ]
  },
  projects: {
    eyebrow: "Detailed Deliverables", title: "Key Projects & Product Portfolio",
    sub: "End-to-end breakdown of 4 major enterprise transformations across digital lending, partner ecosystems, eKYC stacks, and collections.",
    filters: [["all", "All Projects"], ["lt", "L&T Finance"], ["uji", "Ujjivan & IIFL"], ["fin", "Fincare SFB"]],
    items: [
      { groups: ["lt"], tag: "Project #1 • L&T Finance", when: "Nov 2023 - Present",
        title: "Digital Lending Partner Onboarding Platform", subtitle: "Unified Partner Onboarding Integration (PhonePe, Google Pay, CRED, Snapdeal)",
        problem: "Fragmented, siloed application intake across multiple third-party lending partners and digital channels, leading to repetitive technical overhead and inconsistent customer journeys.",
        role: "Owned solution delivery end-to-end, architecture coordination, process design, and the partner integration roadmap across multi-product portfolios.",
        solution: "Architected and launched a consolidated, partner-agnostic onboarding platform with plug-and-play API frameworks for Home Loan, Two-Wheeler, and MSME applications.",
        tech: ["PhonePe", "Google Pay", "CRED", "Snapdeal", "REST APIs", "Home/2W/MSME LOS"],
        outcome: "Established a single, scalable partner ingestion capability supporting multiple lending products." },
      { groups: ["lt"], tag: "Project #2 • L&T Finance", when: "Nov 2023 - Present",
        title: "Digital KYC & Credit Assessment Stack", subtitle: "Automated Onboarding, Income Assessment & Credit Decision Engine",
        problem: "Heavy dependence on manual documentation, paper-intensive identity verification, and slow financial statement processing, causing high turn-around time and credit verification bottlenecks.",
        role: "Led solution design and delivery across digital verification, vendor integration, document processing, and automated credit assessment.",
        solution: "Implemented a comprehensive verification stack: eKYC, DigiLocker eSign, Aadhaar OCR, Video KYC/PD, with automated banking and GST analyzer integrations for credit evaluation.",
        tech: ["Perfios", "Hyperverge", "Digio & Signzy", "Bureau Analyzer", "GST & Hunter", "LEI / URC / CKYC"],
        outcome: "Eliminated manual document handling, cut underwriting TAT from days to minutes, and strengthened fraud controls via automated Hunter and bureau checks." },
      { groups: ["uji"], tag: "Project #3 • Ujjivan SFB & IIFL Samasta", when: "Multi-Year Implementation",
        title: "GLOW Mobile Loan Origination System (LOS)", subtitle: "Field-Sourcing Mobile Platform for Microfinance & Retail Lending",
        problem: "Field agents in remote and rural locations relied on physical loan applications, causing data entry errors, delayed credit processing, and high operational costs.",
        role: "Led implementation and custom feature enhancements across both organizations as field operations scaled; managed vendor delivery with Craft Silicon.",
        solution: "Deployed Craft Silicon's GLOW Mobile LOS with real-time field eKYC, instant eSign, and PAN verification, connected to the Core Banking System (BRNET) and LMS.",
        tech: ["Craft Silicon GLOW", "BRNET CBS", "CRM Next / Zoho", "eKYC & eSign", "SQL Server"],
        outcome: "Digitized field loan origination end to end and connected sourcing to downstream LMS and CRM platforms." },
      { groups: ["uji", "fin"], tag: "Project #4 • IIFL Samasta & Fincare SFB", when: "Multi-Year Modernization",
        title: "Digital Collections & Cashless Disbursement Ecosystem", subtitle: "Modern Multi-Channel Repayment & Collection Platform",
        problem: "High risk, operational expense, and manual reconciliation effort in cash-heavy collection processes across microfinance and retail loan portfolios.",
        role: "Architected and executed collection management, payment integrations, and real-time LMS loan account posting workflows.",
        solution: "Integrated collection channels with UPI, Airtel, Fino, and Fingpay, with collection workflows connected directly to the loan management system.",
        tech: ["UPI Collection Engine", "Airtel Payments", "Fino Bank", "Fingpay AEPS", "LMS Posting"],
        outcome: "Expanded digital repayment channels, reduced cash handling risk, and supported existing field-based collection operations." }
    ]
  },
  experience: {
    eyebrow: "Work History", title: "Professional Experience", sub: "Detailed responsibilities and achievements across roles",
    jobs: [
      { role: "Solution Delivery Lead", company: "L&T Finance Limited", when: "Nov 2023 – Present", place: "Bengaluru, India", current: true, points: [
        ["Digital Lending Transformation", "Lead end-to-end solution delivery across two-wheeler, home loan, MSME, and secured lending journeys covering onboarding, KYC, credit assessment, and collections."],
        ["Partner Ecosystem", "Own the design and delivery of a unified partner onboarding platform integrated with PhonePe, Google Pay, CRED, and Snapdeal."],
        ["Application Strategy", "Define process flows and solution architecture for Top-up, Pre-Approved, and Securitized loan products."],
        ["Digital Onboarding & KYC", "Drive eKYC, DigiLocker eSign, Aadhaar verification, OCR-based assessment, Video KYC, Video PD, and CKYC capabilities."],
        ["Credit & Risk Tech", "Deliver Bureau, GST, and Banking Report Analyzer, Hunter, MNRL, PAN, LEI, and URC integrations to strengthen credit and fraud controls."],
        ["Customer Engagement", "Lead Planet CDP integration with MoEngage for segmentation, targeted offers, and engagement-led lending."],
        ["Third-Party Ecosystem", "Manage integrations with Perfios, Hyperverge, Digio, Signzy, CarWale, and other ecosystem partners."] ] },
      { role: "Technical Product Manager", company: "Fincare Small Finance Bank", when: "Sep 2022 – Nov 2023", place: "Bengaluru, India", points: [
        ["Product Requirements Management", "Owned end-to-end requirement lifecycle across microfinance, LAP, home loan, and two-wheeler lending, covering BRD/FSD, traceability, and sprint delivery."],
        ["Lending Platforms", "Defined and delivered LOS/LMS propositions for microfinance and two-wheeler lending, aligned with operational needs."],
        ["Digital Collections", "Implemented a digitized collection platform integrated with UPI to expand repayment channels."],
        ["Application Modernization", "Managed legacy M-Care/M-Serve requirements during the transition toward modernized lending platforms."],
        ["Design & Deliverables", "Used Figma, Draw.io, Visio, Jira, and Zoho to turn complex business needs into process flows, functional specs, and sprint backlogs."] ] },
      { role: "Senior Application Manager", company: "IIFL Samasta Finance Limited", when: "Nov 2018 – Sep 2022", place: "Bengaluru, India", points: [
        ["Application Ownership", "Managed application delivery across CRM, LOS/LMS, data warehouse, MDM, reporting, and digital collections for a rapidly scaling NBFC-MFI ecosystem."],
        ["LOS Transformation", "Implemented and customized GLOW LOS to support expanding microfinance operations and field-based origination."],
        ["CRM Transformation", "Implemented Zoho CRM integrated with LOS and LMS for a unified customer servicing ecosystem."],
        ["Data Warehouse & Analytics", "Led Data Warehouse and MDM implementation while establishing an in-house SQL reporting environment."],
        ["Customer Platforms & Integration", "Built a customer query-resolution application and delivered PAN, Voter ID, banking, CRM, LOS, and LMS integrations."],
        ["Digital Collections", "Architected cashless disbursement and collection capabilities, integrating with Airtel, Fino, and Fingpay."] ] },
      { role: "Business Analyst", company: "Ujjivan Small Finance Bank", when: "Jul 2015 – Nov 2018", place: "Bengaluru, India", points: [
        ["Lending Delivery", "Delivered LOS, LMS, and CRM implementations integrated with Core Banking System (BRNET)."],
        ["Data Migration Lead", "Spearheaded legacy-to-modern platform data migration using SQL Server for structured transition of core portfolio data."],
        ["Mobile Sourcing", "Implemented GLOW mobile LOS with eKYC, eSign, and PAN verification for field microfinance operations."],
        ["CRM & Master Data", "Integrated CRM Next across CBS, LMS, and LOS, and architected MDM for consistent customer data."] ] },
      { role: "Senior Technical Support Officer / Team Lead", company: "Micro Finance Ltd", when: "Nov 2012 – Dec 2014", place: "India", points: [
        ["Technical Support Leadership", "Led technical support and operational reporting, managing production issue resolution, ticket escalation, and SLA tracking."],
        ["Production Stability", "Coordinated cross-functional teams to resolve recurring application bugs and improve system availability."] ] }
    ]
  },
  skills: {
    eyebrow: "Technical & Domain Capabilities", title: "Core Competencies & Tech Stack",
    sub: "Domain mastery in lending operations, software frameworks, and analytics",
    groups: [
      { icon: "layers", title: "Application Ownership & Strategy", items: ["Enterprise Application Governance", "Digital Lending Transformation", "Product & Platform Modernization", "Vendor & Stakeholder Alignment", "Solution Architecture & Design"] },
      { icon: "bank", title: "Lending Platforms & Systems", items: ["GLOW LOS & Craft Silicon", "BRNET Core Banking", "M-Care & M-Serve Modernization", "Planet Platform & ILOS", "Partnership Sourcing Frameworks"] },
      { icon: "shield", title: "Digital KYC & Verification Stack", items: ["eKYC & DigiLocker eSign", "CKYC, Video KYC & Video PD", "Perfios & Hyperverge OCR", "Bureau & GST Report Analyzers", "Hunter Fraud Prevention & LEI/URC"] },
      { icon: "database", title: "Data, Analytics & DB", items: ["SQL Server & MySQL Querying", "Master Data Management (MDM)", "Power BI, SSIS & SSRS Reporting", "Data Warehouse & Data Migration", "Python Scripting"] },
      { icon: "users", title: "CRM & Engagement", items: ["CRM Next Implementation", "Zoho CRM & Salesforce Integration", "Planet CDP & MoEngage Engagement", "Centralized Customer Query Resolution"] },
      { icon: "tool", title: "Product Delivery & Methodologies", items: ["Agile / Scrum Governance", "BRD, FSD & Requirement Traceability", "UAT Governance & Production Rollouts", "Sprint & Release Planning", "Jira, Figma, Draw.io & Visio"] }
    ]
  },
  education: {
    eyebrow: "Academic Background", title: "Education & Academic Excellence",
    certEyebrow: "Industry Credentials", certTitle: "Certifications",
    main: [
      { badge: "IIM", title: "PG Certificate in Banking and Finance (PG)", when: "2026 - 2027 (In Progress)", school: "Indian Institute of Management (IIM) Tiruchirappalli", note: "Focusing on advanced financial risk, digital banking leadership, and fintech strategy." },
      { badge: "MCA", title: "Master of Computer Applications (MCA)", when: "2008 - 2011", school: "Punjab Technical University", note: "Core software engineering, database design, system architecture, and algorithms." },
      { badge: "BA", title: "Bachelor's Degree", when: "2004 - 2008", school: "Berhampur University, Berhampur" },
    ],
    minor: [
      { title: "+2 Intermediate (Economics)", school: "Somanath Science College (2004)" },
      { title: "High School Education", school: "Ananta Narayana Bidya Pitha (2002)" }
    ],
    certs: [
      { icon: "award", title: "ITIL Certification", note: "IT Service & Application Lifecycle Management" },
      { icon: "layers", title: "Agile Methodology Training", note: "Scrum, Sprint Delivery & Backlog Refinement" },
      { icon: "tool", title: "IBM Project Management Certification", note: "Enterprise Project Execution & Governance" },
      { icon: "shield", title: "Certified Business Analyst", note: "Requirements Engineering & Solution Design" }
    ]
  }
};
