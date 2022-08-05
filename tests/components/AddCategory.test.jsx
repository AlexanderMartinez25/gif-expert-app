import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
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
    // mock de la función
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // llenamos el valor del input
    fireEvent.input(input, { target: { value: inputValue } });
    // simulamos el submit
    fireEvent.submit(form);
    // ya habiendo hecho submit, se hace recet al valor
    expect(input.value).toBe('');

    // que fa funcion se haya llamado, llamado al menos 1 vez
    // y que se haya llamado con el valor esperado
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar el onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.submit(input, { target: { value: '' } });
    fireEvent.submit(form);

    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
