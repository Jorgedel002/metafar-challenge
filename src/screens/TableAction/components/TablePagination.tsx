import React from "react";
import { DataTable } from "react-native-paper";

interface TablePaginationProps {
  page: number;
  itemsPerPage: number;
  filteredStocksLength: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const TablePagination = ({
  page,
  itemsPerPage,
  filteredStocksLength,
  onPageChange,
  onItemsPerPageChange,
}: TablePaginationProps) => (
  <DataTable.Pagination
    page={page}
    numberOfPages={Math.ceil(filteredStocksLength / itemsPerPage)}
    onPageChange={onPageChange}
    label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, filteredStocksLength)} de ${filteredStocksLength}`}
  />
);

export default TablePagination;