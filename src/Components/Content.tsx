import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDropContainer";
import { DataWithPosition } from "../types";
import { mockData } from "../mocks/mockData";

const Content: React.FC = () => {
  const [data, setData] = useState<DataWithPosition[]>([]);
  useEffect(() => {
    // TODO: Add a mock fetch call here to get the required data and pass it down
    // the DragAndDrop component
    setData(mockData);
  }, []);

  return <DragAndDrop data={data} />;
};

export default Content;
