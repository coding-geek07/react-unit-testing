import { fireEvent, render, screen } from "@testing-library/react"
import AddInput from "../AddInput";

describe('AddInput', () => {
    // const sampleTodos = [{ id: 1, todo: 'SomeTask', completed: false }];
    const setTodos = jest.fn();
    test('should render the input element', () => {
        render(<AddInput setTodos={setTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        expect(inputElement).toBeTruthy();
    });
    test('should render the value onchange of input element', () => {
        render(<AddInput setTodos={setTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: 'Go Shopping' } });
        expect(inputElement.value).toBe('Go Shopping');
    });
    test('should render the value as empty on Click of add button', () => {
        render(<AddInput setTodos={setTodos} todos={[]} />);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement.value).toBe('');
    });
    test('should render the button', () => {
        render(<AddInput setTodos={setTodos} todos={[]} />);
        const btnElement = screen.getByRole("button");
        expect(btnElement.textContent).toBe('Add');
    });
});