export const useFunctions = () => {

  const allFilter = (setFilteredData: any, data: any) => {
    setFilteredData(data);
  };

  const futureFilter = (setFilteredData: any, data: any) => {
    const newData = data?.filter((data: any) => {
      return new Date(data.date) > new Date();
    });

    setFilteredData(newData);
  }

  const pastFilter = (setFilteredData: any, data: any) => {
    const newData = data?.filter((data: any) => {
      return new Date(data.date) < new Date();
    });

    setFilteredData(newData);
  };

  const searchFilter = (setFilteredData: any, data: any, search: string) => {
    const newData = data?.filter((data: any) => {
      return data.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(newData);
  };

  const dateFilter = (setFilteredData: any, data: any, e: any) => {
    const newData = data?.filter((data: any) => {
      return data.date.includes(e);
    });

    setFilteredData(newData);
  };

  return [allFilter, futureFilter, pastFilter, searchFilter, dateFilter] as const;
};
