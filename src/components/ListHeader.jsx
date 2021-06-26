import React from 'react';
import RepositorySorter from './RepositorySorter';
import RepositoryFilter from './RepositoryFilter';

const ListHeader = ({ sortValue, sortCb, searchValue, searchCb }) => {
  return (
    <>
    <RepositoryFilter searchValue={searchValue} searchCb={searchCb} />
    <RepositorySorter sortValue={sortValue} sortCb={sortCb} />
    </>
  );
};

export default ListHeader;