import React from 'react';
import ReactDom from 'react-dom';
import  Home  from './Home';


import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render( < Home/> , div);
    ReactDom.unmountComponentAtNode(div)
})

it("renders  correctly",()=>{
    const {getByTestId}= render(<Home/>)
    expect(getByTestId('header')).toHaveTextContent("PewNews")

})