import React from "react";
import { DataTable } from "react-native-paper";
import { Link } from "expo-router";
import { Stock } from "@/src/interface/Stocks";

interface TableRowProps {
  item: Stock;
}

const TableRow = ({ item }: TableRowProps) => (
  <DataTable.Row>
    <DataTable.Cell>
      <Link
        href={{
          pathname: `/${item.symbol}`,
          params: {
            name: item.name,
          },
        }}
      >
        {item.symbol}
      </Link>
    </DataTable.Cell>
    <DataTable.Cell>{item.name}</DataTable.Cell>
    <DataTable.Cell>{item.currency}</DataTable.Cell>
    <DataTable.Cell>{item.type}</DataTable.Cell>
  </DataTable.Row>
);

export default TableRow;