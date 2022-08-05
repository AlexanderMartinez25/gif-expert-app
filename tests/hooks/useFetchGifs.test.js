import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    // ya que necesitamos renderizar un hook en vez de un componente
    const { result } = renderHook(() => useFetchGifs('God of War'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('God of War'));

    // espera que el length de imagenes sea mayor a cero
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    // a este punto ya se deben de haber cargado las imágenes
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
