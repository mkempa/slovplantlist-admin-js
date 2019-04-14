import React, { Component } from 'react';

import {
    Col,
    Button, Modal,
    Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';

import generaFacade from '../../facades/genus';
import familiesFacade from '../../facades/families';

const VALIDATION_STATE_SUCCESS = 'success';
const VALIDATION_STATE_ERROR = 'error';

const titleColWidth = 2;
const mainColWidth = 10;

const initialValues = {
    id: undefined,
    name: '',
    authors: '',
    vernacular: '',
    id_family: undefined,
    id_family_apg: undefined
};

class GeneraModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            genus: {
                ...initialValues
            },
            families: [],
            familiesApg: []
        }
    }

    onEnter = async () => {
        if (this.props.id) {
            const accessToken = this.props.accessToken;
            const { genus } = await generaFacade.getGenusByIdWithFamilies({ id: this.props.id, accessToken });
            this.setState({
                genus
            });
        }
    }

    getValidationState = () => {
        if (this.state.genus.name.length > 0 && this.state.genus.authors.length > 0) {
            return VALIDATION_STATE_SUCCESS;
        }
        return VALIDATION_STATE_ERROR;
    }

    handleChangeInput = e => {
        const genus = { ...this.state.genus };
        genus[e.target.id] = e.target.value;
        this.setState({
            genus
        });
    }

    handleHide = () => {
        this.props.onHide();
        this.setState({
            genus: { ...initialValues }
        });
    }

    handleSave = async () => {
        if (this.getValidationState() === VALIDATION_STATE_SUCCESS) {
            const accessToken = this.props.accessToken;
            const data = { ...this.state.genus };
            await generaFacade.saveGenus({ data, accessToken });
            this.handleHide();
        } else {
            alert("Genus name and authors must not be empty!");
        }
    }

    handleChangeTypeahead = (selected, prop) => {
        const id = selected[0] ? selected[0].id : undefined;
        const genus = { ...this.state.genus };
        genus[prop] = id;
        this.setState({
            genus
        });
    }

    async componentDidMount() {
        const typeaheadFormat = f => ({ id: f.id, label: f.name });
        const families = await familiesFacade.getAllFamilies(typeaheadFormat);
        const familiesApg = await familiesFacade.getAllFamiliesApg(typeaheadFormat);
        this.setState({
            families,
            familiesApg
        });
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleHide} onEnter={this.onEnter}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.id ? 'Edit genus' : 'Create new genus'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup
                            controlId="name"
                            bsSize='sm'
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={titleColWidth}>
                                Name
                            </Col>
                            <Col sm={mainColWidth}>
                                <FormControl
                                    type="text"
                                    value={this.state.genus.name}
                                    placeholder="Genus name"
                                    onChange={this.handleChangeInput}
                                />
                                <FormControl.Feedback />
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="authors"
                            bsSize='sm'
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={titleColWidth}>
                                Authors
                            </Col>
                            <Col sm={mainColWidth}>
                                <FormControl
                                    type="text"
                                    value={this.state.genus.authors}
                                    placeholder="Authors"
                                    onChange={this.handleChangeInput}
                                />
                                <FormControl.Feedback />
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="family"
                            bsSize='sm'
                        >
                            <Col componentClass={ControlLabel} sm={titleColWidth}>
                                Family
                            </Col>
                            <Col sm={mainColWidth}>
                                <Typeahead
                                    id="family-autocomplete"
                                    options={this.state.families}
                                    selected={this.state.families.filter(f => f.id === this.state.genus.id_family)}
                                    onChange={(selected) => this.handleChangeTypeahead(selected, 'id_family')}
                                    placeholder="Start by typing a family in the database" />
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="family-apg"
                            bsSize='sm'
                        >
                            <Col componentClass={ControlLabel} sm={titleColWidth}>
                                Family APG
                            </Col>
                            <Col sm={mainColWidth}>
                                <Typeahead
                                    id="family-autocomplete"
                                    options={this.state.familiesApg}
                                    selected={this.state.familiesApg.filter(f => f.id === this.state.genus.id_family_apg)}
                                    onChange={(selected) => this.handleChangeTypeahead(selected, 'id_family_apg')}
                                    placeholder="Start by typing a family APG in the database" />
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="vernacular"
                            bsSize='sm'
                        >
                            <Col componentClass={ControlLabel} sm={titleColWidth}>
                                Vernacular
                            </Col>
                            <Col sm={mainColWidth}>
                                <FormControl
                                    type="text"
                                    value={this.state.genus.vernacular}
                                    placeholder="Vernacular name"
                                    onChange={this.handleChangeInput}
                                />
                                <FormControl.Feedback />
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default GeneraModal;