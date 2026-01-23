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
import networkImg from "@/assets/carousel/network.jpg";
import moldeImg from "@/assets/carousel/molde.png";
import pecasImg from "@/assets/carousel/pecas.png";

const images = [
  { src: injetoraImg, alt: "Máquina injetora de termoplásticos" },
  { src: cadImg, alt: "Software CAD para projetos industriais" },
  { src: networkImg, alt: "Rede global de consultoria" },
  { src: moldeImg, alt: "Molde de injeção de alta precisão" },
  { src: pecasImg, alt: "Peças plásticas injetadas" },
];

const ImageCarousel = () => {
  return (
    <section className="w-full bg-background">
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
              <div className="relative w-full h-[35vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-background/80 hover:bg-background border-none" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-background/80 hover:bg-background border-none" />
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
