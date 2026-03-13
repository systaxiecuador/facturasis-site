import { ContactForm } from "@/components/contact-form";

const services = [
  {
    title: "Desarrollo de Software",
    description: "Soluciones personalizadas para empresas que necesitan procesos mas agiles, medibles y conectados.",
  },
  {
    title: "Facturación Electrónica",
    description: "Sistemas alineados con la normativa fiscal para emitir, controlar y automatizar comprobantes.",
  },
  {
    title: "Sistemas POS",
    description: "Operaciones de venta fluidas para comercios, agencias, restaurantes y empresas con mejor experiencia en caja.",
  },
  {
    title: "Control de Inventarios",
    description: "Gestión inteligente de productos, movimientos y stock para tomar decisiones con datos claros.",
  },
  {
    title: "Transformación Digital",
    description: "Digitalización de procesos empresariales para escalar con orden, rapidez y menos fricción.",
  },
  {
    title: "Innovación Tecnológica",
    description: "Integración de herramientas, automatizaciones y nuevas capacidades para elevar la productividad.",
  },
];

const benefits = [
  "Automatización de procesos",
  "Control total del negocio",
  "Reducción de errores operativos",
  "Acceso desde cualquier lugar",
  "Tecnología escalable",
];

const audiences = ["Comercios", "Empresas", "Emprendedores", "Restaurantes", "Cafeterias", "Cadenas"];

const stats = [
  { value: "24/7", label: "visión operativa para tu negocio" },
  { value: "360°", label: "integración entre ventas, inventario y facturación" },
  { value: "100%", label: "orientado a procesos digitales y escalables" },
];

const contactItems = [
  {
    label: "Ubicación",
    value: "Cuenca - Ecuador",
    href: "https://www.google.com/maps/place/Cuenca,+Ecuador",
  },
  { label: "Teléfono", value: "+593984256908", href: "tel:+593984256908" },
  { label: "WhatsApp", value: "+593984256908", href: "https://wa.me/593984256908" },
  { label: "Email", value: "info@facturasis.shop", href: "mailto:info@facturasis.shop" },
];

const whatsappLink =
  "https://wa.me/593984256908?text=Hola,%20quiero%20información%20sobre%20soluciones%20de%20software%20que%20automaticen%20mi%20negocio%20con%20Facturasis.";

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Facturasis",
            url: "https://facturasis.shop",
            email: "info@facturasis.shop",
            telephone: "+593984256908",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cuenca",
              addressCountry: "EC",
            },
            sameAs: ["https://wa.me/593984256908"],
          }),
        }}
      />

      <section className="hero-section">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Tecnología empresarial para crecer con orden
          </div>
          <h1>Transformamos negocios con tecnología.</h1>
          <p className="hero-text">
            Desarrollamos software, soluciones POS, facturación electrónica y herramientas de
            transformación digital para empresas modernas que necesitan avanzar más rápido,
            medible y escalable.
          </p>
          <div className="hero-actions">
            <a className="cta-primary" href="#contacto">
              Solicitar información
            </a>
            <a className="cta-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-grid">
              <article className="glass-panel">
                <p>POS en tiempo real</p>
                <strong>Ventas sincronizadas</strong>
                <div className="mini-bars">
                  <span className="bar bar-1" />
                  <span className="bar bar-2" />
                  <span className="bar bar-3" />
                </div>
              </article>
              <article className="glass-panel accent-panel">
                <p>Facturación electrónica</p>
                <strong>Documentos listos y trazables</strong>
              </article>
              <article className="glass-panel wide-panel">
                <p>Inventario + automatización</p>
                <strong>Procesos conectados para operar sin fricciones</strong>
                <div className="signal-line">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section reveal" id="nosotros">
        <div className="section-heading">
          <span>Sobre Facturasis</span>
          <h2>Una empresa tecnológica enfocada en la operación moderna de tu negocio.</h2>
        </div>
        <div className="about-grid">
          <p>
            Facturasis ayuda a comercios, agencias, restaurantes, cafeterias y emprendedores a
            modernizar su operación con herramientas digitales pensadas para vender mejor,
            controlar mas y crecer con confianza.
          </p>
          <p>
            Combinamos software empresarial, automatización y una ejecución clara para que cada
            proceso sea mas rápido, medible y escalable.
          </p>
        </div>
      </section>

      <section className="content-section" id="servicios">
        <div className="section-heading reveal">
          <span>Servicios</span>
          <h2>Capacidades digitales diseñadas para negocios que quieren avanzar.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              key={service.title}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="service-icon">{`0${index + 1}`.slice(-2)}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="benefits-panel reveal">
          <div className="section-heading left">
            <span>Beneficios</span>
            <h2>Menos tareas manuales. Mas control. Mejor capacidad de decisión.</h2>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <div className="benefit-icon">
                  <span />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="audience-panel reveal reveal-delay">
          <div className="section-heading left">
            <span>Soluciones para negocios</span>
            <h2>Flexible para cada modelo operativo.</h2>
          </div>
          <div className="audience-cloud">
            {audiences.map((audience) => (
              <span className="audience-pill" key={audience}>
                {audience}
              </span>
            ))}
          </div>
          <p className="audience-note">
            Adaptamos la tecnología a la forma en la que tu negocio vende, factura, controla y se
            organiza.
          </p>
        </div>
      </section>

      <section className="cta-band reveal">
        <div>
          <span className="section-kicker">Digitaliza tu operación</span>
          <h2>Listo para digitalizar tu negocio?</h2>
          <p>
            Conversemos sobre el flujo que hoy te hace perder tiempo y transformemoslo en una
            ventaja competitiva.
          </p>
        </div>
        <a className="cta-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Solicitar información por WhatsApp
        </a>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-copy reveal">
          <div className="section-heading left">
            <span>Contacto</span>
            <h2>Hablemos de la siguiente versión digital de tu negocio.</h2>
          </div>
          <div className="contact-list">
            {contactItems.map((item) => (
              <a className="contact-item" href={item.href} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay">
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Facturasis</strong>
          <p>Software · Innovación · Transformación Digital</p>
        </div>
        <div>
          <p>+593984256908</p>
          <p>info@facturasis.shop</p>
        </div>
        <div>
          <p>Cuenca - Ecuador</p>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.57 2 2.13 6.43 2.13 11.9c0 1.75.46 3.46 1.32 4.96L2 22l5.28-1.38a9.84 9.84 0 0 0 4.73 1.21h.01c5.45 0 9.89-4.43 9.89-9.9 0-2.64-1.03-5.12-2.86-6.99Zm-7.03 15.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.27-4.37c0-4.54 3.69-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.4 5.83c0 4.55-3.7 8.23-8.22 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.13-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.26-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}
