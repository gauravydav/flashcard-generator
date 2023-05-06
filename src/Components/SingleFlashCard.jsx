import React from "react";
import { useDispatch } from "react-redux"; // importing useDispatch hook from react-redux library
import { Link } from "react-router-dom";
import { deleteCard } from "../Page/Redux/mySlice"; // importing deleteCard function from mySlice.js file
import { GrView } from "react-icons/gr"; // importing GrView icon from react-icons/gr library
import { MdDelete } from "react-icons/md"; // importing MdDelete icon from react-icons/md library
import { useState } from "react"; // importing useState hook from react library

const SingleFlashCard = ({ card }) => {
  // destructuring card object from props
  const { id, groupname, description, flashterms } = card; // destructuring properties from card object
  const flashtermsLength = flashterms.length; // getting length of flashterms array
  const [imageURL, setImageURL] = useState(
    // creating state for imageURL and setting initial value
    "https://tse4.mm.bing.net/th?id=OIP.HayobH4JNWIwSjCB-3CibAHaF7&pid=Api&P=0"
  );

  const dispatch = useDispatch(); // creating a dispatch function to call deleteCard function

  const handleDelete = () => {
    // creating a function to handle card deletion
    dispatch(deleteCard(id)); // calling deleteCard function with card id as argument
  };

  return (
    <div className="border border-solid border-grey-300 shadow-md">
      <div className="flex items-center px-3 pt-3 overflow-hidden">
        {imageURL ? (
          <img
            className="w-16 h-16 object-cover rounded-full mr-3"
            src={imageURL}
            alt={groupname}
          />
        ) : (
          <span className="flex items-center justify-center leading-3 text-gray-400 bg-red-100 h-12 w-12 rounded-full text-xs">
            No Image
          </span>
        )}

        <div className="flex flex-col justify-between ml-3 truncate">
          <div>
            <h1
              data-testid="cardname"
              className="font-bold text-sm overflow-hidden text-ellipsis"
            >
              {groupname}
            </h1>
            <p className="text-xs">{flashtermsLength} cards</p>
          </div>
          <div className="px-4 my-1.5 h-24 overflow-y-scroll">
            <div className="h-full">
              <p className="break-words whitespace-pre-wrap">{description}</p>
            </div>
          </div>
          {/*<div className="px-4 my-1.5 h-24 text-sm overflow-hidden">
        <p className="break-words whitespace-pre-wrap">{description}</p>
      </div>*/}
          <div className="flex items-center justify-between">
            <Link to={`/flashCardDetails/${id}`}>
              <button className="flex items-center text-yellow-700 font-semibold text-sm">
                <span className="mr-1">
                  <GrView />
                </span>
                View
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 bg-red-600 text-white hover:bg-red-700 rounded-lg border border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFlashCard;
