import React from 'react';

import { Grid } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

import TabledPage from '../wrappers/TabledPageParent';

import config from '../../config/config';

const columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'name',
        text: 'Name'
    },
    {
        dataField: 'vernacular',
        text: 'Vernacular'
    }
];

const formatResult = data => {
    return data.map(d => ({
        id: d.id,
        name: d.name,
        vernacular: d.vernacular
    }));
}

const FamiliesAPG = ({ data, onTableChange }) => {

    return (
        <div id='families-apg'>
            <Grid id='functions-panel'>
                <h2>Families</h2>
            </Grid>
            <Grid fluid={true}>
                <BootstrapTable hover striped condensed
                    keyField='id'
                    data={formatResult(data)}
                    columns={columns}
                    filter={filterFactory()}
                    onTableChange={onTableChange}
                />
            </Grid>
        </div>
    );
}

export default TabledPage({
    getAll: config.uris.familiesApgUri.getAllWOrderUri,
    getCount: config.uris.familiesApgUri.countUri,
})(FamiliesAPG);
