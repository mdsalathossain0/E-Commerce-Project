import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart1 from '../assets/cart1.png'
import Cart from '../components/Cart'
import Flex from '../components/Flex'

import axios from 'axios';



function Items({ currentItems }) {
  return (
    <>
      
        {currentItems &&
        currentItems.map((item) => (
          <div className='mb-5'>
            <Cart image={item.thumbnail} title={item.title} price={item.price} color='black' offer='New'/>
          </div>
        ))}
      
    </>
  );
}

function Paginate({ itemsPerPage }) {
  let [allitem, setAllitem]=useState([])
  useEffect(()=>{
   async function allData(){

      let data =await axios.get('https://dummyjson.com/products')
      setAllitem(data.data.products)
    }
    allData()
  },[])
console.log(allitem.length)
  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allitem.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allitem.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allitem.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
     <div className='mt-12 flex justify-between items-center'>
       <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex "
        pageLinkClassName=" py-2.5 px-4 text-first font-san text-sm border border-sixth mr-4 hover:bg-second hover:text-white duration-300"
        activeLinkClassName="bg-second text-white"
      />
      <p className='text-sm text-first font-san leading-7'>Products from {itemOffset + 1} to {endOffset<allitem.length ? endOffset:allitem.length} of {allitem.length}</p>
     </div>
    </>
  );
}
export default Paginate