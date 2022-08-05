import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory', () => {
  test('debe de cambiar el valor de una caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    // obtenemos el input
    const input = screen.getByRole('textbox');

    // disparamos un evento donde el valor es saitama
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'God of War';

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // llenamos el valor del input
    fireEvent.input(input, { target: { value: inputValue } });
    // simulamos el submit
    fireEvent.submit(form);
    // ya habiendo hecho submit, se hace recet al valor
    expect(input.value).toBe('');
    // screen.debug();
  });
});
