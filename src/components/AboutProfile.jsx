import React from "react";
import profileImage from "../assets/profile.jpg";

const education = [
  {
    label: "[B.E. COMPUTER ENGINEERING]",
    year: "2024-2027",
    title: "Sinhgad Institute of Technology, Lonavala | SPPU | 9.33 CGPA",
  },
  {
    label: "[DIPLOMA IN COMPUTER ENGINEERING]",
    year: "2021-2024",
    title: "KCE Society's College of Engineering and Management, Jalgaon | MSBTE | 86.34%",
  },
  { label: "[CLASS 10]", year: "2020-2021", title: "Lord Ganesha English Medium School, Jamner | CBSE | 84.2%" },
];

const experience = [{ label: "[SUMAGO INDUSTRIAL TRAINING]", year: "6 WEEKS", title: "Industrial Training" }];

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "SQL",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "LangChain",
  "Hugging Face",
  "LLMs",
  "RAG",
  "Embeddings",
  "Neo4j",
  "FastAPI",
  "Redis",
];
const softSkills = [
  "Full Stack Development",
  "Backend Development",
  "Generative AI",
  "AI Engineering",
  "Data Structures & Algorithms",
];

const AboutProfile = () => {
  return (
    <section id="about" className="about-profile">
      <header className="about-header">
        <h1>SUBJECT PROFILE</h1>
        <div className="about-status">
          <span className="status-dot" />
          <span>CASE FILE PP-01</span>
          <span className="status-label">STATUS: ACTIVE</span>
        </div>
      </header>

      <div className="about-divider" />

      <div className="about-grid">
        <aside className="profile-card">
          <div className="profile-name">PARTH PATIL</div>

          <div className="profile-portrait-wrap">
            <div
              className="profile-portrait"
              style={{ backgroundImage: `url(${profileImage})` }}
              aria-label="Profile"
            />
          </div>

          <div className="profile-meta-grid">
            <div className="meta-item">
              <span className="meta-label">CLASS</span>
              <span className="meta-value">B.E. CSE</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">XP_LEVEL</span>
              <span className="meta-value">AI ENGG.</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">LANGS</span>
              <span className="meta-value">EN (Fluent)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">LANG_2</span>
              <span className="meta-value">MAR (Basic)</span>
            </div>
          </div>

          <button className="profile-button">
            <span>OPEN TO INTERNSHIPS | JOBS</span>
          </button>
        </aside>

        <main className="profile-main">
          <div className="report-box">
            <div className="report-header">
              <span className="tag tag-red">COMPETENCE_ANALYSIS_REPORT</span>
              <span className="tag tag-muted">[READ_ONLY]</span>
            </div>

            <p className="summary-line">
              <span>Computer Engineering Student</span> with a strong focus on software engineering and AI development.
              I build practical, scalable solutions and continuously push my learning in <span>full stack</span> and{" "}
              <span>AI engineering</span>.
            </p>
          </div>

          <div className="timeline-block">
            <div className="section-label">// ACADEMIC_LOG [EDUCATION]</div>
            {education.map((item) => (
              <div key={item.label} className="timeline-item">
                <div className="timeline-row">
                  <span className="mini-tag">{item.label}</span>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="timeline-block">
            <div className="section-label">// FIELD_OPERATIONS [EXPERIENCE]</div>
            {experience.map((item) => (
              <div key={`${item.label}-${item.title}`} className="timeline-item">
                <div className="timeline-row">
                  <span className="mini-tag">{item.label}</span>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="status-box">
            <div className="alert-mark"><i class="ri-check-line"></i></div>
            <div className="safe-text">270+ LEETCODE SOLVED PROBLEMS</div>
          </div>
        </main>

        <aside className="profile-sidebar">
          <div className="sidebar-box">
            <div className="sidebar-header">
              <span className="tag tag-red">TECHNICAL_SKILLS</span>
            </div>
            <div className="chip-list">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="sidebar-box">
            <div className="sidebar-header">
              <span className="tag tag-red">INTERESTS</span>
            </div>
            <div className="chip-list soft-list">
              {softSkills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutProfile;
