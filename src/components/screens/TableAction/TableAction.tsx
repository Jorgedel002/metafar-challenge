import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Link } from "expo-router";
import { commonsStyles } from "@/src/components/Styles/Styles";
import Search from "@/src/components/Search/Search";
import useStocks from "@/src/hooks/useStocks/useStocks";
import TableHeader from "@/src/components/screens/TableAction/components/TableHeader";
import TableRow from "@/src/components/screens/TableAction/components/TableRow";
import TablePagination from "@/src/components/screens/TableAction/components/TablePagination";

const TableAction = () => {
  const [getStocks, searchStocks, filteredStocks] = useStocks((state) => [
    state.getStocks,
    state.searchStocks,
    state.filteredStocks,
  ]);

  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState<number[]>([10, 10, 10]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    numberOfItemsPerPageList[0]
  );

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, filteredStocks.length);

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
