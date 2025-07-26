import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    // console.log(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    // console.log(typeof(bookId))
    // console.log(typeof(data[0].bookId))
    console.log(book)
    console.log(data)
    return (
        <div>
            <h3>Book Details : {bookId}</h3>
        </div>
    );
};

export default BookDetails;