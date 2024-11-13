import { Data, DataWithPosition } from "../types";

export function sortBasedOnPostion(data: DataWithPosition[] = []): Data[] {
  let updatedData = [...data];
  if (data && data.length > 0) {
    updatedData.sort((a, b) => a.position - b.position);
    return updatedData.map(({ title, type }) => ({ title, type }));
  }

  return [];
}
