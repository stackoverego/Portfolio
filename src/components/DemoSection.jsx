import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Github,
  Layers3,
  Maximize2,
  UserRound,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "FitTrack",
    category: "Web Application",
    tagline: "Track Progress. Stay Consistent.",
    description:
      "A modern fitness web application that helps users plan workouts, track progress, and stay motivated with personalized insights and a clean, focused experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
    responsibilities: "UI/UX Design, Frontend Development, API Integration, Deployment",
    outcome:
      "Delivered a responsive fitness experience with clear weekly stats, workout plans, and a focused progress dashboard.",
    theme: "fitness",
  },
  {
    name: "Studio North",
    category: "Creative Platform",
    tagline: "Make Space for Good Ideas.",
    description:
      "A portfolio and booking platform for an independent creative studio, bringing its work, services, and client inquiries into one polished experience.",
    stack: ["React", "Vite", "CSS Modules", "Framer Motion", "EmailJS"],
    responsibilities: "Art Direction, Frontend Development, Motion Design, Launch",
    outcome:
      "Created a distinctive portfolio experience with a streamlined inquiry flow and responsive project gallery.",
    theme: "studio",
  },
  {
    name: "Field Notes",
    category: "Productivity Tool",
    tagline: "Keep Your Best Thinking Close.",
    description:
      "A lightweight workspace for collecting research, organizing notes, and turning scattered ideas into clear, searchable project briefs.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    responsibilities: "Product Design, Frontend Development, Search, Accessibility",
    outcome: "Shaped a calm note-taking workflow with searchable collections and an easy-to-scan project overview.",
    theme: "notes",
  },
  {
    name: "Daily Ritual",
    category: "Mobile Experience",
    tagline: "Small Steps. Better Days.",
    description:
      "A habit-building companion that turns daily routines into achievable goals with gentle reminders and meaningful progress summaries.",
    stack: ["React Native", "TypeScript", "Expo", "Firebase", "Figma"],
    responsibilities: "UX Research, Interface Design, App Development, Testing",
    outcome: "Built an encouraging daily check-in experience with simple streak tracking and flexible reminders.",
    theme: "ritual",
  },
  {
    name: "Common Ground",
    category: "Community Platform",
    tagline: "Find Your People. Share Your Place.",
    description:
      "A neighborhood discovery platform connecting local people with independent events, community spaces, and small businesses nearby.",
    stack: ["Next.js", "TypeScript", "Mapbox", "Supabase", "Tailwind CSS"],
    responsibilities: "Product Strategy, UI/UX Design, Web Development, Integration",
    outcome: "Delivered an accessible local discovery experience with map-based browsing and curated event listings.",
    theme: "community",
  },
];

