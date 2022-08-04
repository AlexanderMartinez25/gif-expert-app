import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas a <GifItem/>', () => {
  test('Debe evualuar Snapshot', () => {
    const title = 'Hola Mundo';
    const url = 'https://youtube.com';

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
