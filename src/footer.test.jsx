import React from 'react';
import ReactDom from 'react-dom';
import Footer from './footer';


import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render( < Footer/> , div);
    ReactDom.unmountComponentAtNode(div)
})

it("renders  correctly",()=>{
    const {getByTestId}= render(<Footer/>)
    expect(getByTestId('Footer')).toHaveTextContent("Copyright")

})