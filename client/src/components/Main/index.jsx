import './index.css';

import React from 'react';
import Header from '../Header';
import Router from '../Router';

/**
 * Main class
 */
export default class Main extends React.Component {
    render() {
        return (
            <div className={'body'}>
                <Header/>
                <Router/>
            </div>
        )
    };
}