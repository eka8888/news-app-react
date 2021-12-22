import React from 'react';
import ReactDom from 'react-dom';
import  App  from './App';


import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render( < App/> , div);
    ReactDom.unmountComponentAtNode(div)
})

it("renders  correctly",()=>{
    const {getByTestId}= render(<App/>)
    expect(getByTestId('App')).toHaveTextContent("NEWS")

})