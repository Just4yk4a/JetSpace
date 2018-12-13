import './index.css'

import React from 'react';

import {inject, observer} from 'mobx-react';
import {
    Button,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    UncontrolledDropdown
} from 'reactstrap';

/**
 * Car class
 */
@inject('categoryStore', 'carStore')
@observer
export default class CarAdd extends React.Component {
    /**
     * State of this component
     */
    state = {
        category: null
    };

    /**
     * Load category when component has mounted
     */
    componentDidMount() {
        this.props.categoryStore.findAll();
        this.props.carStore.setCar();
    }

    /**
     * Weight handle
     */
    handleWeightChange({target: {value}}) {
        this.props.carStore.setWeight(value);
    }

    /**
     * Volume handle
     */
    handleVolumeChange({target: {value}}) {
        this.props.carStore.setVolume(value);
    }

    /**
     * Category handle
     */
    handleCategoryChange(value) {
        this.setState({
            category: value
        });
        this.props.carStore.setCategory(value);
    }

    render() {
        return (
            <div>
                <h1 className={'header'}>Car info:</h1>
                <Form className={'car-form'}>
                    <FormGroup row>
                        <Label for='weight' sm={3}>Weight(kg):</Label>
                        <Col sm={8}>
                            <Input type='number' id='weight'
                                   onChange={this.handleWeightChange.bind(this)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='volume' sm={3}>Volume(m^3):</Label>
                        <Col sm={8}>
                            <Input type='number' id='volume'
                                   onChange={this.handleVolumeChange.bind(this)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='category' sm={3}>Category:</Label>
                        <Col sm={8}>
                            <UncontrolledDropdown>
                                <DropdownToggle caret>
                                    {this.state.category !== null ? this.state.category.type : 'Category'}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {this.props.categoryStore.categories.map(category =>
                                        this.state.category === null ? <DropdownItem key={category.id}
                                                                                     onClick={() => this.handleCategoryChange(category)}>{category.type}
                                            </DropdownItem> :
                                            this.state.category.id !== category.id ? <DropdownItem key={category.id}
                                                                                                   onClick={() => this.handleCategoryChange(category)}>{category.type}
                                            </DropdownItem> : null
                                    )}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </FormGroup>
                    <Button onClick={() => this.props.carStore.save()} className={'car-add-btn'}>Add</Button>
                </Form>
            </div>
        );
    }
}