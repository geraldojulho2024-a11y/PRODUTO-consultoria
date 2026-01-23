import abinferLogo from "@/assets/abinfer.png";

const PartnerSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img 
            src={abinferLogo} 
            alt="ABINFER - Associação Brasileira da Indústria de Ferramentais" 
            className="h-24 object-contain"
          />
          <p className="text-lg font-semibold text-foreground">
            Empresa associada na Abinfer
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
