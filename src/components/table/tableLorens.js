import {useState, useEffect} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import {TableBtn} from "./block/Price/tableBtn";
import {TablePriceMobile} from "./block/Price/tablePriceMobile";
import {TableCurrencyName} from "./block/Price/tableCurrencyName";


export const TabLorens = () => {
    
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState();

    useEffect(() => {
        fetch('./CoinPrices.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData.data.coins))

        // add a "$" sign to the number and format it
        const currencyFormatter = (params) => {
            return '$' + Intl.NumberFormat().format(params.value);
        };

        const idFormatter = (params) => {
            return params.value * 1 + 1;
        };

        // Columns that are output on the desktop version
        const columnDefsDesktop = [
            { headerName: '#', flex:0.6, colId:"first" , valueFormatter: idFormatter , valueGetter: 'node.id', autoHeight:true  },
            { headerName: 'Currency', flex: 1.5, cellRenderer: TableCurrencyName, autoHeight:true},
            { headerName: 'Price',  flex: 1.3, field: 'price', valueFormatter: currencyFormatter , autoHeight:true },
            { headerName: '24 Change',flex: 1, field: 'change', autoHeight:true },
            { headerName: 'Market Cap', flex: 1, field: 'marketCap', valueFormatter: currencyFormatter , autoHeight:true },
            { cellRenderer: TableBtn,  flex: 1,autoHeight:true},
        ];
    
        // Columns that are output on the mobile version
        const columnDefsModile = [
            { cellRenderer: TableCurrencyName, flex: 1, autoHeight:true},
            { cellRenderer: TablePriceMobile, maxWidth: 110,  autoHeight:true},
            { cellRenderer: TableBtn, maxWidth: 60, autoHeight:true},
        ];

        if(window.screen.width < 768) {
            setColumnDefs(columnDefsModile);
        } else {
            setColumnDefs(columnDefsDesktop);
        }
    
    }, []);

    const defaultColDef = {
        resizable: true,
        sortable: true,
        wrapText: true
    };
    const paginationPageSize = 11;
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
