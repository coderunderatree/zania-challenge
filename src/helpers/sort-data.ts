import { SampleData, SampleDataWithPosition } from "../mockData";

export function sortBasedOnPostion(
  data: SampleDataWithPosition[] = []
): SampleData[] {
  let updatedData = [...data];
  if (data && data.length > 0) {
    updatedData.sort((a, b) => a.position - b.position);
    return updatedData.map(({ title, type }) => ({ title, type }));
  }

  return [];
}
