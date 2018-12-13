import './index.css'

import React from 'react';
import {Table} from 'reactstrap';
import {inject, observer} from 'mobx-react';

/**
 * Class with workers
 */
@inject('workerStore')
@observer
export default class Workers extends React.Component {

    componentDidMount() {
        this.props.workerStore.getAll();
    }

    /**
     * Delete user by id
     */
    delete(id) {
        this.props.workerStore.deleteById(id);
    }

    /**
     * Map users to row component
     */
    loadUser() {
        const {users} = this.props.workerStore;
        return users.map(user => (
            <tr key={user.id}>
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

    render() {
        return (
            <div className={'workers'}>
                <h2 className={'workers-header'}>Workers:</h2>
                <Table striped className={'workers-table'}>
                    <thead>
                    <tr>
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
}