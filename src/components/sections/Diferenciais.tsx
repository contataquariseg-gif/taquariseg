import { Users, Award, Handshake } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "Atendimento profissional",
    description: "Você conversa com quem conhece você e a região.",
  },
  {
    icon: Award,
    title: "30+ anos de tradição",
    description: "Décadas ajudando famílias e empresas de Taquarituba.",
  },
  {
    icon: Handshake,
    title: "Melhores seguradoras",
    description: "Trabalhamos com as principais do país.",
  },
]

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="bg-gradient-to-r from-brand-red to-brand-red-dark py-20 md:py-24 scroll-mt-20"
      aria-labelledby="diferenciais-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col mb-12 md:mb-16 items-center text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 bg-[#1E3A8A] rounded-full w-fit">
            Por que Taquariseg
          </span>
          <h2
            id="diferenciais-title"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight"
          >
            O que faz a diferença no nosso atendimento
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-200/60 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-[#FEE2E2] text-brand-red flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5 shrink-0" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-gray-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
