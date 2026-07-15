"use client"

import { useState } from "react"
import { MessageCircle, Mail } from "lucide-react"

// Datos de destino — cambialos si hace falta.
// WhatsApp: solo números, con código de país y sin "+". Ej: Argentina móvil 549 + área + número.
const WHATSAPP_NUMBER = "5492346551341"
const EMAIL_DESTINO = "barbieriescribania@gmail.com"

export default function ComentarioForm() {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")

  const inputClass =
    "w-full border-b border-gray-300 bg-transparent py-2 text-sm tracking-wide text-gray-700 placeholder:text-gray-400 focus:border-[rgb(28,74,62)] focus:outline-none"

  const buildBody = () => {
    const lineas = [
      `Nombre: ${nombre || "-"}`,
      `Teléfono: ${telefono || "-"}`,
      `Correo: ${correo || "-"}`,
      "",
      "Comentario:",
      mensaje || "-",
    ]
    return lineas.join("\n")
  }

  const enviarWhatsApp = () => {
    const texto = `Hola, quiero dejar un comentario:\n\n${buildBody()}`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    )
  }

  const enviarMail = () => {
    const asunto = "Comentario desde la web"
    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(buildBody())}`
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-lg">
        Si ya estuviste, dejanos tu comentario para poder mejorar tu experiencia.
      </p>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="NOMBRE"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={inputClass}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <input
            type="tel"
            placeholder="TELÉFONO"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            placeholder="CORREO"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={inputClass}
          />
        </div>
        <textarea
          placeholder="MENSAJE"
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className={`${inputClass} resize-none`}
        ></textarea>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={enviarWhatsApp}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1ebe57]"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
          <button
            type="button"
            onClick={enviarMail}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[rgb(28,74,62)] px-6 py-3 font-medium text-white transition-colors hover:bg-[rgb(28,74,62)]/90"
          >
            <Mail className="h-5 w-5" />
            Enviar por Mail
          </button>
        </div>
      </form>
    </div>
  )
}
