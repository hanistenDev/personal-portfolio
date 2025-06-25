
import CookieConsent from "react-cookie-consent"

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="hanistenPortfolioCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ 
        background: "#8B5CF6",
        color: "white",
        fontSize: "13px",
        borderRadius: "6px",
        padding: "8px 16px"
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>
        By continuing to browse the site, you agree to our use of cookies.
      </span>
    </CookieConsent>
  )
}
