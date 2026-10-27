import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Ourlets",
    description:
      "Pantalon, robe, jupe ou manteau : une longueur ajustée et des finitions propres.",
    detail: "Ourlet simple · invisible · rideaux",
  },
  {
    number: "02",
    title: "Fermetures",
    description:
      "Remplacement de fermeture sur pantalon, jupe, robe, manteau ou veste.",
    detail: "Réparation et remplacement",
  },
  {
    number: "03",
    title: "Réparations",
    description:
      "Accrocs, trous, boutons : prolongez la vie de vos vêtements avec une retouche soignée.",
    detail: "Petites réparations du quotidien",
  },
];

const prices = [
  { name: "Ourlet simple pantalon", price: "10 €" },
  { name: "Ourlet invisible main", price: "12 €" },
  { name: "Ourlet robe / jupe / manteau", price: "10 à 25 €" },
  { name: "Fermeture pantalon / jupe / robe", price: "17 €" },
  { name: "Fermeture manteau / veste", price: "17 à 35 €" },
  { name: "Accroc / trou", price: "5 à 20 €" },
  { name: "Bouton", price: "2 €" },
  { name: "Prénom brodé", price: "10 €" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Cham'élo Couture, accueil">
          <Image src="/logo.png" alt="" width={64} height={64} priority />
          <span>Cham&apos;élo <i>Couture</i></span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#cours">Prestations</a>
          <a href="#realisations">Réalisations</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#contact" className="nav-cta">Me contacter <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Atelier de couture &amp; retouches · Châlons-en-Champagne</p>
          <h1>Vos vêtements<br />bien <em>ajustés.</em></h1>
          <p className="hero-intro">
            Offrez une seconde vie à vos vêtements. Cham&apos;élo Couture réalise des retouches
            soignées et durables, avec des finitions professionnelles et le souci du détail.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-dark">Demander une retouche <span aria-hidden="true">↗</span></a>
            <a href="#tarifs" className="text-link">Voir les tarifs <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span className="note-star">✳</span><span>Expertise, passion &amp; savoir-faire<br />pour des retouches durables.</span></div>
        </div>
        <div className="hero-art" aria-label="Univers Cham'élo Couture">
          <div className="art-blob" />
          <div className="hero-portrait">
            <Image src="/images/perfecto-cousu.jpg" alt="La couturière porte un perfecto cousu à l'atelier" fill priority sizes="(max-width: 640px) 80vw, 360px" className="hero-portrait-image" />
            <div className="portrait-caption"><span>Une pièce cousue à l&apos;atelier</span><strong>Le perfecto Cham&apos;élo</strong></div>
            <div className="portrait-stamp"><Image src="/logo.png" alt="" width={100} height={100} /></div>
          </div>
          <span className="art-stitch stitch-one" aria-hidden="true">✳</span>
          <span className="art-stitch stitch-two" aria-hidden="true">✳</span>
          <span className="art-thread" aria-hidden="true" />
        </div>
        <div className="hero-bottom"><span>01 — 03</span><span>FAIT MAIN, AVEC LE CŒUR</span><a href="#cours" aria-label="Défiler vers les cours">↓</a></div>
      </section>

      <section className="intro-strip" aria-label="Notre approche">
        <p>Un vêtement bien ajusté, c&apos;est <em>l&apos;assurance d&apos;être bien.</em> Des retouches soignées pour garder ce que vous aimez.</p>
        <span className="strip-flower" aria-hidden="true">✿</span>
      </section>

      <section className="gallery section-wrap" id="realisations">
        <div className="section-heading gallery-heading">
          <div><p className="eyebrow">Du travail, du fil et des idées</p><h2>Quelques pièces<br />sorties de <em>l&apos;atelier.</em></h2></div>
          <p className="section-aside">De la confection d&apos;un perfecto à une broderie personnalisée, voici un aperçu de mon savoir-faire.</p>
        </div>
        <div className="gallery-grid">
          <article className="gallery-card gallery-feature">
            <Image src="/images/perfecto-cousu.jpg" alt="Perfecto camel cousu à l'atelier, porté par sa créatrice" width={1368} height={1824} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 38vw" />
            <div className="gallery-label"><span>Confection · pièce unique</span><h3>Le perfecto cousu main</h3></div>
          </article>
          <article className="gallery-card">
            <Image src="/images/poche-passepoilee.jpg" alt="Détail de la poche passepoilée du perfecto camel" width={1368} height={1824} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 27vw" />
            <div className="gallery-label"><span>Finition technique</span><h3>Poche passepoilée</h3></div>
          </article>
          <article className="gallery-card">
            <Image src="/images/prenom-brode.jpg" alt="Prénom Emma brodé sur un doudou lapin" width={1368} height={1824} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 27vw" />
            <div className="gallery-label"><span>Broderie personnalisée · 10 €</span><h3>Un prénom tout doux</h3></div>
          </article>
          <article className="gallery-card gallery-machine">
            <Image src="/images/broderie-machine.jpg" alt="Broderie en cours sur la machine à broder" width={1368} height={1824} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 27vw" />
            <div className="gallery-label"><span>À la machine</span><h3>Chaque détail compte</h3></div>
          </article>
        </div>
      </section>

      <section className="services section-wrap" id="cours">
        <div className="section-heading">
          <div><p className="eyebrow">Des retouches sur mesure</p><h2>Je prends soin<br />de vos <em>vêtements.</em></h2></div>
          <p className="section-aside">Du pantalon aux rideaux, chaque pièce est travaillée avec soin, des conseils personnalisés et des matériaux adaptés.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <span className="service-icon" aria-hidden="true">{service.number === "01" ? "⌁" : service.number === "02" ? "✳" : "⌖"}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-detail">{service.detail}</span>
            </article>
          ))}
        </div>
        <div className="services-foot"><span className="foot-dash" />Une retouche particulière ? <a href="#contact">Parlons-en <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="price-section" id="tarifs">
        <div className="price-inner">
          <div className="price-copy"><p className="eyebrow">Des tarifs transparents</p><h2>Les petits<br />prix du <em>fait-main.</em></h2><p>Les tarifs peuvent varier selon le vêtement et le travail à réaliser. Contactez-moi pour un devis précis.</p><span className="price-sparkle" aria-hidden="true">✳</span></div>
          <div className="price-card">
            <p className="price-card-label">TARIFS DES RETOUCHES</p>
            <div className="price-list">{prices.map((item) => <div className="price-row" key={item.name}><h3>{item.name}</h3><strong>{item.price}</strong></div>)}</div>
            <div className="curtain-price"><strong>Rideaux · ourlet au mètre linéaire</strong><span>Sans doublure <b>8 € / m</b></span><span>Avec doublure <b>12 € / m</b></span></div>
            <div className="price-notice"><strong>Délais &amp; urgences</strong><span>Travaux sous une semaine pour une retouche simple (délais variables selon le volume).</span><b>+30 % pour un travail urgent</b></div>
            <p className="price-footnote">Broderies personnalisées au-delà du prénom : sur devis. Les tarifs de retouche peuvent varier selon la pièce et le travail ; un devis vous sera confirmé avant intervention.</p>
            <a href="#contact" className="button button-dark">Demander un devis <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="price-decoration" aria-hidden="true">✳</div>
      </section>

      <section className="credentials section-wrap" aria-labelledby="credentials-title">
        <div className="credential-heading"><p className="eyebrow">Expertise &amp; diplômes</p><h2 id="credentials-title">Un savoir-faire <em>reconnu.</em></h2><div className="credential-facts"><span><strong>2021</strong> année de création</span><span><strong>2 CAP</strong> métiers de la mode</span></div><p>Depuis la création de Cham&apos;élo Couture, je mets mes diplômes et mon expérience au service de retouches précises, soignées et durables.</p></div>
        <div className="diploma-grid"><article className="diploma"><span className="diploma-year">2022</span><p>CAP MÉTIERS DE LA MODE</p><h3>Couture flou</h3><em>Mention Très Bien</em></article><article className="diploma"><span className="diploma-year">2026</span><p>CAP MÉTIERS DE LA MODE</p><h3>Couture tailleur</h3><em>Mention Assez Bien</em></article></div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-copy"><p className="eyebrow">Une retouche en tête ?</p><h2>Confiez-moi<br /><em>votre pièce.</em></h2><p>Décrivez-moi le vêtement et la retouche souhaitée. Je vous répondrai avec plaisir pour convenir de la suite.</p>
          <div className="contact-details"><a href="tel:+33677210886"><span className="detail-icon">↗</span><span>Un petit coup de fil<strong>06 77 21 08 86</strong></span></a><a href="mailto:elodie51@chamelocouture.fr"><span className="detail-icon">✉</span><span>Ou un email<strong>elodie51@chamelocouture.fr</strong></span></a><div className="address-line"><span className="detail-icon">⌖</span><span>Retrouvez l&apos;atelier<strong>127 avenue de Paris, Centre Jacqueson<br />51000 Châlons-en-Champagne</strong></span></div></div>
        </div>
        <form className="contact-form" action="mailto:elodie51@chamelocouture.fr" method="post" encType="text/plain">
          <div className="form-row"><label>Votre prénom<input name="Prénom" type="text" placeholder="Comment vous appeler ?" required /></label><label>Votre email<input name="Email" type="email" placeholder="vous@exemple.fr" required /></label></div>
          <label>Type de retouche<select name="Sujet" defaultValue=""><option value="" disabled>Choisir une retouche</option><option>Ourlet</option><option>Fermeture</option><option>Accroc ou trou</option><option>Bouton</option><option>Rideaux</option><option>Autre retouche</option></select></label>
          <label>Parlez-moi de votre vêtement<textarea name="Message" rows={4} placeholder="Type de vêtement, retouche souhaitée, délai…" required /></label>
          <button className="button button-dark" type="submit">Demander un devis <span aria-hidden="true">↗</span></button>
          <p className="form-note">Votre logiciel de messagerie s&apos;ouvrira pour envoyer le message.</p>
        </form>
      </section>

      <footer className="site-footer"><a className="footer-brand" href="#accueil">Cham&apos;élo <i>Couture</i></a><span>Retouches soignées &amp; durables.</span><a href="https://www.facebook.com/chamelocouture" target="_blank" rel="noreferrer">Facebook ↗</a><span className="copyright">© {new Date().getFullYear()} Cham&apos;élo Couture</span></footer>
    </main>
  );
}
