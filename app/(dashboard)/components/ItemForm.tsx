import { ItemDocument } from "@/app/types/types";
import { DeleteIcon } from "@/components/icons/Icons";
import React, { ChangeEvent } from "react";

type Props = {
  item: ItemDocument;
  index: number;
  remove: (index: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ItemForm = ({ item, index, remove, handleChange }: Props) => {

  return (
      <div className="flex items-end gap-5">
        <div className="flex flex-row basis-5/6 md:flex-col">
          <label htmlFor={`items.${index}.description`}>Description</label>
          <input
            type="text"
            name={`items.${index}.description`}
            id={`items.${index}.description`}
            value={item.name}
            required
            aria-required
            onChange={handleChange}
            placeholder="item description"
            aria-label="Service description"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
          />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor="quantity">Qty</label>
          <input
            type="number"
            id={`items.${index}.quantity`}
            name={`items.${index}.quantity`}
            min={1}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
            aria-required={true}
            arial-label="Quantity"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
          />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id={`items.${index}.unitPrice`}
            name={`items.${index}.unitPrice`}
            min={0}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.unitPrice == 0 ? "" : item.unitPrice}
            onChange={handleChange}
            placeholder="0.0"
            required
            aria-required={true}
            arial-label="Price"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
          />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor="price">Total</label>
          <input
            type="text"
            id={`items.${index}.totalPrice`}
            name={`items.${index}.totalPrice`}
            min={0}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.totalPrice = item.quantity * item.unitPrice}
            onChange={handleChange}
            placeholder="0.0"
            required
            aria-required={true}
            arial-label="totalPrice"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
          />
        </div>
        
        <button
          type="button"
          // disabled= {index > 0}
          onClick={() => remove(index)}
          className="w-min h-min p-2 bg-red-600 text-white rounded-lg"
        >
         <DeleteIcon />
        </button>
      </div>
  );
};

export default ItemForm;
