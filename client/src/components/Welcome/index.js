import React from 'react';
import Cars from "../Cars";

import "react-datepicker/dist/react-datepicker.css";

export default class Welcome extends React.Component{

    render(){
        return(
            <div>
                <Cars/>
            </div>
        );
    }
}