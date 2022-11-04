import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Theme from "@/utils/theme";

describe("Theme", () => {
  render(<Theme />);
  screen
});
