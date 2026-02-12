import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App smoke", () => {
  it("renders all required sections", () => {
    render(<App />);

    expect(document.querySelector("#inicio")).toBeInTheDocument();
    expect(document.querySelector("#menu")).toBeInTheDocument();
    expect(document.querySelector("#pedido")).toBeInTheDocument();
    expect(document.querySelector("#nosotros")).toBeInTheDocument();
    expect(document.querySelector("#contacto")).toBeInTheDocument();

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});