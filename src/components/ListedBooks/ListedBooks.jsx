import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStorReadlist } from "../../utility/AddtoDB";
import Book from "../Book/Book";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const allbooks = useLoaderData();
  const [sort, setsort] = useState('')

  const [readbook, setreadbook] = useState([]);
  useEffect(() => {
    const StorReadsBooks = getStorReadlist();

    const readbooks = allbooks.filter((book) =>
      StorReadsBooks.includes(book.bookId)
    );
    setreadbook(readbooks);
  }, []);
 const handelsort = sortType =>{
    setsort(sortType)

    if(sortType === 'totalpages'){
        const sortedlist = [...readbook].sort((a,b)=> a.totalPages - b.totalPages)
        setreadbook(sortedlist)
    }


 }
  return (
    <div>
      <Helmet>
        <title>Listed Books</title>
      </Helmet>
      <h2>{allbooks.length}</h2>
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {sort ? sort : 'Sort By'}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={()=> handelsort('totalpages')}>totalPages</a>
            </li>
            <li>
              <a onClick={()=> handelsort('rating')}>rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Marks As Reads : {readbook.length}</Tab>
          <Tab>Wish Lists</Tab>
        </TabList>

        <TabPanel>
          <h2>Reads Books</h2>
          {readbook.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
