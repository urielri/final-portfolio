import { describe, expect, it } from "vitest";
const WIDTH_CARD = 240;
const HEIGHT_CARD = 118;
const SPACE_CARD = 24;
type Surface = {
  width: number;
  height: number;
  surface: number;
};
function calculateSurface(parent: {
  offsetWidth: number;
  offsetHeight: number;
}): Surface {
  if (!parent) {
    throw new Error();
  }
  const width = parent.offsetWidth;
  const height = parent.offsetHeight;
  const surface = width * height;
  return { width, height, surface };
}

describe("function calculateSurface", () => {
  it("should render function", () => {
    expect(typeof calculateSurface === "function").toBe(true);
  });
});

function calculateQuantityCards(surface: Surface): {
  quantity: number;
  surfaceCards: number;
} {
  const h = HEIGHT_CARD + SPACE_CARD * 2;
  const w = WIDTH_CARD + SPACE_CARD * 2;
  const s = h * w;
  const quantity = Math.round(surface.surface / s);
  return { quantity, surfaceCards: s };
}

describe("function calculateQuantityCards", () => {
  it("should be render function", () => {
    expect(typeof calculateQuantityCards === "function").toBe(true);
  });
  it("Should be calculate quantity cards", () => {
    const parent = { offsetHeight: 0, offsetWidth: 0 };
    parent.offsetWidth = 600;
    parent.offsetHeight = 300;
    const surfaceParent = calculateSurface(parent);
    const calculated = calculateQuantityCards(surfaceParent);
    expect(calculated.quantity).toBe(4);
  });
  it("should be return 0 if parent surface < to surface card", () => {
    const parent = { offsetHeight: 0, offsetWidth: 0 };
    const surfaceParent = calculateSurface(parent);
    const calculated = calculateQuantityCards(surfaceParent);
    expect(calculated.quantity).toBe(0);
  });
});
type Element = Surface & {
  coords: { x: number; y: number };
};

function random(parent: number, element: number): number {
  const min = Math.ceil(parent - element);
  const max = Math.floor(parent);
  const result = Math.random() * (max - min + 1 + min);
  return result;
}
function calculatePosition(element: Element, surfaceParent: Surface): Element {
  const x = random(surfaceParent.width, element.width);
  const y = random(surfaceParent.height, element.height);

  return { ...element, coords: { x, y } };
}
describe("function calculatePosition", () => {
  it("should be a function", () => {
    expect(typeof calculatePosition === "function").toBe(true);
  });
  it("must calculate the new position with random values", () => {
    const parent = { offsetHeight: 300, offsetWidth: 600 };
    const surfaceParent = calculateSurface(parent);
    const quantityCards = calculateQuantityCards(surfaceParent);
    const cards = [];
    for (let i = 0; i < 1; i++) {
      const el: Element = {
        coords: { x: 0, y: 0 },
        width: WIDTH_CARD,
        height: HEIGHT_CARD,
        surface: quantityCards.surfaceCards,
      };
      cards.push(el);
    }
    const calculated = calculatePosition(cards[0], surfaceParent);
    expect(calculated.coords.y > 0 && calculated.coords.x > 0).toBe(true);
  });
});
