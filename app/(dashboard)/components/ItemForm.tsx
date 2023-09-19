import { ItemDocument } from "@/app/types/types";
import { DeleteIcon } from "@/components/icons/Icons";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent } from "react";
import { InitialValues } from "./InvoiceForm";

type Props = {
  item: ItemDocument;
  index: number;
  errors: string | FormikErrors<ItemDocument> | undefined
  remove: (index: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  touched: FormikTouched<InitialValues>;
};

const ItemForm = ({ item, index, errors, remove, handleChange, handleBlur, touched }: Props) => {
  return (
      <div className="flex items-end gap-5">
        <div className="flex flex-row basis-5/6 md:flex-col">
          <label htmlFor={`items.${index}.description`}>Description</label>
          <input
            type="text"
            name={`items.${index}.description`}
            id={`items.${index}.description`}
            value={item.description}
            aria-required
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="item description"
            aria-label="Service description"
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none ${touched && errors?.description ? "border-red-500" : "border-slate-500" }`} />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor={`items[${index}].quantity`}>Qty</label>
          <input
            type="number"
            id={`items.${index}.quantity`}
            name={`items.${index}.quantity`}
            min={1}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Quantity"
            aria-required={true}
            arial-label="Quantity"
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none ${touched && errors?.quantity ? "border-red-500" : "border-slate-500"}`}
          />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor={`items[${index}].unitPrice`}>Price</label>
          <input
            type="text"
            id={`items.${index}.unitPrice`}
            name={`items.${index}.unitPrice`}
            min={0}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.unitPrice == 0 ? "" : item.unitPrice}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="0.0"
            aria-required={true}
            arial-label="Price"
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none ${touched && errors?.unitPrice ? "border-red-500" : "border-slate-500"}`}
          />
        </div>
        <div className="md:basis-[7%]">
          <label htmlFor={`items[${index}].totalPrice`}>Total</label>
          <input
            type="text"
            id={`items.${index}.totalPrice`}
            name={`items.${index}.totalPrice`}
            min={0}
            inputMode={"numeric"}
            pattern="[0-9]*"
            value={item.unitPrice === 0 ? undefined : (item.totalPrice = item.quantity * item.unitPrice)}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="0"
            arial-label="totalPrice"
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-500  leading-tight focus:outline-none bg-gray-800 ${touched && errors?.totalPrice ? "border-red-600" : ""}`}
          />
        </div>
        
        <button
          type="button"
          onClick={() => remove(index)}
          className="w-min h-min p-2 bg-red-600 text-white rounded-lg"
        >
         <DeleteIcon />
        </button>
      </div>
  );
};

export default ItemForm;
