import { Award, Handshake, Building2 } from "lucide-react"

export default function Numeros() {
  return (
    <section
      id="numeros"
      className="bg-brand-gray-light py-16 border-y border-slate-100 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/85 max-w-5xl mx-auto">
          {/* Block 1: 30+ anos */}
          <div className="flex flex-col items-center text-center pb-8 md:pb-0 md:px-6">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red mb-4">
              <Award className="size-6" />
            </div>
            <span className="text-4xl md:text-5xl font-black text-brand-red tracking-tight">
              30+ anos
            </span>
            <p className="text-brand-navy font-bold text-base md:text-lg mt-3">
              De tradição em Taquarituba
            </p>
            <p className="text-brand-gray-text text-sm max-w-xs mt-1">
              Atendimento humano e próximo, consolidado por mais de três décadas de história.
            </p>
          </div>

          {/* Block 2: +15 Corretoras parceiras */}
          <div className="flex flex-col items-center text-center py-8 md:py-0 md:px-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy mb-4">
              <Handshake className="size-6" />
            </div>
            <span className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight">
              +15
            </span>
            <p className="text-brand-navy font-bold text-base md:text-lg mt-3">
              Corretoras parceiras
            </p>
            <p className="text-brand-gray-text text-sm max-w-xs mt-1">
              As principais do país trabalhando com a gente.
            </p>
          </div>

          {/* Block 3: +150 Empresas protegidas */}
          <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red mb-4">
              <Building2 className="size-6" />
            </div>
            <span className="text-4xl md:text-5xl font-black text-brand-red tracking-tight">
              +150
            </span>
            <p className="text-brand-navy font-bold text-base md:text-lg mt-3">
              Empresas protegidas
            </p>
            <p className="text-brand-gray-text text-sm max-w-xs mt-1">
              Confiança de negócios da nossa região.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
