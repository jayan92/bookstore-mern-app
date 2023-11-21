import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import apiClient from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const ShowBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/books/" + id)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-8">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full flex flex-col border-2 border-sky-400 rounded-xl p-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Id</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{book._id}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Title</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{book.title}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Author</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{book.author}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{book.publishYear}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Description</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{book.description}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Create Time</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{new Date(book.createdAt).toString()}</span>
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                    </th>
                    <td className="px-6 py-4">
                      <span>{new Date(book.updatedAt).toString()}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
