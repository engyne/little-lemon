import {render, screen, fireEvent} from '@testing-library/react'
import {Button} from './Button';

test('Renders with correct props', () => {
    render(<Button />);

    const button = screen.getByTestId('button');

    expect(button.hasAttribute('disabled')).toBeFalsy();
    expect(button.getAttribute('type')).toBe('button');
    expect(button.classList).toHaveLength(0);
    expect(button).toHaveTextContent('');
});

test('Has "primary-btn" when "variant" prop is passed in as "primary"', () => {
    const { rerender } = render(<Button />);

    const button = screen.getByTestId('button');
    expect(button.classList).not.toContain('primary-btn');

    rerender(<Button variant="primary" />);
    expect(button.classList).toContain('primary-btn');
});

test('Renders text correclty', () => {
    const { rerender } = render(<Button />);

    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent('');

    rerender(<Button>Hello</Button>);
    expect(button).toHaveTextContent('Hello');
});

test('Calls correctly the onClick prop function passed in', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
});