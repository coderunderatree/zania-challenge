/**
 * @testEnvironment node
 */
import { sortBasedOnPostion } from "../helpers/sort-data";
import { SampleDataWithPosition } from "../mockData";

describe("Sort data", () => {
  test("Sorts ascending based on position", () => {
    const mockData: SampleDataWithPosition[] = [
      {
        title: "a",
        type: "a",
        position: 3,
      },
      { title: "b", type: "b", position: 1 },
      { title: "c", type: "c", position: 2 },
    ];

    const sortedData = sortBasedOnPostion(mockData);

    expect(sortedData).toHaveLength(3);
    expect(sortedData[0].title).toEqual("b");
    expect(sortedData[1].title).toEqual("c");
    expect(sortedData[2].title).toEqual("a");
  });
});
