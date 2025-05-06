import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
}
const addTodo = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const btnElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(btnElement);
    });
}
describe('Todo', () => {
    it('render Todo with added todo', () => {
        render(<MockTodo />);
        addTodo(['Go shopping']);
        const listElement = screen.getByText(/Go shopping/i);
        expect(listElement).toBeInTheDocument();
    });
    it('render Todo with multiple todos', () => {
        render(<MockTodo />);
        addTodo(['Go shopping', 'Clean room', 'Homework']);
        const listElements = screen.getAllByTestId("todo");
        expect(listElements.length).toBe(3);
    });
    it('should apply strike class when the task is clicked', () => {
        render(<MockTodo />);
        addTodo(['Go shopping', 'Clean room', 'Homework']);
        const listElements = screen.getAllByTestId("todo");
        fireEvent.click(listElements[0]);
        expect(listElements[0]).toHaveClass('todo-item-active');
        fireEvent.click(listElements[0]);
        expect(listElements[0]).not.toHaveClass('todo-item-active');
    });
});