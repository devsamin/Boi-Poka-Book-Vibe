import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams()
    console.log(bookId)
    return (
        <div>
            <h3>Book Details : {bookId}</h3>
        </div>
    );
};

export default BookDetails;