const ProjectCard = ({ project, index }) => (
  <article className={`project-card project-card--${project.theme}`} data-project-index={index}>
    <div className="project-index" aria-hidden="true">
      <span>{String((index % projects.length) + 1).padStart(2, "0")}</span>
      <i />
      <span>05</span>
      <b>FEATURED PROJECT</b>
    </div>

    <div className="project-preview">
      <div className="preview-scene">
        <div className="preview-window">
          <div className="preview-nav">
            <span className="preview-brand">
              <i />
              {project.name}
            </span>
            <span>Overview</span>
            <span>Explore</span>
            <span>Journal</span>
            <b>Get Started</b>
          </div>
          <div className="preview-content">
            <div className="preview-copy">
              <small>01 / MADE FOR WHAT'S NEXT</small>
              <strong>
                {project.tagline.split(". ")[0]}
                <br />
                <em>{project.tagline.split(". ")[1]}</em>
              </strong>
              <p>{project.name} keeps your next step clear and your ideas moving.</p>
              <b>
                Explore project <ArrowUpRight size={12} />
              </b>
            </div>
            <div className="preview-dashboard">
              <div className="preview-chart">
                <span>Weekly activity</span>
                <div>
                  {[36, 58, 42, 78, 52, 91, 65].map((height, barIndex) => (
                    <i key={barIndex} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <small>M&nbsp;&nbsp; T&nbsp;&nbsp; W&nbsp;&nbsp; T&nbsp;&nbsp; F&nbsp;&nbsp; S&nbsp;&nbsp; S</small>
              </div>
              <div className="preview-stat">
                <b>7,320</b>
                <span>Steps this week</span>
                <i>+12%</i>
              </div>
              <div className="preview-metrics">
                <span>
                  <b>320</b>Active
                </span>
                <span>
                  <b>45</b>Minutes
                </span>
                <span>
                  <b>128</b>Points
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="preview-caption">
          <span>
            <b>{project.name}</b>
            <small>{project.category} · Product · Experience</small>
          </span>
          <Maximize2 size={18} />
        </div>
      </div>
    </div>

    <div className="project-details">
      <header className="project-heading">
        <div className="project-kicker">
          {project.category}
          <i />
        </div>
        <h2>{project.name}</h2>
        <h3>{project.tagline}</h3>
        <p>{project.description}</p>
      </header>

      <div className="project-info-box">
        <span className="project-info-icon">
          <Layers3 size={20} />
        </span>
        <div>
          <h4>Tech Stack</h4>
          <div className="project-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="project-info-box project-info-box--compact">
        <span className="project-info-icon">
          <UserRound size={20} />
        </span>
        <div>
          <h4>My Responsibilities</h4>
          <p>{project.responsibilities}</p>
        </div>
      </div>
      <div className="project-info-box project-info-box--compact">
        <span className="project-info-icon">
          <ChartNoAxesColumnIncreasing size={20} />
        </span>
        <div>
          <h4>Outcome</h4>
          <p>{project.outcome}</p>
        </div>
      </div>

      <div className="project-actions">
        <a className="project-open" href="https://example.com" target="_blank" rel="noreferrer">
          Open Project <ArrowUpRight size={17} />
        </a>
        <a className="project-github" href="https://github.com" target="_blank" rel="noreferrer">
          <Github size={19} /> GitHub
        </a>
      </div>
    </div>
  </article>
);

const DemoSection = ({ id, title, className }) => {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const scrollCueVisibleRef = useRef(true);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useLayoutEffect(() => {
    const stack = stackRef.current;
    const section = sectionRef.current;
    if (!stack || !section) return undefined;

    const media = gsap.matchMedia();
    const cards = gsap.utils.toArray(".project-card", stack);

    media.add("(min-width: 761px)", () => {
      gsap.set(cards, {
        x: () => -window.innerWidth * 1.2,
        y: 0,
        scale: 0.97,
        autoAlpha: 0,
        transformOrigin: "center center",
      });
      let timeline;
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * projects.length}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          if (!timeline) return;
          const index = Math.min(projects.length - 1, Math.floor(timeline.progress() * projects.length));
          setActiveProjectIndex((current) => (current === index ? current : index));
          const showCue = timeline.progress() < 0.06;
          if (scrollCueVisibleRef.current !== showCue) {
            scrollCueVisibleRef.current = showCue;
            setShowScrollCue(showCue);
          }
        },
      });

      cards.forEach((card, projectIndex) => {
        const step = projectIndex;

        cards.slice(0, projectIndex).forEach((stackedCard, stackedIndex) => {
          const depth = projectIndex - stackedIndex;
          timeline.to(
            stackedCard,
            {
              y: depth * 13,
              scale: 1 - depth * 0.025,
              duration: 0.8,
              ease: "power2.out",
            },
            step,
          );
        });

        timeline.to(
          card,
          {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          step,
        );
      });

      ScrollTrigger.refresh();
    });

    media.add("(max-width: 760px)", () => {
      gsap.set(cards, { x: -48, autoAlpha: 0 });
      cards.forEach((card, index) => {
        gsap.to(card, {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 56%",
            scrub: 0.7,
            onEnter: () => setActiveProjectIndex(index),
            onEnterBack: () => setActiveProjectIndex(index),
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`demo-section work-section ${className}`}
      aria-label={`${title} projects`}
    >
      <div className="project-carousel">
        <div className="project-stack" ref={stackRef}>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className="project-pagination" aria-hidden="true">
        {projects.map((project, index) => (
          <i className={index === activeProjectIndex ? "is-active" : ""} key={project.name} />
        ))}
      </div>
      <div className={`project-scroll-cue ${showScrollCue ? "is-visible" : ""}`} aria-hidden="true">
        <span>SCROLL FOR PROJECTS</span>
        <ArrowDown size={15} />
      </div>
    </section>
  );
};

export default DemoSection;
