import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Locale behavior", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("falls back to es when locale is invalid", () => {
    window.localStorage.setItem("locale", "pt");

    render(<App />);

    expect(screen.getByText(/las mejores/i)).toBeInTheDocument();
  });

  it("loads en when locale is stored as en", () => {
    window.localStorage.setItem("locale", "en");

    render(<App />);

    expect(screen.getByText(/the best/i)).toBeInTheDocument();
  });
});