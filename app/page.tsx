const experience = [
  {
    years: "2024 - Now",
    role: "Senior Software Engineer",
    company: "Trench",
    location: "Atlanta, GA",
    summary:
      "Leading system architecture for an AI-native Linux observability platform built around eBPF telemetry and real-time infrastructure monitoring.",
    highlights: [
      "Architected a high-performance canvas engine for dense, low-latency streaming telemetry.",
      "Designed a modular visualization framework for timelines, event graphs, analytics, and dependency exploration.",
      "Established performance profiling standards across rendering, memory, and real-time workloads.",
    ],
    stack: ["React", "TypeScript", "Go", "Python", "Canvas", "eBPF"],
  },
  {
    years: "2022 - 2023",
    role: "Senior Software Engineer, Playback",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Led architecture for FullStory's next-generation session replay platform and helped set the Playback team's technical direction from its earliest stage.",
    highlights: [
      "Modernized internal frontend infrastructure by migrating legacy frameworks to React.",
      "Unified fragmented replay timing logic into a scalable architecture.",
      "Designed streaming data structures for efficient real-time playback and analysis.",
    ],
    stack: ["React", "TypeScript", "JavaScript", "Streaming Data"],
  },
  {
    years: "2019 - 2022",
    role: "Senior Software Engineer, Web Capture",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Built enterprise analytics and configuration tools while pushing browser performance across FullStory's critical capture paths.",
    highlights: [
      "Delivered real-time user frustration detection for enterprise customers.",
      "Built production configuration preview tooling for safer deployments.",
      "Created browser performance utilities and a JavaScript microbenchmarking framework.",
    ],
    stack: ["JavaScript", "React", "Browser APIs", "Performance"],
  },
  {
    years: "2016 - 2019",
    role: "Software Engineer, Web Capture",
    company: "FullStory",
    location: "Atlanta, GA",
    summary:
      "Contributed to the browser capture platform responsible for recording hundreds of millions of user sessions each year.",
    highlights: [
      "Expanded session replay compatibility for CSS-in-JS applications.",
      "Improved the reliability and scale of client-side resource uploads.",
      "Implemented dynamic, GDPR-compliant privacy controls.",
    ],
    stack: ["JavaScript", "Browser APIs", "Session Replay", "Privacy"],
  },
];

const skills = [
  ["Languages", "Python, TypeScript, Go, JavaScript, C, C++, Java, Bash, PHP, SQL, HTML, CSS"],
  ["Frontend", "React, Canvas UI systems, SPAs, real-time dashboards"],
  ["Backend", "Django, Flask, Node.js, REST APIs, GraphQL, Java, Go, Spring Boot, .NET, gRPC, Kafka, RabbitMQ, Celery, Redis, PostgreSQL, MySQL, MongoDB, Elasticsearch"],
  ["Systems", "Distributed systems, streaming pipelines, event-driven architecture, REST APIs"],
  ["Performance", "Rendering optimization, memory profiling, microbenchmarking"],
  ["Observability", "Session replay, system telemetry, analytics, eBPF"],
  ["Applied AI", "LLM-integrated workflows, assisted analytics, data summarization"],
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
            <p className="role"><span aria-hidden="true">›</span> Senior Software Engineer</p>
            <p className="intro">
              I build the frontend foundations behind complex engineering products - from session replay at global scale to real-time Linux observability powered by eBPF.
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
              <p className="lead">I design high-performance interfaces for systems where every frame, event, and architectural decision matters.</p>
              <p>
                Over the past decade, I&apos;ve worked across browser capture, session replay, streaming data, and observability. At FullStory, I helped evolve a platform serving hundreds of millions of sessions annually. Today at Trench, I lead frontend architecture for AI-powered Linux observability products.
              </p>
              <p>
                My work sits at the boundary between product and deep engineering: translating dense system behavior into responsive, understandable experiences while making the underlying platform easier for teams to extend.
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
          <p>I&apos;m always glad to trade notes on frontend architecture, visualization, performance, or the next hard problem.</p>
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
