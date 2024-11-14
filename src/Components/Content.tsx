import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDropContainer";
import { DataWithPosition } from "../types";
import { mockData } from "../mocks/mockData";

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
        console.error("Cannot fetch data!", err.message);
        console.log("msw doesn't work in production! Using mock data...");
        // MSW won't intercept requests in production, so set fallback data
        setData(mockData);
      });
  }, []);

  return <DragAndDrop data={data} />;
};

export default Content;
