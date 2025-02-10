import "./HardSkills.css";

function HardSkills() {
  return (
    <>
      <main id="hard-kills-main">
        <h2 className="hard-skills-title"> Hard Skills</h2>
        <p className="hard-skills-description">
          Aucune compétence n'est acquise sans travail. Voici les compétences
          que j'ai acquises au fil de mes projets personnels et professionnels.
          Des compétences techniques qui sont en constante évolution
        </p>
        <h3 className="hard-skills-subtitle">Front-end</h3>
        <section className="font-end-container">
          <img
            src="./img-hardkills/js.png"
            alt="javascript logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/ts.png"
            alt="javascript logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/react.png"
            alt="javascript logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/html.png"
            alt="html logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/css.png"
            alt="css logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/figma.png"
            alt="figma logo"
            className="hard-skills-logo"
          />
        </section>
        <h3 className="hard-skills-subtitle">Back-end</h3>
        <section className="back-end-container">
          <img
            src="./img-hardkills/nodejs.png"
            alt="node.js logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/express.png"
            alt="express logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/sql.png"
            alt="sql logo"
            className="hard-skills-logo"
          />
          <img
            src="./img-hardkills/mysql.png"
            alt="mysql logo"
            className="hard-skills-logo"
          />
        </section>
      </main>
    </>
  );
}

export default HardSkills;
