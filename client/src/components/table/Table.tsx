import { DataGrid } from '@material-ui/data-grid'

function Table({ columns, data }:any) {
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
    )
}

export default Table
