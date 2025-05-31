import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart1 from '../assets/cart1.png'
import Cart from '../components/Cart'
import Flex from '../components/Flex'

import data from '../Data'



function Items({ currentItems }) {
  return (
    <>
      <Flex className='gap-10 flex-wrap'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Cart image={Cart1} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
          </div>
        ))}
      </Flex>
    </>
  );
}

function Paginate({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Paginate