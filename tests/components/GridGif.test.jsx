import { render, screen } from '@testing-library/react';
import { GridGif } from '../../src/components/GridGif';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GridGif />', () => {
  const category = 'God of War';

  test('debe de mostrar el loading inicialmente', () => {
    // aunque no lo usemos aquí lod ejamos para que no de errores las pruebas
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GridGif category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: '546ASD',
        title: 'God of War',
        url: 'http://gow/image.jpg',
      },
      {
        id: '546ASD2',
        title: 'Metal Gear Solid',
        url: 'http://mgs/image.jpg',
      },
    ];

    // hacemos el mock con los "gifs" directo al hook personalizado
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GridGif category={category} />);
    // evaluamos que se repita 2 veces la imagen
    expect(screen.getAllByRole('img').length).toBe(2);
    // screen.debug();
  });
});
