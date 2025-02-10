import "./Presentation.css";

function Presentation() {
  return (
    <main id="introducing-main">
      <h1 className="introducing-title"> Alicia Magro </h1>
      <h2 className="introducing-subtitle"> Développeuse web junior</h2>
      <section className="introducing-section">
        <img
          src="./img-presentation/photo-pro.png"
          alt="img profesionnelle Alicia"
          className="introducing-img"
        />
        <p className="introducing-text">
          Bonjour 👋 Moi c'est <b>Alicia</b>, et voici mon histoire en quelques
          lignes...
          <br />
          Avant de me lancer dans le développement web, j’ai exercé en tant qu’
          <b>aide-soignante </b>puis <b>infirmière</b>, principalement en
          psychiatrie. Ce métier m’a apporté une grande richesse humaine, mais
          j’ai fini par ressentir le besoin de changement.
          <br />
          C’est ainsi que j’ai décidé de me tourner vers ma deuxième passion :
          <b> le web</b>. Après un bilan de compétences et un stage d'immersion,
          j’ai confirmé mon choix de devenir <b>développeuse web</b>.
          Aujourd’hui, je mets à profit les compétences que j’ai acquises dans
          mon parcours en santé (esprit d’équipe, capacité d’analyse,
          flexibilité et rigueur) dans ma pratique du développement. Curieuse et
          passionnée, j’apprends chaque jour et m’épanouis dans ce nouveau
          domaine, où je retrouve des valeurs essentielles : collaboration,
          logique et adaptation aux défis quotidiens.
        </p>
      </section>
    </main>
  );
}

export default Presentation;
