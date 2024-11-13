import { render, screen } from "@testing-library/react";
import Content from "../Components/Content";

describe("Content", () => {
  test("Is rendered", () => {
    render(<Content />);
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  test("Displays 5 cards in total", () => {
    render(<Content />);
    const cards = screen.getAllByTestId(/card row-/);
    expect(cards).toHaveLength(5);
  });

  test("Display 3 cards in first row", () => {
    render(<Content />);
    expect(screen.getAllByTestId(/row-1/)).toHaveLength(3);
  });

  test("Display 2 cards in the second row", () => {
    render(<Content />);
    expect(screen.getAllByTestId(/row-2/)).toHaveLength(2);
  });

  test("Displays card contents", () => {
    render(<Content />);
    expect(screen.getByTestId("card-1-title").textContent).toEqual(
      "Bank Draft"
    );
    expect(screen.getByTestId("card-1-thumbnail")).toBeInTheDocument();
  });
});
