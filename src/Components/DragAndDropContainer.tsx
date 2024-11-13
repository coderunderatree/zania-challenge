import React, { useEffect, useState } from "react";
import { DataWithPosition } from "../types";
import Card from "./Card";

type Item = DataWithPosition;

interface DragAndDropProps {
  data: Item[];
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ data }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState<Item | null>(null);
  const [items, setItems] = useState<DataWithPosition[]>(data || []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    setIsDragging(true);
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropTargetIndex: number
  ) => {
    e.preventDefault();
    setIsDragging(false);

    // Update the items array based on the drop target index
    const draggedItemIndex = items.findIndex(
      (i) => i.type === draggedItem?.type
    );
    const updatedItems = [...items];
    if (draggedItem?.type && draggedItemIndex) {
      updatedItems.splice(draggedItemIndex, 1);
      updatedItems.splice(dropTargetIndex, 0, draggedItem);
      setItems(updatedItems);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedItem(null);
  };

  return (
    <div className="p-4" data-testid="content">
      <div className={`grid grid-cols-3 gap-4 justify-content-evenly `}>
        {items.map((item, index) => (
          <Card
            key={`${item.type}-${item.title}`}
            cardPosition={index + 1}
            title={item.title}
            isDragging={isDragging && draggedItem?.type === item.type}
            // handlers
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
