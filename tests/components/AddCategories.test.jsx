import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from "../../src/components/AddCategories";

describe("Test <AddCategory /> Component", () => {
  test("Debe cambiar el valor del recuadro de texto", () => {
    render(<AddCategories onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Goku" } });

    expect(input.value).toBe("Goku");
  });

  test("Debe de llamar onNewCategory() si el input tiene un valor", () => {
    const inputValue = "Goku";
    const onNewCategory = jest.fn(); // jest moc -> simulación de ejecución de  función

    render(<AddCategories onNewCategory={ onNewCategory } />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit( form );
    
    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('No debe de llamar a onNewCategory si el input está vacío', () => { 
    const onNewCategory = jest.fn(); // jest moc -> simulación de ejecución de  función
    render(<AddCategories onNewCategory={ onNewCategory } />);
    const form = screen.getByRole("form");
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

   })
});
