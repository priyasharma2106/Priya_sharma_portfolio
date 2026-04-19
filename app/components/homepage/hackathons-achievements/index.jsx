"use client";

import { useEffect, useMemo, useState } from "react";
import { FiChevronDown, FiExternalLink, FiGithub, FiPlus, FiX } from "react-icons/fi";

const hackathons = [
  {
    id: 0,
    title: "Reliance Foundation Undergraduate Scholar",
    organisation: "Reliance Foundation",
    year: "2024",
    description:
      "Selected among the top 5,000 undergraduate students across India for the Reliance Foundation Scholarship — awarded for academic excellence, problem-solving ability, and demonstrated potential in technology and innovation. One of the most competitive national-level scholarships for engineering students.",
    type: "scholarship",
    badge: "Scholar",
    badgeColor: "#F5A623",
    issuer: "Reliance Foundation",
    date: "2024",
    whatItWas:
      "A prestigious national-level scholarship program that recognizes high-performing undergraduate students in India with strong academic records and innovation potential.",
    whatIBuilt:
      "Demonstrated sustained academic excellence, analytical thinking, and technology-driven problem-solving to qualify among the top selected scholars nationally.",
    tags: ["Scholarship", "Academic Excellence", "Problem Solving", "Innovation"],
    github: "",
    demo: "",
  },
  {
    id: 1,
    badge: "Winner",
    badgeColor: "#F5A623",
    title: "Hack 2 Hire Ideathon",
    issuer: "",
    date: "",
    whatItWas:
      "A national-level ideathon challenging participants to pitch and demonstrate agentic AI concepts — focusing on real-world applicability, system design, and the potential impact of autonomous AI agents across industries.",
    whatIBuilt:
      "Conceptualized and presented an agentic AI solution with a working implementation plan, showcasing how autonomous agents could solve a tangible real-world problem end-to-end.",
    tags: ["Agentic AI", "System Design", "AI/ML", "Product Thinking"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    badge: "SIH 2025",
    badgeColor: "#F5A623",
    title: "Smart India Hackathon 2025",
    issuer: "Government of India — Ministry of Education",
    date: "2025",
    whatItWas:
      "India's largest national-level hackathon, where teams solve real government and industry problem statements.",
    whatIBuilt:
      "AI/ML-based rockfall risk prediction system using drone, IoT sensor, and LiDAR data. Built a FastAPI backend integrated with a real-time React dashboard and Firestore DB for evacuation alerts in open-pit mines.",
    tags: ["Python", "FastAPI", "React", "TensorFlow", "Firestore", "IoT", "LiDAR"],
    github: "https://github.com/Nishaa1304/Rockfall-prediction-AI.git",
    demo: "",
  },
  {
    id: 3,
    badge: "Winner",
    badgeColor: "#F5A623",
    title: "RISE Conference — IEEE",
    issuer: "IEEE",
    date: "",
    whatItWas:
      "A research and innovation conference organized by IEEE where participants presented technical research papers and project work to a panel of industry and academic experts.",
    whatIBuilt:
      "Authored and presented a research paper on our project, demonstrating its technical depth, real-world applicability, and innovation potential to a panel of IEEE-affiliated reviewers.",
    tags: ["Research", "Technical Writing", "Presentation", "IEEE"],
    github: "",
    demo: "",
  },
  {
    id: 4,
    badge: "Top 10",
    badgeColor: "#4A6FA5",
    title: "CodeSlayer 2025 — NIT Delhi",
    issuer: "DevSphereIndia × NIT Delhi (UBA Cell)",
    date: "November 1–2, 2025",
    whatItWas:
      "Offline final-round competitive coding and solution design contest held at NIT Delhi, organized by DevSphereIndia.",
    whatIBuilt:
      "Competed as Team Evangelions — built Sampark, an offline-first modular web app for rural Panchayat data management with auto-sync to PostgreSQL, multilingual support, and real-time connectivity handling.",
    tags: ["Python", "Node.js", "PostgreSQL", "IndexedDB", "Offline-First", "React"],
    github: "https://github.com/namanxdev/Sampark",
    demo: "",
  },
  {
    id: 5,
    badge: "Participant",
    badgeColor: "#4A6FA5",
    title: "Amazon ML Challenge 2025",
    issuer: "Amazon",
    date: "2025",
    whatItWas:
      "A national machine learning competition by Amazon challenging participants to build high-accuracy ML models on large-scale real-world product datasets.",
    whatIBuilt:
      "Built and iterated on ML models using a 75K+ product dataset — performed EDA, feature engineering, and experimented with ensemble techniques to optimize prediction accuracy.",
    tags: ["Python", "Scikit-learn", "EDA", "Feature Engineering", "ML", "Pandas"],
    github: "",
    demo: "",
  },
  {
    id: 6,
    badge: "Participant",
    badgeColor: "#4A6FA5",
    title: "Hack & Make 2026",
    issuer: "Govt. of Madhya Pradesh — MSME, MPIDC, FICCI, MP Startup Centre",
    date: "January 11, 2026",
    whatItWas:
      "Government-backed national innovation sprint organized by MP Startup Centre in collaboration with MSME, MPIDC, and FICCI.",
    whatIBuilt:
      "Developed and showcased a technical prototype during the Code-It innovation sprint.",
    tags: ["Innovation", "Prototyping"],
    github: "",
    demo: "",
  },
];

const certificates = [
  {
    id: 1,
    title: "Circuit Design, TechAcme 2K25",
    issuer: "OIST Bhopal × IEEE MP Section × ACM",
    badge: "1st Place",
    badgeColor: "#F5A623",
    description:
      "Won first place in an inter-college circuit design event at TechAcme 2K25.",
    date: "April 10–12, 2025",
    file: "/certificates/circuit_design_winning_certificate.jpg",
  },
  {
    id: 2,
    title: "NPTEL — Introduction to Machine Learning",
    issuer: "IIT Madras / NPTEL / Swayam",
    badge: "Elite",
    badgeColor: "#1a7f37",
    description:
      "Earned the Elite certification for the 12-week NPTEL course on Introduction to Machine Learning, scoring 62% — with 22.75/25 in assignments and 39.62/75 in the proctored exam. Certified alongside 6009 candidates nationally.",
    date: "Jan–Apr 2025",
    file: "/certificates/Introduction_to_Machine_Learning.pdf",
  },
  {
    id: 3,
    title: "IIT Bombay FOSSEE-AAI Geospatial Mapathon",
    issuer: "IIT Bombay / NMEICT / Ministry of Education",
    badge: "Notable Participant",
    badgeColor: "#4A6FA5",
    description:
      "Recognized in the world's largest open-source geospatial mapping challenge under NMEICT.",
    date: "March–July 2025",
    file: "/certificates/Mapathon_IIT_Bombay_certificate.pdf",
  },
  {
    id: 4,
    title: "IIC Regional Meet 2025",
    issuer: "MoE's Innovation Cell, AICTE",
    badge: "Participant",
    badgeColor: "#4A6FA5",
    description:
      "Represented OIST at the IIC One Day Regional Meet hosted at Acropolis Institute, Indore.",
    date: "December 2, 2025",
    file: "/certificates/Yukti.jpeg",
  },
  {
    id: 5,
    title: "Hack & Make 2026",
    issuer: "Govt. of MP — MSME / MPIDC / FICCI",
    badge: "Participant",
    badgeColor: "#4A6FA5",
    description:
      "Participated in a national government-backed innovation sprint showcasing a technical prototype.",
    date: "January 11, 2026",
    file: "/certificates/Hack_Make_2026_Certificate.pdf",
  },
  {
    id: 6,
    title: "CodeSlayer 2025 — NIT Delhi",
    issuer: "DevSphereIndia × NIT Delhi",
    badge: "Top 10 Finalist",
    badgeColor: "#4A6FA5",
    description:
      "Qualified for and competed in the offline final round at NIT Delhi as Team Evangelions.",
    date: "November 1–2, 2025",
    file: "/certificates/Code_slayers_certificate.pdf",
  },
  {
    id: 7,
    title: "OPL Contest — 1st Runner Up",
    issuer: "OIST Training Department",
    badge: "1st Runner-Up",
    badgeColor: "#4A6FA5",
    description:
      "Secured 2nd place in the OPL coding contest held at OGI Auditorium.",
    date: "June 18, 2024",
    file: "/certificates/opl.jpg",
  },
  {
    id: 8,
    title: "Embedded Systems Bootcamp",
    issuer: "Robonauts India × VISION ECE, MANIT Bhopal",
    badge: "Completed",
    badgeColor: "#4A6FA5",
    description:
      "Completed 2-day hands-on embedded systems training at MANIT Bhopal.",
    date: "October 12–13, 2024",
    file: "/certificates/manit_embedded_system_.jpg",
  },
  {
    id: 9,
    title: "Free Robotics Workshop",
    issuer: "FIZ Robotic Solutions × IIT Bombay Techfest",
    badge: "Completed",
    badgeColor: "#4A6FA5",
    description:
      "Completed a robotics workshop conducted by FIZ Robotic Solutions in collaboration with IIT Bombay Techfest.",
    date: "October 14, 2024",
    file: "/certificates/manit_embedded_system__2.jpg",
  },
];

const getIssuerInitials = (issuer) =>
  issuer
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const bubbleColors = [
  "bg-yellow-500",
  "bg-green-600",
  "bg-red-600",
  "bg-purple-600",
  "bg-cyan-600",
  "bg-orange-600",
];

function HackathonsAndAchievements() {
  const [activeHackathonId, setActiveHackathonId] = useState(1);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [zoom, setZoom] = useState(1);

  const activeCertificateIsPdf = useMemo(
    () => selectedCertificate?.file?.toLowerCase().endsWith(".pdf"),
    [selectedCertificate]
  );

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoom(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section id="achievements" className="relative z-50 my-12 lg:my-24">
      <div className="mb-10 text-center">
        <h2 className="text-[28px] font-bold text-white">Hackathons &amp; Achievements</h2>
        <p className="mt-2 text-sm md:text-base text-slate-300">
          Building, competing, and winning at national and institutional level
        </p>
  <div className="mx-auto mt-4 h-[1px] w-56 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto p-2 sm:p-6 grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 border border-zinc-700 rounded-2xl bg-[#0b1222]/80">

        {/* ── LEFT: Hackathons ── */}
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-lg font-semibold text-white">Hackathons &amp; Competitions</h3>
          <div className="space-y-4">
            {hackathons.map((item) => {
              const isOpen = activeHackathonId === item.id;
              const bubbleColor = bubbleColors[(item.id - 1) % bubbleColors.length];

              return (
                <article key={item.id} className="group relative">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="course-bg-hover block p-5 sm:p-6 bg-zinc-900 overflow-hidden relative border border-zinc-700 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">

                      {/* Bubble */}
                      <div
                        className={`course-bg h-32 w-32 ${bubbleColor} absolute -top-20 -right-20 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setActiveHackathonId((prev) => (prev === item.id ? null : item.id))
                        }
                        className={`w-full text-left relative z-10 ${
                          isOpen ? "border-l-[3px] border-l-[#F5A623] pl-3" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="inline-flex shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                            style={{ backgroundColor: item.badgeColor }}
                          >
                            {item.badge}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[15px] font-semibold text-white">
                              {item.title}
                            </p>
                            {item.issuer && (
                              <p className="mt-0.5 text-xs text-zinc-400">{item.issuer}</p>
                            )}
                          </div>

                          <div className="flex items-center gap-3 pl-2 shrink-0">
                            {item.date && (
                              <span className="text-xs text-zinc-400">{item.date}</span>
                            )}
                            {isOpen ? (
                              <FiChevronDown className="text-zinc-200" />
                            ) : (
                              <FiPlus className="text-zinc-200" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Expandable body */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out relative z-10 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="h-px bg-zinc-700" />
                          <div className="pt-3 text-[13px] leading-6 text-zinc-300">
                            <p>
                              <span className="font-semibold text-white">What it was: </span>
                              {item.whatItWas}
                            </p>
                            <p className="mt-2">
                              <span className="font-semibold text-white">What I built: </span>
                              {item.whatIBuilt}
                            </p>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={`${item.id}-${tag}`}
                                className="rounded-full bg-zinc-800 border border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.github && (
                              <a
                                href={item.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-zinc-500 px-3 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-700"
                              >
                                <FiGithub /> GitHub
                              </a>
                            )}
                            {item.demo && (
                              <a
                                href={item.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-zinc-500 px-3 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-700"
                              >
                                <FiExternalLink /> Live Demo
                              </a>
                            )}
                            {!item.github && !item.demo && (
                              <span className="text-xs text-zinc-400">Links will be added soon</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Certificates ── */}
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-white">Certificates &amp; Recognition</h3>

          <div className="max-h-[900px] space-y-4 overflow-y-auto pr-1">
            {certificates.map((cert, idx) => {
              const bubbleColor = bubbleColors[idx % bubbleColors.length];

              return (
                <article key={cert.id} className="group relative">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="course-bg-hover block p-5 bg-zinc-900 overflow-hidden relative border border-zinc-700 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg">

                      {/* Bubble */}
                      <div
                        className={`course-bg h-24 w-24 ${bubbleColor} absolute -top-16 -right-16 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                      />

                      <div className="flex items-start justify-between gap-3 relative z-10">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-[10px] font-bold text-white">
                            {getIssuerInitials(cert.issuer)}
                          </span>
                          <span className="truncate text-xs text-zinc-400">{cert.issuer}</span>
                        </div>
                        <span className="shrink-0 text-xs text-zinc-400">{cert.date}</span>
                      </div>

                      <h4 className="mt-2 text-[15px] font-semibold text-white relative z-10">
                        {cert.title}
                      </h4>
                      <p className="mt-1 text-[13px] text-zinc-300 relative z-10">
                        {cert.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-2 relative z-10">
                        <span
                          className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                          style={{ backgroundColor: cert.badgeColor }}
                        >
                          {cert.badge}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedCertificate(cert)}
                          className="inline-flex items-center gap-1 rounded-md border border-zinc-500 px-2.5 py-1.5 text-xs font-medium text-zinc-100 transition-all hover:bg-zinc-700"
                        >
                          View Certificate <FiExternalLink />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Certificate Modal ── */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4">
          <div className="relative w-full max-w-4xl rounded-xl bg-[#0f172a] p-4 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-3 top-3 rounded-md p-1 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close certificate viewer"
            >
              <FiX size={20} />
            </button>

            <div className="mb-3 flex items-center justify-between gap-3 pr-8">
              <p className="text-sm font-medium text-slate-200">{selectedCertificate.title}</p>
              {!activeCertificateIsPdf && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setZoom((prev) => Math.max(1, Number((prev - 0.2).toFixed(1))))
                    }
                    className="rounded border border-slate-500 px-2 py-0.5 text-xs"
                  >
                    −
                  </button>
                  <span className="text-xs text-slate-300">{Math.round(zoom * 100)}%</span>
                  <button
                    type="button"
                    onClick={() =>
                      setZoom((prev) => Math.min(2.5, Number((prev + 0.2).toFixed(1))))
                    }
                    className="rounded border border-slate-500 px-2 py-0.5 text-xs"
                  >
                    +
                  </button>
                </div>
              )}
            </div>

            <div className="max-h-[75vh] overflow-auto rounded border border-slate-700 bg-[#020617] p-3">
              {activeCertificateIsPdf ? (
                <iframe
                  src={selectedCertificate.file}
                  title={selectedCertificate.title}
                  className="h-[70vh] w-full rounded bg-white"
                />
              ) : (
                <img
                  src={selectedCertificate.file}
                  alt={selectedCertificate.title}
                  className="mx-auto h-auto max-w-full origin-top transition-transform duration-200"
                  style={{ transform: `scale(${zoom})` }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HackathonsAndAchievements;
