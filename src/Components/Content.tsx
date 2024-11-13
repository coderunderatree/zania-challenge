import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDropContainer";
import { mockData, SampleDataWithPosition } from "../mockData";

const Content: React.FC = () => {
  const [data, setData] = useState<SampleDataWithPosition[]>([]);
  useEffect(() => {
    setData(mockData);
  }, []);

  return <DragAndDrop data={data} />;
};

export default Content;
