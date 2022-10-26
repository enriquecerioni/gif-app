import { getGifs } from "../../src/helpers/getGifs";

describe("Test getGifs() helper", () => {
  test("Debe retornar un arreglo gifs", async () => {
    const gifs = await getGifs("Halloween");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
