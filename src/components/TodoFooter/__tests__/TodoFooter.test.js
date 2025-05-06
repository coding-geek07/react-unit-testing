import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

function MockTodoFooter({ numberOfIncompleteTasks }) {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    );
}

xdescribe('TodoFooter', () => {
    it('should provide count of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paraElement = screen.getByText(/1 task left/i);
        expect(paraElement).toBeInTheDocument();
    });

    it('should render "tasks" for more than one incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paraElement = screen.getByText(/tasks/i);
        expect(paraElement).toBeInTheDocument();
    });
});
/* it('should render incomplete tasks using test id', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toBeVisible();
});
it('should render the para element', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toBeTruthy();
});
it('should render the para element with the text content', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement.textContent).toBe('5 tasks left');
});
it('should render the para element with toHaveTextContent', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toHaveTextContent('5 tasks left');
});
it('should render the para element with toContainHtml', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toContainHTML('<p data-testid="para">5 tasks left</p>');
});
it('should render the para element within div element', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const divElement = screen.getByTestId("div");
    const paraElement = screen.getByTestId("para");
    expect(divElement).toContainElement(paraElement);
}); */