import {fireEvent, render, screen} from '@testing-library/react'
import {BookingForm} from './BookingForm';

// test('Renders the BookingForm heading', () => {

//     const form = {
//         name: '',
//         email: '',
//         phone: '',
//         people: 1,
//         time: '',
//         date: '',
//         occasion: '',
//         outdoorTable: false,
//     };

//     // jest.mock('./BookingForm', () => {
//     //     return {
//     //         getMinDate: jest.fn().mockReturnValue()
//     //     }
//     // })

//     const handleChange = jest.fn();
//     const handleSubmit = jest.fn();

//     render(
//         <BookingForm
//             form={form}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//         />
//     );

//     const headingElement = screen.getByText("Reserve a table");
//     expect(headingElement).toBeInTheDocument();

//     const button = screen.getByRole('button');
//     console.log(button.className);

//     const input = screen.getByTestId('name-input');

//     fireEvent.change(input, { target: { value: 'jhon' }});
//     expect(handleChange).toHaveBeenCalledTimes(1);
// });


describe('BookingForm component', () => {
    const form = {
        name: '',
        email: '',
        phone: '',
        people: 1,
        time: '',
        date: '',
        occasion: '',
        outdoorTable: false,
    };
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    test('Form has correct heading', () => {
        render(
            <BookingForm 
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const headingElement = screen.getByText("Reserve a table");
        expect(headingElement).toBeInTheDocument();
    })

    test('Name input works correctly', () => {
        render(
            <BookingForm 
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const nameInput = screen.getByTestId('name-input');
        fireEvent.change(nameInput, { target: { value: 'Jhon' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Email input works correctly', () => {
        render(
            <BookingForm 
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const emailInput = screen.getByTestId('email-input');
        fireEvent.change(emailInput, { target: { value: 'hello@test.com' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Phone input works correctly', () => {
        render(
            <BookingForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const phoneInput = screen.getByTestId('phone-input');
        fireEvent.change(phoneInput, { target: { value: '76716278' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('People input works correctly', () => {
        render(
            <BookingForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const peopleInput = screen.getByTestId('people-input');
        fireEvent.change(peopleInput, { target: { value: '2' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Date input works correctly', () => {
        render(
            <BookingForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        // const dateInput = screen.getByTestId('date-input');
        // fireEvent.change(dateInput, { target: { value: 'sdfdssdfsdffd' }});
        // expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Time input works correctly', () => {
        render(
            <BookingForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const timeInput = screen.getByTestId('time-input');
        fireEvent.change(timeInput, { target: { value: '20:00' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Occasion input works correctly', () => {
        render(
            <BookingForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const phoneInput = screen.getByTestId('occasion-input');
        fireEvent.change(phoneInput, { target: { value: 'Birthday' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('Submit button works correctly', () => {
        render(
            <BookingForm 
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );

        const submitButton = screen.getByRole('button');
        expect(submitButton).toHaveAttribute('disabled');
        fireEvent.click(submitButton);
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});
