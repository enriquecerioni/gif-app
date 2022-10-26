const { render, screen } = require("@testing-library/react");
import { GifExpertApp } from '../src/GifExpertApp';

describe("Test <GifExpertApp />", () => {
  test("should first", () => {
    render( <GifExpertApp /> );
    screen.debug();
  });
});
