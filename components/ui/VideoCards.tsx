"use client";

import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

export const Card = React.memo(
  ({
    card,
  }: {
    card: Card;
    index: number;
  }) => (
    <div className="relative overflow-hidden pb-[56.25%] h-0">
      <MediaPlayer title={card.title} src={`youtube/${card.src}`}>
        <MediaProvider />
        <PlyrLayout
          // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={plyrLayoutIcons}
        />
      </MediaPlayer>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: number;
  title: string;
  src: string;
};

export function VideoCards({
  cards,
  loadMore,
}: {
  cards: Card[];
  loadMore: boolean;
}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card) =>
        !loadMore && card.id > 4 ? (
          <React.Fragment key={card.id}></React.Fragment>
        ) : (
          <Card
            key={card.id}
            card={card}
            index={card.id}
          />
        )
      )}
    </div>
  );
}
