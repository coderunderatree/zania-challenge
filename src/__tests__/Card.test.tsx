import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../Components/Card";
import { mockCatImages } from "../mocks/mockData";

const CardWithTestData = () => (
  <Card
    isDragging={false}
    cardPosition={1}
    title="Test component"
    onDragEnd={jest.fn()}
    onDragOver={jest.fn()}
    onDragStart={jest.fn()}
    onDrop={jest.fn()}
  />
);

describe("Card", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    // @ts-ignore entire-file
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockCatImages,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Displays a spinner on loading", () => {
    render(<CardWithTestData />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  describe("Overlay", () => {
    test("Opens an overlay on clicking", async () => {
      render(<CardWithTestData />);
      const cardTitle = await screen.findByTestId("card-1-title");
      userEvent.click(cardTitle);

      const overlayImage = await screen.findByTestId("image-overlay");
      expect(overlayImage).toBeInTheDocument();
    });

    test("Closes overlay when clicking on background", async () => {
      render(<CardWithTestData />);
      const cardTitle = await screen.findByTestId("card-1-title");
      userEvent.click(cardTitle);

      const overlay = await screen.findByTestId("overlay-background");
      userEvent.click(overlay);

      await waitForElementToBeRemoved(() =>
        screen.queryByTestId("overlay-background")
      );
    });

    test("Closes overlay on clicking Escape", async () => {
      render(<CardWithTestData />);
      const cardTitle = await screen.findByTestId("card-1-title");
      userEvent.click(cardTitle);

      const overlay = await screen.findByTestId("overlay-background");
      expect(overlay).toBeInTheDocument();

      userEvent.keyboard("{Escape}");

      await waitForElementToBeRemoved(() =>
        screen.queryByTestId("overlay-background")
      );
    });
  });
});
