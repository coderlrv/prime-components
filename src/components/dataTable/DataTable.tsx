import React from 'react';
import { DataTable, DataTableProps, DataTableValue } from "primereact/datatable";
import { classNames } from "primereact/utils";

interface CustomDatableProps extends DataTableProps<DataTableValue[]> { };

const CustomDataTable: React.FC<CustomDatableProps> = (props) => {

  return (
    <DataTable
      dataKey={props.id || "id"}
      paginator
      stripedRows
      showGridlines
      rows={props.rows || 10}
      rowsPerPageOptions={[5, 10, 25]}
      className={classNames("datatable-responsive")}
      size={props.size || 'small'}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      emptyMessage={<div className="text-center">Nenhum registro encontrado.</div>}
      {...props}
    >
      {props.children}
    </DataTable>
  );
}

export {
  CustomDataTable
}
