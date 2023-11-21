import React from "react";
import { FaInfo, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BooksTable = ({ books }) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Publish Year
            </th>
            <th scope="col" className="px-6 py-3">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr
                key={book._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.publishYear}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-left items-center gap-x-8">
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
