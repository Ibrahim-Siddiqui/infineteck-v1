"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div className="flex-col my-8">
      <div className="text-xl text-center md:text-2xl font-medium bg-clip-text text-transparent py-4 ">
        {card.title}
      </div>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <PhotoView key={card.id} src={card.src}>
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-contain absolute inset-0 cursor-pointer"
          />
        </PhotoView>
        {/* <div
       className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
        )}
        > */}
        {/* </div> */}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: number;
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  loadMore,
}: {
  cards: Card[];
  loadMore: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 max-w-7xl mx-auto md:px-8 w-full">
      <PhotoProvider>
        {cards.map((card) =>
          !loadMore && card.id > 3 ? (
            <React.Fragment key={card.id}></React.Fragment>
          ) : (
            <React.Fragment key={card.id}>
              <Card
                card={card}
                index={card.id}
                hovered={hovered}
                setHovered={setHovered}
              />
            </React.Fragment>
          )
        )}
      </PhotoProvider>
    </div>
  );
}
