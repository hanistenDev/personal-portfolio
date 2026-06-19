import { LegalPageLayout } from "@/components/legal-page-layout"

const Impressum = () => {
  return (
    <LegalPageLayout title="Impressum">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Verantwortlich für den Inhalt</h2>
        <p>
          Hanisten Thivakaran
          <br />
          Zürich
          <br />
          Schweiz
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
        <p>
          Website:{" "}
          <a href="https://hanisten.dev" className="text-violet hover:text-violet-dark transition-colors">
            https://hanisten.dev
          </a>
        </p>
        <p>
          Für Anfragen können Sie das{" "}
          <a href="/#contact" className="text-violet hover:text-violet-dark transition-colors">
            Kontaktformular
          </a>{" "}
          auf der Startseite verwenden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
        <p>
          Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Externe Links werden zum Zeitpunkt der Verlinkung geprüft;
          für deren Inhalte übernehme ich keine Haftung.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen
          Urheberrecht. Jede Vervielfältigung, Bearbeitung oder Verbreitung bedarf der vorherigen
          schriftlichen Zustimmung des jeweiligen Autors.
        </p>
      </section>
    </LegalPageLayout>
  )
}

export default Impressum
