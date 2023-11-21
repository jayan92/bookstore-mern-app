import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import apiClient from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const handleDeleteBook = () => {
    setLoading(true);
    apiClient
      .delete("/books/" + id)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="p-4">
        <BackButton />
        {loading ? <Spinner /> : ""}
        <h1 className="text-3xl my-8">Delete Book</h1>
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

          <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
