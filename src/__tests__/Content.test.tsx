import { render, screen } from "@testing-library/react";
import Content from "../Components/Content";
import { mockData } from "../mocks/mockData";

describe("Content", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    // Mock a successful response
    // @ts-ignore entire-file
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Is rendered", async () => {
    render(<Content />);
    expect(await screen.findByTestId("content")).toBeInTheDocument();
  });

  test("Displays 5 cards in total", async () => {
    render(<Content />);
    const cards = await screen.findAllByTestId(/card row-/);
    expect(cards).toHaveLength(5);
  });

  test("Display 3 cards in first row", async () => {
    render(<Content />);
    expect(await screen.findAllByTestId(/row-1/)).toHaveLength(3);
  });

  test("Display 2 cards in the second row", async () => {
    render(<Content />);
    expect(await screen.findAllByTestId(/row-2/)).toHaveLength(2);
  });

  test("Displays card contents", async () => {
    render(<Content />);
    const cardTitle = await screen.findByTestId("card-1-title");
    expect(cardTitle.textContent).toEqual("Bank Draft");
    const thumbnail = await screen.findByTestId("card-1-thumbnail");
    expect(thumbnail).toBeInTheDocument();
  });
});
