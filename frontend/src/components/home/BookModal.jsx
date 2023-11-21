import { SlUser } from "react-icons/sl";
import { BsClock } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const BookModal = ({ book, onClose }) => (
  <div
    className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-6 flex flex-col justify-center items-start relative"
    >
      <IoIosClose className="absolute right-6 top-6 text-4xl text-black-600 cursor-pointer" onClick={onClose} />

      <h4 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h4>
      <p className="flex justify-start items-center gap-x-2 mb-3 font-normal text-blue-600 dark:text-gray-400">
        <SlUser />
        By {book.author}
      </p>
      <p className="flex justify-start items-center gap-x-2 mb-3 font-normal text-green-600 dark:text-gray-400">
        <BsClock />
        In {book.publishYear}
      </p>
      <p className="my-2">{book.description}</p>
    </div>
  </div>
);

export default BookModal;
