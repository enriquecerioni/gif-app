import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test <GifItem /> Component", () => {
  const title = "Goku";
  const url = "https://media.revistagq.com/photos/5f45010acb266484bb785c78/master/pass/dragon-ball-z.jpg";
  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').title ).toBe( title );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );  
  });

  test('Debe de mostrar el título en el component', () => { 
    
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText( title ) ).toBeTruthy();
    
   })
});
