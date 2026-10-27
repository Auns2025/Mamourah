export const ESTABLISHED_YEAR = 2003;

export const companyData = {
  name: "Mamourah Development & Construction L.L.C SP",
  brandName: "MAMOURAH",
  tagline: "Today, We Built the Future",
  established: ESTABLISHED_YEAR,
  get yearsOfExperience() {
    return new Date().getFullYear() - ESTABLISHED_YEAR;
  },
  location: "Khorfakkan, United Arab Emirates",
  address: "Rugaylat Road, Khorfakkan, Emirate of Sharjah, United Arab Emirates",
  phone: "+971 52 805 5100",
  phoneRaw: "+971528055100",
  email: "info@mamourah.ae",
  website: "www.mamourah.ae",
  websiteUrl: "https://www.mamourah.ae",
  workingHours: "Sunday – Thursday: 8:00 AM – 5:30 PM",
  
  introduction: "Mamourah Development & Construction L.L.C SP is an engineering and construction company delivering integrated construction and development solutions across the UAE. Established in 2003, the company specializes in delivering projects through technical expertise, contemporary methods, professional coordination and a commitment to quality.",
  
  aboutSummary: "Since its establishment in 2003, Mamourah has developed a reputation for quality construction and development solutions in the UAE. Its journey is built on experience, dedication and a client-focused approach. The company has successfully completed projects across multiple sectors, building long-term relationships with clients, partners and suppliers. The company continues to focus on quality, reliability, sustainability and creating lasting value for communities.",
  
  approach: "Mamourah approaches every project as a unique success story, combining technical knowledge, practical experience, craftsmanship and client-focused execution.",

  vision: "To be a leading construction and development company in the UAE, recognized for delivering innovative and sustainable solutions that enhance communities and create lasting value.",
  
  mission: "To deliver high-quality construction and development projects through expertise, integrity and a commitment to excellence.",

  commitment: "Building strong relationships with clients, partners and communities by delivering reliable, sustainable and future-ready solutions.",

  credibilityItems: [
    { label: "ESTABLISHED IN 2003", description: "Over two decades of UAE engineering heritage" },
    { label: "UAE CONSTRUCTION & DEVELOPMENT", description: "Operating across Sharjah, East Coast & the Emirates" },
    { label: "QUALITY-DRIVEN EXECUTION", description: "Strict ISO management systems & meticulous standards" },
    { label: "COMMITMENT TO EXCELLENCE", description: "Future-ready engineering solutions for lasting value" },
  ],

  coreValues: [
    {
      id: 1,
      title: "Quality Excellence",
      description: "Uncompromising standards in materials, engineering craftsmanship, and rigorous quality verification at every stage of execution."
    },
    {
      id: 2,
      title: "Integrity & Trust",
      description: "Transparent communication, contractual discipline, and honest partnerships built across decades of client collaboration."
    },
    {
      id: 3,
      title: "People & Collaboration",
      description: "Empowering skilled engineers, workforce safety, and cohesive teamwork among clients, consultants, and contractors."
    },
    {
      id: 4,
      title: "Sustainability & Community",
      description: "Building resilient physical infrastructure that enriches communities, minimizes environmental footprint, and lasts generations."
    },
    {
      id: 5,
      title: "Environmental Management",
      description: "Structured site resource conservation, waste reduction protocols, and compliance with UAE ecological regulations."
    },
    {
      id: 6,
      title: "Health & Safety",
      description: "An uncompromising commitment to zero harm, active hazard mitigation, and protective standards for every team member on site."
    }
  ],

  whyChooseUs: [
    {
      id: "01",
      title: "Proven Experience",
      description: "Over two decades of industry experience delivering diverse and complex projects across civil, commercial, and government sectors."
    },
    {
      id: "02",
      title: "Quality Driven",
      description: "Uncompromising focus on quality in every stage of construction, from structural foundations to pristine architectural fit-outs."
    },
    {
      id: "03",
      title: "Skilled Team",
      description: "Dedicated project managers, licensed civil engineers, technical supervisors, and skilled craftsmen with specialized domain expertise."
    },
    {
      id: "04",
      title: "Reliable Partner",
      description: "Long-term relationships built through trust, financial stability, transparent milestone reporting, and consistent on-time delivery."
    },
    {
      id: "05",
      title: "Compliance & Safety",
      description: "Strict alignment with UAE municipal regulations, civil defense codes, and international safety certifications."
    },
    {
      id: "06",
      title: "Sustainable Approach",
      description: "Responsible construction methods, resource optimization, and sustainable development principles that protect the future."
    }
  ]
};
