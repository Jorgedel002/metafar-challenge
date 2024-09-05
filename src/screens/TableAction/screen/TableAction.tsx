import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { commonsStyles } from "@/src/components/Styles/Styles";
import Search from "@/src/components/Search/Search";
import useStocks from "@/src/hooks/useStocks/useStocks";
import useFetchStocks from "@/src/hooks/useFetchStocks/useFetchStocks";
import useResetPageOnItemsPerPageChange from "@/src/hooks/useResetPageOnItemsPerPageChange/useResetPageOnItemsPerPageChange";
import TableHeader from "@/src/screens/TableAction/components/TableHeader";
import TableRow from "@/src/screens/TableAction/components/TableRow";
import TablePagination from "@/src/screens/TableAction/components/TablePagination";

const TableAction = () => {
  const [getStocks, searchStocks, filteredStocks] = useStocks((state) => [
    state.getStocks,
    state.searchStocks,
    state.filteredStocks,
  ]);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, filteredStocks.length);

  
  useFetchStocks(getStocks);
  useResetPageOnItemsPerPageChange(itemsPerPage, setPage);

  return (
    <View style={commonsStyles.mainContainer}>
      <Search onSearch={searchStocks} />
      <DataTable style={{ marginTop: 30 }}>
        <TableHeader />
        {filteredStocks.slice(from, to).map((item, index) => (
          <TableRow key={index} item={item} />
        ))}
        <TablePagination
          page={page}
          itemsPerPage={itemsPerPage}
          filteredStocksLength={filteredStocks.length}
          onPageChange={setPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </DataTable>
    </View>
  );
};

export default TableAction;
