import React from 'react'
import Articles from './../containers/Articles';

const Index = () => (
    <div>
        <h1>Lista degli articoli</h1>
        <a href={'/#/login'}>Link to login</a>
        <Articles/>
    </div>
);

export default Index