import Image from "next/image"
import Link from "next/link"
import { FileText, Home, Users, MessageSquare, Clock, Shield, ChevronRight, Phone, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Escribania Barbieri - Servicios Notariales Profesionales",
  description:
    "Servicios notariales de alta calidad en Chivilcoy, Buenos Aires. Escribania Barbieri ofrece escrituras, testamentos, contratos y asesoría legal profesional.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo y nombre pegados a la esquina superior izquierda */}
          <div className="flex items-center gap-2">
            <Image
              src="/imgs/Logo-doble.png"
              alt="Escribania Barbieri Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="text-xl font-bold text-[rgb(28,74,62)]">Escribania Barbieri</span>
          </div>

          {/* Navegación centrada al resto del diseño */}
          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-base font-medium hover:text-[rgb(28,74,62)]">Inicio</Link>
            <Link href="#services" className="text-base font-medium hover:text-[rgb(28,74,62)]">Servicios</Link>
            <Link href="#about" className="text-base font-medium hover:text-[rgb(28,74,62)]">Nosotros</Link>
            <Link href="#contact" className="text-base font-medium hover:text-[rgb(28,74,62)]">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-white px-4 md:px-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[rgb(28,74,62)]">
                  Servicios Notariales Profesionales y Confiables
                </h1>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
                  En Escribania Barbieri ofrecemos servicios notariales de alta calidad con la seguridad jurídica que usted necesita.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                <Image
                  src="/imgs/_MG_3584.jpg"
                  alt="Escribania Barbieri"
                  width={550}
                  height={550}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-4 md:px-8">
          <div className="container mx-auto max-w-screen-xl text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[rgb(28,74,62)]/10 px-3 py-1 text-sm text-[rgb(28,74,62)]">
                Nuestros Servicios
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,74,62)]">
                Servicios Notariales Completos
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-600 text-lg md:text-xl">
                Ofrecemos una amplia gama de servicios notariales para satisfacer todas sus necesidades legales.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                { icon: <Home className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Escrituras de Propiedad", description: "Preparación y certificación de escrituras para transacciones inmobiliarias." },
                { icon: <Users className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Testamentos y Sucesiones", description: "Asesoramiento y tramitación de testamentos y procesos sucesorios." },
                { icon: <FileText className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Contratos y Acuerdos", description: "Redacción y certificación de contratos legales y acuerdos comerciales." },
                { icon: <Shield className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Poderes Legales", description: "Elaboración de poderes generales y especiales para representación legal." },
                { icon: <MessageSquare className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Asesoría Legal", description: "Consultoría jurídica personalizada para personas y empresas." },
                { icon: <Clock className="h-10 w-10 text-[rgb(28,74,62)]" />, title: "Certificaciones", description: "Certificación de documentos, firmas y otros trámites notariales." },
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                  {service.icon}
                  <h3 className="text-xl font-bold text-[rgb(28,74,62)]">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white px-4 md:px-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] order-2 lg:order-1">
                <Image
                  src="/imgs/_MG_3567.jpg"
                  alt="Equipo de Escribania Barbieri"
                  width={550}
                  height={550}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[rgb(28,74,62)]/10 px-3 py-1 text-sm text-[rgb(28,74,62)]">
                  Sobre Nosotros
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,74,62)]">
                  Tradición y Excelencia en Servicios Notariales
                </h2>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
                  Escribania Barbieri se ha consolidado como una referencia en servicios notariales de calidad, combinando profesionalismo, ética y atención personalizada.
                </p>
                <ul className="space-y-2">
                  {[
                    "Equipo de profesionales altamente calificados",
                    "Compromiso con la excelencia y la ética profesional",
                    "Atención personalizada y asesoramiento integral",
                    "Tecnología de vanguardia para procesos eficientes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[rgb(28,74,62)]" />
                      <span className="text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white px-4 md:px-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[rgb(28,74,62)]/10 px-3 py-1 text-sm text-[rgb(28,74,62)]">
                  Contacto
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,74,62)]">
                  ¿Cómo Podemos Ayudarle?
                </h2>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
                  Estamos a su disposición para resolver todas sus consultas y necesidades notariales.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-[rgb(28,74,62)]" /><span className="text-gray-600">+54 2346 559784</span></div>
                  <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-[rgb(28,74,62)]" /><span className="text-gray-600">barbieriescribania@gmail.com</span></div>
                  <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-[rgb(28,74,62)]" /><span className="text-gray-600">Bolivar 432, Chivilcoy, Buenos Aires</span></div>
                  <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-[rgb(28,74,62)]" /><span className="text-gray-600">Lunes a Viernes: 9:00 - 13:00 / 16:00 - 18:00</span></div>
                </div>
              </div>
              <div className="rounded-lg border shadow-sm overflow-hidden h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1776178277404!2d-60.02299492342548!3d-34.89583677339133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bea53c2add6e8d%3A0x8d5c1421eba53f71!2sBolivar%20432%2C%20Chivilcoy!5e0!3m2!1ses!2sar!4v1716242796000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Ubicación de Escribania Barbieri"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/imgs/Logo-doble.png"
              alt="Escribania Barbieri Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-[rgb(28,74,62)]">Escribania Barbieri</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Escribania Barbieri. Todos los derechos reservados.
          </p>
        </div>
      </footer>




      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5492346559784" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" aria-label="Chat on WhatsApp" >
        {/* Option 1: Using Image component (if you have a custom logo) */} {/* <Image src="/imgs/whatsapp-logo.png" alt="WhatsApp" width={40} height={40} /> */} 
        {/* Option 2: Using inline SVG (more reliable) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
