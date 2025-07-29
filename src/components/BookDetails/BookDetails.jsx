import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addTostorReadlist, addTostorWishlist } from '../../utility/AddtoDB';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    // console.log(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const {image, bookName } = book

    // console.log(typeof(bookId))
    // console.log(typeof(data[0].bookId))
    // console.log(book)
    // console.log(data)
    const hendalmarkAsread = (id) =>{
        addTostorReadlist(id)
    }
    const hendalWishlist = (id) =>{
        addTostorWishlist(id)
    }
    return (
        <div>
            <Helmet>
                <title>Book Details {bookId}</title>
            </Helmet>
            <h3>Book Details : {bookId}</h3>
            < img className='w-60' src={image} alt="" />
            <h3>{bookName}</h3>
            <div className='flex gap-3 my-7'>
                <button onClick={()=>hendalmarkAsread(id)} className="btn btn-outline btn-accent">Marks As Read</button>
            <button onClick={()=> hendalWishlist(id)} className="btn btn-outline btn-secondary">Add Wish List </button>
            </div>
        </div>
    );
};

export default BookDetails;