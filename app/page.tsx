const experience = [
  {
    years: "2024 - Now",
    role: "Senior Software Engineer",
    company: "Trench",
    location: "Atlanta, GA",
    summary:
      "Leading backend-focused full-stack architecture and systems integration for an AI-native Linux observability platform powered by eBPF telemetry.",
    highlights: [
      "Design Go and Python services that ingest, normalize, and process high-frequency telemetry from distributed Linux environments.",
      "Define data contracts and event-driven pipelines spanning eBPF collectors, Kafka, backend services, APIs, and analytical applications.",
      "Deploy and operate containerized services on AWS with Kubernetes, PostgreSQL, Redis, and automated CI/CD workflows.",
    ],
    stack: ["Go", "Python", "AWS", "Kubernetes", "Kafka", "eBPF"],
  },
  {
    years: "2022 - 2023",
    role: "Senior Software Engineer, Playback",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Led backend-focused full-stack architecture for FullStory's next-generation session replay platform as the Playback team's first engineer.",
    highlights: [
      "Defined foundational service boundaries, engineering standards, and long-term platform priorities.",
      "Designed streaming workflows and Kafka-based event-processing patterns for session reconstruction and analysis.",
      "Built backend services and APIs while unifying replay timing into a scalable incremental-delivery architecture.",
    ],
    stack: ["Python", "TypeScript", "AWS", "Kubernetes", "PostgreSQL", "Kafka"],
  },
  {
    years: "2019 - 2022",
    role: "Senior Software Engineer, Web Capture",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Developed backend-focused full-stack capabilities for real-time behavioral analytics and enterprise session intelligence.",
    highlights: [
      "Designed high-volume event-processing workflows and Kafka pipelines for downstream analytics services.",
      "Built Python and TypeScript services for configuration, analytics, and capture-platform operations.",
      "Created browser-performance utilities and a JavaScript microbenchmarking framework for critical execution paths.",
    ],
    stack: ["Python", "TypeScript", "Kafka", "AWS", "Browser APIs", "Performance"],
  },
  {
    years: "2016 - 2019",
    role: "Software Engineer, Web Capture",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Contributed to the browser capture platform responsible for recording hundreds of millions of user sessions each year.",
    highlights: [
      "Designed reliable client-side resource upload and data-transfer mechanisms.",
      "Expanded session replay compatibility for CSS-in-JS applications.",
      "Implemented dynamic, GDPR-compliant privacy controls based on user consent.",
    ],
    stack: ["JavaScript", "Browser APIs", "Session Replay", "Privacy"],
  },
];

const skills = [
  ["Languages", "Go, Python, TypeScript, JavaScript, SQL"],
  ["Cloud", "AWS, Kubernetes, Docker, containerized services, production operations"],
  ["Backend", "FastAPI, Django, Flask, Node.js, REST APIs, microservices"],
  ["Data", "PostgreSQL, Redis, Kafka, relational modeling, event streaming"],
  ["Systems", "Distributed systems, streaming pipelines, event-driven architecture, CI/CD"],
  ["Observability", "eBPF, Linux telemetry, session replay, incident analysis"],
  ["Full Stack", "React, browser APIs, real-time dashboards, Canvas visualization"],
  ["Applied AI", "AI-assisted incident analysis, LLM workflows, telemetry summarization"],
];

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="handle" href="#home" aria-label="Benjamin Dean, home">
            @bsinky
          </a>
          <nav aria-label="Primary navigation">
            <a href="#home">_home</a>
            <a href="#about">_about-me</a>
            <a href="#experience">_experience</a>
            <a href="#contact">_contact-me</a>
          </nav>
          <span className="availability"><i /> open to conversations</span>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hi. I am</p>
            <h1>Benjamin Dean</h1>
            <p className="role"><span aria-hidden="true">›</span> Backend-Focused Senior Software Engineer</p>
            <p className="intro">
              I design distributed systems, cloud-native services, and high-performance applications - from session replay at global scale to real-time Linux observability powered by eBPF.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">Explore Experience</a>
              <a className="button" href="mailto:ben.dean0518@gmail.com">Start a Conversation</a>
            </div>
          </div>

          <div className="signal" aria-label="Abstract live telemetry visualization">
            <div className="signal-ring ring-one" />
            <div className="signal-ring ring-two" />
            <div className="signal-ring ring-three" />
            <div className="signal-axis horizontal" />
            <div className="signal-axis vertical" />
            <div className="initials">BD</div>
            <span className="pulse p1" /><span className="pulse p2" /><span className="pulse p3" />
          </div>
        </section>

        <div className="statusbar" aria-hidden="true">
          <span>10+ years building for the browser</span>
          <span>ATL / EST</span>
          <span>systems online</span>
        </div>

        <section className="section about" id="about">
          <div className="section-heading">
            <p>01 / profile</p>
            <h2>About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I design backend systems and full-stack products where every event, service boundary, and architectural decision matters.</p>
              <p>
                Over the past decade, I&apos;ve worked across distributed systems, browser capture, session replay, streaming data, and observability. At FullStory, I helped evolve a platform serving hundreds of millions of sessions annually. Today at Trench, I lead backend-facing application architecture and systems integration for an AI-native Linux observability platform.
              </p>
              <p>
                My work spans telemetry ingestion, event-driven processing, cloud infrastructure, APIs, and analytical interfaces - turning dense system behavior into reliable platforms and understandable product experiences.
              </p>
            </div>
            <div className="skills-panel">
              <p className="code-label">const expertise = &#123;</p>
              {skills.map(([label, value]) => (
                <div className="skill-row" key={label}>
                  <span>{label}</span>
                  <p>{value}</p>
                </div>
              ))}
              <p className="code-label closing">&#125;;</p>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading">
            <p>02 / career</p>
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="job" key={`${job.company}-${job.years}`}>
                <div className="job-index">0{index + 1}</div>
                <div className="job-date">{job.years}</div>
                <div className="job-main">
                  <div className="job-title-row">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company">{job.company} <span>/ {job.location}</span></p>
                    </div>
                    <span className="status">completed</span>
                  </div>
                  <p className="job-summary">{job.summary}</p>
                  <ul>
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="tags">
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="early-career">
            <p>Earlier signal</p>
            <div><span>2015</span><strong>Google</strong><small>Software Engineering Intern</small></div>
            <div><span>2014</span><strong>Evernote</strong><small>Software Engineering Intern</small></div>
            <div><span>2012 - 2013</span><strong>LogicBlox</strong><small>Software Intern</small></div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="section-heading">
            <p>03 / foundation</p>
            <h2>Education</h2>
          </div>
          <div className="degree">
            <span>2012 - 2016</span>
            <div><h3>Emory University</h3><p>Bachelor of Science, Mathematics and Computer Science</p></div>
            <div className="degree-mark">E</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">04 / contact</p>
          <h2>Let&apos;s make complex systems<br />feel <em>effortless.</em></h2>
          <p>I&apos;m always glad to trade notes on distributed systems, observability, streaming architecture, performance, or the next hard problem.</p>
          <a className="email-link" href="mailto:ben.dean0518@gmail.com">ben.dean0518@gmail.com <span>↗</span></a>
          <div className="socials">
            <a href="https://linkedin.com/in/ben-dean-a027ac31" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/bsinky" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="tel:+14707627935">+1 470 762 7935</a>
          </div>
        </section>

        <footer>
          <a href="#home">@bsinky</a>
          <p>Benjamin Dean · Senior Software Engineer · Atlanta, GA</p>
          <a href="#home">back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
