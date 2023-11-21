import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegTrashAlt, FaRegEdit, FaInfo, FaRegEye } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-center items-start">
        <div className="w-full flex justify-between items-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
          </a>
          <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {book.publishYear}
          </span>
        </div>

        <p className="flex justify-start items-center gap-x-2 mb-3 font-normal text-blue-600 dark:text-gray-400">
          <SlUser />
          {book.author}
        </p>

        <p className="text-gray-500 whitespace-normal dark:text-gray-400">{book.description}</p>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-blue-700 border border-blue-700 hover:bg-blue-400 hover:text-white hover:border-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
        >
          <FaRegEye className="text-xl" />
        </button>
        <button
          type="button"
          onClick={() => navigate(`/books/details/${book._id}`)}
          className="text-green-700 border border-green-700 hover:bg-green-400 hover:text-white hover:border-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
        >
          <FaInfo className="text-xl" />
        </button>
        <button
          type="button"
          onClick={() => navigate(`/books/edit/${book._id}`)}
          className="text-yellow-700 border border-yellow-700 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
        >
          <FaRegEdit className="text-xl" />
        </button>
        <button
          type="button"
          onClick={() => navigate(`/books/delete/${book._id}`)}
          className="text-red-700 border border-red-700 hover:bg-red-400 hover:text-white hover:border-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
        >
          <FaRegTrashAlt className="text-xl" />
        </button>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
