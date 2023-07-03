import { useState } from 'react';

const usePagination = (numberItems, offsetInitial, totalProducts) => {
  const [offset, setOffset] = useState(offsetInitial);

  const handleNext = () => {
    offset + numberItems < totalProducts ? setOffset(offset + numberItems) : setOffset(offset);
  };

  const handlePrevious = () => {
    offset - 1 > offsetInitial ? setOffset(offset - numberItems) : setOffset(offset);
  };

  const currentOffset = offset;

  return {
    currentOffset,
    handleNext,
    handlePrevious,
  };
};

export default usePagination;
