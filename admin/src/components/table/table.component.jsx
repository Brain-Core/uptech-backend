import React from "react";
import "./table.component.css";
import { DataGrid } from "@material-ui/data-grid";



function Table({rows, columns}) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid disableSelectionOnClick rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default Table;
