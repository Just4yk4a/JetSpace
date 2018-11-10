import React from 'react';
import {Table} from "reactstrap";
import {inject, observer} from "mobx-react";

@inject('workerStore')
@observer
export default class Workers extends React.Component {

    componentDidMount() {
        this.props.workerStore.getAll();
    }

    delete(id){
        this.props.workerStore.deleteById(id);
    }

    render() {
        return (<div>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.loadUser()}
                    </tbody>
                </Table>
            </div>
        );
    }

    loadUser() {
        const {users} = this.props.workerStore;
        return users.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role.type}</td>
                <td>
                    <button onClick={() => this.delete(user.id)}>X</button>
                    <button>Edit</button>
                </td>
            </tr>
        ))
    }
}