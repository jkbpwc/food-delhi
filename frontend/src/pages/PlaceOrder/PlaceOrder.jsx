import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Button } from "@nextui-org/react";

const PlaceOrder = () => {
  const { subTotal } = useContext(StoreContext);
  const deliveryFee = 2;
  const subTotalFee = subTotal();
  return (
    <>
      <form className="p-[120px] ">
        <p className="text-[40px] pb-10 font-semibold">Delivery Information</p>
        <div className="grid grid-cols-[25%_25%_50%] gap-4 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last name"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Postal Code</label>
              <input
                type="text"
                placeholder="Enter your postal code"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-medium">Country</label>
              <input
                type="text"
                placeholder="Enter your country"
                className="border-2 border-gray-400 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 pl-16">
            <h1 className="text-[28px] text-neutral-900 font-bold">
              Cart Totals
            </h1>
            <div className="flex flex-row justify-between text-[20px] font-medium text-neutral-500">
              <span>items total</span>
              <span>${subTotalFee}</span>
            </div>

            <hr className="border-gray-400 border-t-1 border-b-0" />

            <div className="flex flex-row justify-between text-[20px] font-medium text-neutral-500">
              <span>delivery fee</span>
              <span>${subTotalFee ? deliveryFee : 0}</span>
            </div>

            <hr className="border-gray-400 border-t-1 border-b-0" />

            <div className="flex flex-row justify-between font-bold text-[24px] text-neutral-500">
              <span>Total</span>
              <span>${subTotalFee ? subTotalFee + deliveryFee : 0}</span>
            </div>

            {subTotalFee > 0 ? (
              <Button
                onClick={() => {}}
                className="w-[50%] h-12 text-[20px] font-semibold rounded-md mt-8 bg-orange-500 text-white"
              >
                PROCEED TO PAYMENT
              </Button>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
