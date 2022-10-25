import React from "react";
import { AiFillCloseCircle, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useRef } from "react";

const Sidebar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <button
        onClick={toggleCart}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span className="text-xl">
          <AiOutlineShoppingCart />
        </span>
      </button>
      <div
        ref={ref}
        className="sidebar h-screen w-72 absolute top-0 right-0 p-10 bg-blue-300 px-10 transform transition-transform translate-x-full"
      >
        <h2 className=" font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-3 text-2xl cursor-pointer text-red-800"
        >
          <AiFillCloseCircle />
        </span>
        <ol className=" list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Shoes - PoshHubz</div>
              <div className=" flex items-centre justify-center w-1/3 text-lg"><AiFillMinusCircle className="my-1 cursor-pointer text-green-900"/><span className="mx-2">1</span><AiFillPlusCircle className="my-1 cursor-pointer text-green-900"/>
              </div>
            </div>
          </li>
        </ol>
        <ol className=" list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Shoes - PoshHubz</div>
              <div className=" flex items-centre justify-center w-1/3 text-lg"><AiFillMinusCircle className="my-1 cursor-pointer text-green-900"/><span className="mx-2">1</span><AiFillPlusCircle className="my-1 cursor-pointer text-green-900"/>
              </div>
            </div>
          </li>
        </ol>
        <ol className=" list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Shoes - PoshHubz</div>
              <div className=" flex items-centre justify-center w-1/3 text-lg"><AiFillMinusCircle className="my-1 cursor-pointer text-green-900"/><span className="mx-2">1</span><AiFillPlusCircle className="my-1 cursor-pointer text-green-900"/>
              </div>
            </div>
          </li>
        </ol>
        <ol className=" list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Shoes - PoshHubz</div>
              <div className=" flex items-centre justify-center w-1/3 text-lg"><AiFillMinusCircle className="my-1 cursor-pointer text-green-900"/><span className="mx-2">1</span><AiFillPlusCircle className="my-1 cursor-pointer text-green-900"/>
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
        <button className="flex mx-2 mt-10 text-white bg-blue-600 border-0 py-2 px-2 focus:outline-none hover:bg-blue-800 rounded text-sm shadow-lg"><BsFillBagCheckFill className="m-1"/>Checkout</button>
        <button className="flex mx-2 mt-10 p text-white bg-blue-600 border-0 py-2 px-2 focus:outline-none hover:bg-blue-800 rounded text-sm shadow-lg">Clear Cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
