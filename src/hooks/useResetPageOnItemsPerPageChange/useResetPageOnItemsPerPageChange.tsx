import { useEffect } from "react";

const useResetPageOnItemsPerPageChange = (itemsPerPage: number, setPage: (page: number) => void) => {
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage, setPage]);
};

export default useResetPageOnItemsPerPageChange;