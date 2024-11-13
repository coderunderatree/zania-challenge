import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { CatApiResponse } from "../types";

type DragHandler = (e: React.DragEvent<HTMLDivElement>) => void;
interface CardProps {
  isDragging: boolean;
  title: string;
  cardPosition: number;
  onDragStart: DragHandler;
  onDragOver: DragHandler;
  onDrop: DragHandler;
  onDragEnd: () => void;
}
const Card: React.FC<CardProps> = ({
  title,
  isDragging,
  cardPosition: position,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errCat, setErrCat] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((res: CatApiResponse[]) => {
        setImgSrc(res[0].url);
      })
      .catch((err) => {
        setErrCat(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let allStyles = isDragging ? "opacity-50 bg-slate-300" : "";
  return (
    <div
      data-testid={`card row-${Math.ceil(position / 3)}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`border border-black p-2 text-center rounded-md justify-center cursor-pointer ${allStyles}`}
    >
      <p className="pb-2" data-testid={`card-${position}-title`}>
        {title}
      </p>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <img
          src={imgSrc}
          alt={`thumbnail ${errCat}`}
          className="max-h-[360px] w-fit mx-auto "
          data-testid={`card-${position}-thumbnail`}
        />
      )}
    </div>
  );
};

export default Card;
