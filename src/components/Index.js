import React from 'react'
import Articles from './../containers/Articles';
import './index.css';
import Nav from './../containers/nav';

const Index = () => (
    <div className="grid-container">
        <header className="nav menu-navbar">
            <Nav/>
        </header>
        <main className="page-content">
            <section className="title">
                <h1>Lista degli articoli</h1>
            </section>
            <section className="articles">
                <Articles/>
            </section>
        </main>
    </div>
);

export default Index