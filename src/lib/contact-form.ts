import emailjs from "@emailjs/browser"

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** Must match EmailJS "Contact Us" template variables: name, email, message, title, time */
function buildEmailJsPayload({ name, email, message }: ContactFormValues) {
  return {
    name,
    email,
    message,
    title: name,
    time: new Date().toLocaleString("de-CH", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  }
}

export function isEmailJsConfigured() {
  return Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey)
}

async function submitViaEmailJs(values: ContactFormValues) {
  await emailjs.send(
    emailJsServiceId,
    emailJsTemplateId,
    buildEmailJsPayload(values),
    { publicKey: emailJsPublicKey }
  )
}

async function submitViaNetlifyForms({ name, email, message }: ContactFormValues) {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "contact",
      name,
      email,
      message,
    }).toString(),
  })

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`)
  }
}

export async function submitContactForm(values: ContactFormValues) {
  if (isEmailJsConfigured()) {
    await submitViaEmailJs(values)
    return
  }

  await submitViaNetlifyForms(values)
}
