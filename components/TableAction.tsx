import React from 'react';
import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Text } from 'react-native';
import useFetchStocks from '../hooks/useFetchStocks';
import LoadingSpinner from './LoadingSpinner';

const TableAction = () => {
    const {stocks, error, loading, reload} = useFetchStocks();
    const [page, setPage] = useState<number>(0);
    const [numberOfItemsPerPageList] = useState<number[]>([10, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState<number>(numberOfItemsPerPageList[0]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, stocks.length);

    if (error) return <Text>{error}</Text>;

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage])


    return (
      <>
        {loading ?
                  <LoadingSpinner/>
                  :
                  <DataTable >
                    <DataTable.Header>
                        <DataTable.Title>Simbolo</DataTable.Title> 
                        <DataTable.Title>Nombre</DataTable.Title>
                        <DataTable.Title>Moneda</DataTable.Title>
                        <DataTable.Title>Tipo</DataTable.Title>   
                    </DataTable.Header>

                    {
                      stocks.slice(from,to).map((item) => (
                        <DataTable.Row>
                          <DataTable.Cell>{item.symbol}</DataTable.Cell>
                          <DataTable.Cell>{item.name}</DataTable.Cell>
                          <DataTable.Cell>{item.currency}</DataTable.Cell>
                          <DataTable.Cell>{item.type}</DataTable.Cell>
                        </DataTable.Row>
                      ))
                    }

                    <DataTable.Pagination
                      page={page}
                      numberOfPages={Math.ceil(stocks.length / itemsPerPage)}
                      onPageChange={(page) => setPage(page)}
                      label={`${from + 1}-${to} de ${stocks.length}`}
                    /> 
                  </DataTable>
        }
      </>
        
    );
}

export default TableAction;
