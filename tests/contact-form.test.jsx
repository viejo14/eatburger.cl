import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Contact form", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("validates required fields", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

    expect(screen.getByText(/completa todos los campos/i)).toBeInTheDocument();
  });

  it("shows demo redirect message on valid submit", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(global, "fetch");
    render(<App />);

    await user.type(screen.getByLabelText(/nombre/i), "Francisco");
    await user.type(screen.getByLabelText(/^email$/i), "francisco@test.com");
    await user.type(screen.getByLabelText(/telefono/i), "123456789");
    await user.type(screen.getByLabelText(/mensaje/i), "Hola equipo");

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

    expect(screen.getByText(/demo syrtix/i)).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
