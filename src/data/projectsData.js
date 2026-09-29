export const projectsData = [
  {
    id: "devcollab",
    title: "DevCollab",
    tagline: "Developer Collaboration Platform",
    subtitle: "Full-Stack Project Discovery, Team Formation & Task Management Platform",
    featured: true,
    github: "https://github.com/vrushabhdarekar22/DevCollab-backend",
    demo: "https://dev-collab-frontend-79h6.vercel.app/",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "RBAC", "REST APIs"],
    summary: "A full-stack developer platform enabling developer matchmaking, structured team formation, real-time workspace messaging, and task tracking workflows.",
    description: "Built to streamline open-source and hackathon team assembly, DevCollab provides end-to-end tooling for project discovery, role applications, task Kanban boards, and instant developer communication.",
    features: [
      "Project Discovery Feed with tech stack filtering and dynamic routing",
      "Multi-role Team Assembly with custom permissions and application workflows",
      "Real-time Messaging and Activity Streaming powered by Socket.IO",
      "Kanban Task Tracking with JWT-secured RBAC state management",
      "MongoDB Indexed Data Models for high-throughput query performance",
      "Responsive React UI with smooth dynamic route transitions"
    ],
    architecture: {
      client: "React.js + Redux / Context + Socket.IO Client",
      server: "Node.js + Express.js REST API + Socket.IO Server",
      database: "MongoDB with Mongoose ORM & Compound Indexing",
      security: "Stateless JWT Bearer Authentication + Custom Middleware RBAC",
      flowDiagram: [
        "Client (React) → Auth Middleware (JWT/RBAC Check)",
        "API Gateway (Express) → Service Layer → MongoDB Schemas",
        "Socket.IO Gateway → Event Emitter → Real-Time Room Subscribers"
      ]
    },
    keyMetrics: [
      "Real-time WebSockets",
      "JWT & RBAC Security",
      "Dynamic Routing",
      "Full Stack MERN"
    ]
  },
  {
    id: "sahyatri",
    title: "Sahyatri",
    tagline: "Women’s Safety & Emergency Response Platform",
    subtitle: "Safety-Aware Navigation, Live Tracking & Offline-First SOS Queuing Engine",
    featured: true,
    github: "https://github.com/vrushabhdarekar22/Sahyatri",
    demo: "https://sahyatri-self.vercel.app/",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "OpenRouteService",
      "Geoapify",
      "OpenStreetMap",
      "Twilio"
    ],
    summary: "Full-stack women’s safety platform featuring safety-aware route optimization, live guardian location streaming, offline SOS fallback queuing, and automated WhatsApp emergency dispatch.",
    description: "Designed for real-world personal security, Sahyatri evaluates route safety scores using OpenRouteService & Geoapify API data while guaranteeing emergency SOS transmission even under degraded network conditions.",
    features: [
      "Safety-Aware Routing Engine integrating OpenRouteService & Geoapify APIs",
      "Live Location Streaming to trusted guardians via Socket.IO web sockets",
      "Automated Emergency WhatsApp & SMS Alerts via Twilio integration",
      "Offline-First SOS Queuing System storing alerts locally and auto-dispatching upon reconnection",
      "Interactive OpenStreetMap vector rendering with custom safety markers",
      "Guardian Management with emergency contact validation & verification"
    ],
    architecture: {
      client: "React.js + OpenStreetMap Engine + LocalStorage Queue + Socket.IO Client",
      server: "Node.js + Express.js API + Twilio Messaging Client + Geo Services Engine",
      database: "MongoDB (User profiles, emergency contacts, trip history)",
      services: "OpenRouteService API + Geoapify POI API + Twilio WhatsApp Gateway",
      flowDiagram: [
        "User Triggers SOS → LocalStorage Queue (Offline Safety Net)",
        "Network Available → Flush Queue to Express Backend",
        "Backend → Broadcast Socket.IO Live Location to Guardians",
        "Backend → Dispatch Twilio WhatsApp & SMS Alerts concurrently"
      ]
    },
    keyMetrics: [
      "Offline SOS Fallback",
      "Twilio WhatsApp API",
      "OpenRouteService GIS",
      "Live Guardian Socket"
    ]
  }
];
