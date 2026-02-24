import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Mobile navigation", () => {
  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByLabelText(/open menu/i));

    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /contacto/i }).length).toBeGreaterThan(0);

    await user.click(screen.getByLabelText(/close menu/i));

    await waitFor(() => {
      expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
    });
  });
});