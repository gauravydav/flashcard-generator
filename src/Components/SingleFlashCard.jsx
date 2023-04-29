/*import React from "react";
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteCard} from "../Page/Redux/mySlice"

const SingleFlashCard = ({ card }) => {
  const { id, groupname, description } = card;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };
  return (
    <>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4">
          <h1 class="text-xl font-semibold mb-2"> {id} {groupname}</h1>
          <p1 class="text-gray-600">{description}</p1>
        </div>
        <div class="p-4 flex justify-between items-center">
          <Link to={`/flashCardDetails/${id}`}>
            <button className="p-2 text-black-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0l-3 3m0 0l-3-3m3 3V9"
                />
              </svg>
              View
            </button>
          </Link>
          <button
            onClick={handleDelete}
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleFlashCard;*/
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCard } from "../Page/Redux/mySlice";
import { GrView } from 'react-icons/gr';
import { MdDelete} from 'react-icons/md';


const SingleFlashCard = ({ card }) => {
  const { id, groupname, description } = card;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">
          {id} {groupname}
        </h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <Link to={`/flashCardDetails/${id}`}>
          <button className="p-2 text-black-600 hover:text-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <GrView/>
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-600 text-white hover:bg-red-700 rounded-lg border border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
           <MdDelete/>
        </button>
      </div>
    </div>
  );
};

export default SingleFlashCard;

