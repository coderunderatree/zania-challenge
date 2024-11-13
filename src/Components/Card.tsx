import React from "react";

type DragHandler = (e: React.DragEvent<HTMLDivElement>) => void;
interface CardProps {
  title: string;
  imageSrc: string;
  styles: string;
  cardPosition: number;
  onDragStart: DragHandler;
  onDragOver: DragHandler;
  onDrop: DragHandler;
  onDragEnd: () => void;
}
const Card: React.FC<CardProps> = ({
  title,
  imageSrc,
  cardPosition: position,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  styles,
}) => {
  return (
    <div
      data-testid={`card row-${Math.ceil(position / 3)}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`border border-black p-2 text-center rounded-md cursor-grab justify-center ${styles}`}
    >
      <p className="pb-2" data-testid={`card-${position}-title`}>
        {title}
      </p>
      <img
        src={imageSrc}
        alt="thumbnail"
        className="w-fit mx-auto"
        data-testid={`card-${position}-thumbnail`}
      />
    </div>
  );
};

export default Card;
