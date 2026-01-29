import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import injetoraImg from "@/assets/carousel/injetora.png";
import cadImg from "@/assets/carousel/cad.png";
import networkImg from "@/assets/carousel/network.png";
import moldeImg from "@/assets/carousel/molde.png";
import pecasImg from "@/assets/carousel/pecas.png";
import logoBranco from "@/assets/logoBranco.png";

const images = [
  { src: injetoraImg, alt: "Máquina injetora de termoplásticos" },
  { src: cadImg, alt: "Software CAD para projetos industriais" },
  { src: networkImg, alt: "Rede global de consultoria" },
  { src: moldeImg, alt: "Molde de injeção de alta precisão" },
  { src: pecasImg, alt: "Peças plásticas injetadas" },
];

const ImageCarousel = () => {
  return (
    <section id="inicio" className="w-full bg-background relative pt-32 md:pt-40">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Logo branco fixo sobre o carrossel */}
      <div className="absolute inset-0 flex items-end justify-center pb-1 md:pb-2 pointer-events-none">
        <img 
          src={logoBranco} 
          alt="PRODUTO Consultoria" 
          className="h-52 md:h-72 lg:h-96 w-auto drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default ImageCarousel;
