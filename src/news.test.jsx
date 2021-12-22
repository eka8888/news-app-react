import React from 'react';
import ReactDom from 'react-dom';
import  NewsApp  from './news';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render( < NewsApp/> , div);
    ReactDom.unmountComponentAtNode(div)
})


