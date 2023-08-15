import { fireEvent, render, screen } from "@testing-library/react";
import CoinsList from "@/pages/components/CoinsList";

type FetchMock = jest.Mock<Promise<Response>>;
type FetchData = Record<string, any>;

const setFetchReturnData = (data: FetchData): FetchMock => {
  // const fetchMock: FetchMock = jest.fn(() =>
  const fetchMock: any = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );

  global.fetch = fetchMock;

  return fetchMock;
};
describe("General CoinsList test", () => {
  beforeAll(() => {
    setFetchReturnData([{id: "bitcoin"}, {id: "ethereum"}]);
  });
  
  test("It should render", () => {
      render(<CoinsList />)
  });

  it("Should render API data", async () => {
    render(<CoinsList />)

    await screen.findByText("bitcoin");
  });

  test("It should filter correctly", async () => {
    render(<CoinsList />);
    
    await screen.findByText("bitcoin");
    await screen.findByText("ethereum");

    const filter = screen.getByLabelText(/filter/i);
    fireEvent.change(filter, {target : { value : "bitcoin"}});
    
    // await screen.getByText("bitcoin");

    // Como o fireEvent já aguarda o processamento
    // então pode dispensar o await
    screen.getByText("bitcoin");
    
    expect(screen.queryByText("ethereum")).toBe(null);
    // ou
    expect(screen.queryByText("ethereum")).not.toBeInTheDocument();

  });
});