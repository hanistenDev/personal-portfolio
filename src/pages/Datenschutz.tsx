import { LegalPageLayout } from "@/components/legal-page-layout"

const Datenschutz = () => {
  return (
    <LegalPageLayout title="Datenschutz">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Verantwortliche Person</h2>
        <p>
          Hanisten Thivakaran
          <br />
          Zürich, Schweiz
          <br />
          Website:{" "}
          <a href="https://hanisten.dev" className="text-violet hover:text-violet-dark transition-colors">
            https://hanisten.dev
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Allgemeines</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung informiert
          Sie darüber, welche Daten auf dieser Website verarbeitet werden und zu welchem Zweck.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Hosting</h2>
        <p>
          Diese Website wird bei Netlify gehostet. Beim Aufruf der Website können technische
          Informationen wie IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Zeitpunkt des
          Zugriffs in Server-Logdateien verarbeitet werden. Diese Verarbeitung dient der
          Bereitstellung und Sicherheit der Website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Kontaktformular</h2>
        <p>
          Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten verarbeitet
          (Name, E-Mail-Adresse und Nachricht). Diese Daten werden ausschliesslich zur Bearbeitung
          Ihrer Anfrage verwendet und über Netlify Forms übermittelt.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage Ihrer Anfrage bzw. meines berechtigten Interesses
          an der Beantwortung von Kontaktanfragen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Cookies und Tracking</h2>
        <p>
          Diese Website verwendet keine Analyse- oder Marketing-Tools von Drittanbietern. Es werden
          lediglich technisch notwendige Einstellungen gespeichert, etwa Ihre Theme-Präferenz
          (Hell/Dunkel) im lokalen Speicher Ihres Browsers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites (z. B. GitHub, LinkedIn oder Projektseiten).
          Für die Datenverarbeitung auf diesen externen Seiten gelten deren jeweilige
          Datenschutzbestimmungen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf Auskunft, Berichtigung,
          Löschung sowie Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Für Anfragen
          können Sie das Kontaktformular auf der Startseite verwenden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Stand</h2>
        <p>Juni 2026</p>
      </section>
    </LegalPageLayout>
  )
}

export default Datenschutz
