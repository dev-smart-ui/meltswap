import {useState, useEffect} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import filter from '../../pages/status/img/filter.svg';

import {TableFromToName} from "./block/FromTo/tableFromToName";
import {ButtonStatus} from "./block/FromTo/buttonStatus";
import {Check} from "./block/FromTo/check";


export const TabFromTo = () => {
    
    const [rowData, setRowData] = useState();

    const columnDefs = [
        { headerName: 'Currency', cellRenderer: TableFromToName, colId:"first", flex: 1, minWidth: 200, autoHeight:true},
        { headerName: 'Status', cellRenderer: ButtonStatus , maxWidth: 150, autoHeight:true},
        { headerName: 'Exchange From', cellRenderer: Check,  maxWidth: 200, field: 'ticker', autoHeight:true},
        { headerName: 'Exchange To', cellRenderer: Check,  field: 'ticker', autoHeight:true},
        { headerName: 'Fixed Rate', cellRenderer: Check, maxWidth: 170,  field: 'supportsFixedRate', autoHeight:true},
    ];

    useEffect(() => {
        fetch('./FromBTCTo.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);

    const defaultColDef = {
        resizable: true,
        headerComponentParams: {
            template: `<div style="flex-direction: inherit;justify-content: start;" class="ag-cell-label-container" role="presentation">
            <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>  <img src=${filter} style="width:20px;margin-left:15px;"  alt="Filter" />
                </div>`,
        },
        sortable: true,
    };
    const paginationPageSize = 8;
    const domLayout = 'autoHeight';

    return (<div className="ag-theme-alpine" style={{width: '100%', height: '100%'}}>
       <AgGridReact 
            pagination={true}
            defaultColDef={defaultColDef} 
            rowData={rowData} 
            domLayout={domLayout}
            paginationPageSize={paginationPageSize}
            columnDefs={columnDefs}        
        />
    </div>
);
};
