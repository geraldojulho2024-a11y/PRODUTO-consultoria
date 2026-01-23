import abinferLogo from "@/assets/abinfer.png";
import conectamaisLogo from "@/assets/conectamais.png";

const PartnerSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Abinfer */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img 
              src={abinferLogo} 
              alt="ABINFER - Associação Brasileira da Indústria de Ferramentais" 
              className="h-24 object-contain"
            />
            <p className="text-lg font-semibold text-foreground text-center md:text-left">
              Empresa associada na Abinfer
            </p>
          </div>

          {/* Conecta Mais */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img 
              src={conectamaisLogo} 
              alt="Conecta Mais Ferramentarias - Fundep" 
              className="h-24 object-contain"
            />
            <p className="text-lg font-semibold text-foreground text-center md:text-left">
              Empresa cadastrada no Conecta Mais - Fundep como Fornecedora e como Assessora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
