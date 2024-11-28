export default function Home() {
  return (
    <div className="layout">
      <header className="hero subtle-gradient">
        <h1>Research Polar</h1>
        <h2 className="sub-heading">Exploring the Frontiers of AI-Driven Research</h2>
        <p className="elegant-text">
          Discover the power of AI in polar research, where every insight is crafted by advanced algorithms.
        </p>
      </header>

      <main className="main-content">
        <section>
          <h2>AI-Powered Innovation</h2>
          <p>
            Our platform leverages cutting-edge AI to analyze and interpret polar data, offering unprecedented insights into climate patterns and ecosystems.
          </p>
          <p className="subtle-note">
            All content is generated and curated by AI systems, ensuring a unique perspective on polar research.
          </p>
        </section>

        <section>
          <h2>Research Focus</h2>
          <div className="minimal-grid">
            <div className="card">Polar Ecosystems</div>
            <div className="card">Climate Patterns</div>
            <div className="card">Ice Formation Studies</div>
            <div className="card">Environmental Impact</div>
          </div>
        </section>

        <section className="transparency">
          <h3>AI Transparency</h3>
          <p>
            We are committed to transparency about AI's role in this platform. 
            Each element you see is a result of AI generation, 
            allowing us to explore new possibilities in research presentation.
          </p>
        </section>
      </main>

      <footer>
        <small>
          An experiment in AI-generated research platforms • 
          Content and design by artificial intelligence
        </small>
      </footer>
    </div>
  );
}