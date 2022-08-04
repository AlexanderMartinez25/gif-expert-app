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
    screen.debug();
  });
});
