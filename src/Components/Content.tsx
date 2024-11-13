import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDropContainer";
import { DataWithPosition } from "../types";

const Content: React.FC = () => {
  const [data, setData] = useState<DataWithPosition[]>([]);
  useEffect(() => {
    // TODO: Add a mock fetch call here to get the required data and pass it down
    // the DragAndDrop component
    fetch("/data")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("Cannot fetch data!", err);
      });
  }, []);

  return <DragAndDrop data={data} />;
};

export default Content;
