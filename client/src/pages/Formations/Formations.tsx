import "./Formations.css";

function Formations() {
  return (
    <>
      <main id="formations-main">
        <h2 className="formations-title">Mes différentes formations</h2>
        <div className="timeline">
          <div className="start"> </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                {" "}
                <b>Septembre 2024 - Février 2025: </b>
              </p>{" "}
              Formation Développeuse Web et Web Mobile à la Wild Code School
            </div>
          </div>

          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b> Septembre 2016 - Décembre 2019 : </b>{" "}
              </p>
              Institut de Formation en Soins Infirmiers, Croix Rouge de
              Tourcoing.
              <p>Obtention du Diplome d'État en Soins Infirmiers</p>
            </div>
          </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b>Janvier 2016 - Avril 2016 :</b>
              </p>{" "}
              Préparation au concours infirmier au Cours Galien.
            </div>
          </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b> Janvier 2014 - Décembre 2014 :</b>
              </p>{" "}
              Institut de Formation Aide-Soignant du CH de Roubaix.
              <p>Obtention du Diplome d'État Aide-Soignante.</p>
            </div>
          </div>

          <div className="end"> </div>
        </div>
        <h2 className="formations-title2">Mes expériences professionnelles</h2>
        <div className="timeline2">
          <div className="start2"> </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                {" "}
                <b>Février 2024 </b>
              </p>{" "}
              Stage d'immersion avec une équipe de développeurs chez
              <b> KYNDRYL - Euratechnologies</b>
            </div>
          </div>

          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b> Juin 2023 - Septembre 2023 : </b>{" "}
              </p>
              Infirmière Diplômée d'État, à l'Établissement Public de Santé
              Mentale, <em> Armentières. Psychiatie adulte</em>
            </div>
          </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b>Février 2020 - Mai 2023 :</b>
              </p>{" "}
              Infirmière Diplômée d'État, à l'hôpital Saint Jean De Dieu,
              <em> Lyon. Psychiatrie adulte</em>
            </div>
          </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b> Avril - Mai 2015 :</b>
              </p>{" "}
              Aide-soignante à l'EPSM de l'Agglomération Lilloise,
              <em> Saint-André-Lez-Lille. Psychiatrie adulte.</em>
            </div>
          </div>
          <div className="event">
            <div className="point">⚫️</div>
            <div className="description">
              <p>
                <b> Mars 2015 :</b>
              </p>{" "}
              Aide-soignante à l'hôpital Saint Vincent
              <em> Lille</em>
            </div>
          </div>

          <div className="end2"> </div>
        </div>
      </main>
    </>
  );
}

export default Formations;
