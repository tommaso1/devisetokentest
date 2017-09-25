import React from 'react'
import Articles from './../containers/Articles';
import './index.css';

const Index = () => (
    <div >

        <header className="nav">
            <nav>
                <a href={'/#/login'}>Link to login</a>
            </nav>
        </header>
        <main>
            <section className="title">
                <h1>Home Page</h1>
            </section>
            <section className="articles">
                <Articles/>
            </section>

        </main>


    </div>
);

export default Index