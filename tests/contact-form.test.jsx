import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Contact form", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_FORMSPREE_ENDPOINT", "https://formspree.io/f/test");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("validates required fields", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

    expect(screen.getByText(/completa todos los campos/i)).toBeInTheDocument();
  });

  it("shows success on 2xx response", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({ ok: true });
    render(<App />);

    await user.type(screen.getByLabelText(/nombre/i), "Francisco");
    await user.type(screen.getByLabelText(/^email$/i), "francisco@test.com");
    await user.type(screen.getByLabelText(/telefono/i), "123456789");
    await user.type(screen.getByLabelText(/mensaje/i), "Hola equipo");

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument();
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("shows error on failed response", async () => {
    const user = userEvent.setup();
    vi.spyOn(global, "fetch").mockResolvedValue({ ok: false });
    render(<App />);

    await user.type(screen.getByLabelText(/nombre/i), "Francisco");
    await user.type(screen.getByLabelText(/^email$/i), "francisco@test.com");
    await user.type(screen.getByLabelText(/telefono/i), "123456789");
    await user.type(screen.getByLabelText(/mensaje/i), "Hola equipo");

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText(/no pudimos enviar tu mensaje/i)).toBeInTheDocument();
    });
  });
});