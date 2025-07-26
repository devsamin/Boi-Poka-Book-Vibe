import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="bg-blue-200 py-6 rounded-2xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <button key={index} className="btn text-green-500" disabled="disabled">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  aria-label="5 star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
