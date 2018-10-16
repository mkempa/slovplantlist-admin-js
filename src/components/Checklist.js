import React, { Component } from 'react';
import axios from 'axios';

import CPaginator from './CPaginator';
import CTable from './CTable';
import LosName from './LosName';

import config from '../config/config';

class Checklist extends Component {

    state = {
        nomenclature: [],
        numOfRecords: 0,
        activePage: 1,
    };

    handlePageChange(activePage) {
        const page = Math.max(activePage - 1, 0);
        const limit = config.format.recordsPerPage;
        const offset = page * limit;
        return this.fetchRecords(offset, limit).then(response => {
            const noms = this.formatResult(response);
            this.setState({ nomenclature: noms });
        }).catch(e => console.error(e));
    }

    formatResult(result) {
        return result.data.map(d => {
            return {
                id: d.id,
                type: d.ntype,
                name: <LosName key={d.id} nomen={d} format='plain' />,
                publication: d.publication,
                acceptedName: <LosName key={`acc${d.id}`} nomen={d.accepted} format='plain' />
            }
        });
    }

    fetchRecords(offset, limit) {
        return axios.get(`http://localhost:3001/api/nomenclatures?filter={"offset":${offset},"limit":${limit},"include":"accepted"}`);
    }

    componentDidMount() {
        return axios.get('http://localhost:3001/api/nomenclatures/count').then(response => {
            this.setState({ numOfRecords: response.data.count });
            return this.fetchRecords(0, config.format.recordsPerPage);
        }).then(response => {
            const noms = this.formatResult(response);
            this.setState({ nomenclature: noms });
        }).catch(e => console.log(e));
    }

    render() {
        const header = ["ID", "Type", "Name", "Publication", "Accepted name"];
        console.log(this.state.numOfRecords);
        return (
            <div id='checklist'>
                <CPaginator 
                    totalItems={this.state.numOfRecords} 
                    recordsPerPage={config.format.recordsPerPage} 
                    onHandleSelect={(activePage) => this.handlePageChange(activePage)} 
                />
                <CTable head={header} rows={this.state.nomenclature} />
            </div>
        );
    }
}

export default Checklist;