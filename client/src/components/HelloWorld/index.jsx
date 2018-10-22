import React from "react";
import {inject, observer} from "mobx-react";

@inject('userStore')
@observer
export default class HelloWorld extends React.Component {
    loadMessage() {
        this.props.userStore.getMessage();
    }



    render() {
        return (
            <div>
                Message: {this.props.userStore.message}
                <br/>
                <button onClick={() => this.loadMessage()}>Load message</button>
            </div>
        );
    }
}