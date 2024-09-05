import React from "react";
import { DataTable } from "react-native-paper";

const TableHeader = () => (
  <DataTable.Header>
    <DataTable.Title>Simbolo</DataTable.Title>
    <DataTable.Title>Nombre</DataTable.Title>
    <DataTable.Title>Moneda</DataTable.Title>
    <DataTable.Title>Tipo</DataTable.Title>
  </DataTable.Header>
);

export default TableHeader;