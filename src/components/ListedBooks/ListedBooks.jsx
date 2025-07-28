import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStorReadlist } from "../../utility/AddtoDB";
import { key } from "localforage";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allbooks = useLoaderData();

  const [readbook, setreadbook] = useState([])
  useEffect(()=>{
    const StorReadsBooks = getStorReadlist();

    const readbooks = allbooks.filter(book => StorReadsBooks.includes(book.bookId))
    setreadbook(readbooks)
  },[]);

  return (
    <div>
      <h2>{allbooks.length}</h2>
      <Tabs>
        <TabList>
          <Tab>Marks As Reads : {readbook.length}</Tab>
          <Tab>Wish Lists</Tab>
        </TabList>

        <TabPanel>
          <h2>Reads Books</h2>
          {
            readbook.map(book=> <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
