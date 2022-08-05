import { render, screen } from '@testing-library/react';
import { GridGif } from '../../src/components/GridGif';

describe('Pruebas en <GridGif />', () => {
  const category = 'God of War';

  test('debe de mostrar el loading inicialmente', () => {
    render(<GridGif category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    second;
  });
});
