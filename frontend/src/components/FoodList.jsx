import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import { FoodCard } from "./FoodCard";
const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" mx-[120px] ">
      <h1 className="text-[28px] font-medium ">Top dishes near you.</h1>
      <hr className="border-gray-400 border-t-4 border-b-0 my-4 pb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[50px]">
        {food_list.map((food) => {
          return category === "All" || category === food.category ? (
            <FoodCard foodprop={food} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default FoodList;
