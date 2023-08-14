import { render } from "@testing-library/react";
import CoinsList from "@/pages/components/CoinsList";

describe("General CoinsList test", () => {
    test("It should render", () => {
        render(<CoinsList />)
    });
});

