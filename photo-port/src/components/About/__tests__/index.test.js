import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
describe('About component', () => {
    // Renders about text
    // First Test: 
    it('renders about text', () => {
        render(<About />);
    })
    // Second Test:
    it('matches snapshot DOM node sturcture', () => {
        //renders about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})