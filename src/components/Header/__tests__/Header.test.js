import { render, screen } from "@testing-library/react"
import Header from "../Header"

describe('Header', () => {
    test('should render header with title prop', () => {
        render(<Header title="My Header" />);
        const headerElement = screen.getByText(/my header/i);
        expect(headerElement).toBeInTheDocument();
    });
});


// xit('should render header with title prop using getByRole', () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByRole('heading');
//     expect(headerElement).toBeInTheDocument();
// });
// it('should render header with title prop using getByRole with multiple elements', () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByRole('heading', { name: 'My Header' });
//     expect(headerElement).toBeInTheDocument();
// });
// it('should render header with title prop using getByTitle', () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByTitle('heading');
//     expect(headerElement).toBeInTheDocument();
// });
// it('should render header with title prop using getAllByRole', () => {
//     render(<Header title="My Header" />);
//     const headerElements = screen.getAllByRole('heading');
//     expect(headerElements.length).toBe(2);
// });
// // Find - should be used for async operations mentioning async .. await
// test('should render header with title prop using FindByText', async () => {
//     render(<Header title="My Header" />);
//     const headerElement = await screen.findByText(/my header/i);
//     expect(headerElement).toBeInTheDocument();
// });

// /**
//  * Query - It returns null doesn't throw error, so we can check using .not to validate that it is not
//  * present in the doc. If you replace it with getByText then it will fail won't even assert as it throws
//  * error
//  */
// it('should render header with title prop using queryByRole with multiple elements', () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.queryByText(/dogs/i);
//     expect(headerElement).not.toBeInTheDocument();
// });