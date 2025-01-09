import {render, screen, fireEvent } from '@testing-library/react'
import {InputWithLabel} from './InputWithLabel';


describe('InputWithLabel component', () => {
  test('Correctly updates the value', () => {
      render(<InputWithLabel />);

      const VALUE = 'random value';
      const inputWithLabel = screen.getByTestId('input-with-label');

      fireEvent.change(inputWithLabel, { target: { value: VALUE }});
      expect(inputWithLabel).toHaveValue(VALUE);
  });

  test('Correctly display error message', () => {
    const { rerender } = render(<InputWithLabel />);

    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
    rerender(<InputWithLabel invalid validationMessage="some error" />);
    const errorMesage = screen.getByTestId('error-msg');

    expect(errorMesage).toBeInTheDocument();
    expect(errorMesage.textContent).toBe('some error');
});

})
