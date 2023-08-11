import { DeleteIcon } from "@/components/icons/Icons";
import React, { ChangeEvent } from "react";
import { Service } from "./InvoiceForm";

type Props = {
  service: Service;
  index: number;
  remove: (index: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ServiceForm = ({
  service,
  index,
  remove,
  handleChange
}: Props) => {
  
  

  return (
    <div className="flex gap-5">
      <div>
        <label htmlFor={`services.${index}.serviceName`}>Service</label>
        <input
          type="text"
          name={`services.${index}.serviceName`}
          id={`services.${index}.serviceName`}
          value={service.serviceName}
          required
          aria-required
          onChange={handleChange}
          placeholder="service name"
          aria-label="Service Name"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id={`services.${index}.serviceName`}
          name={`services.${index}.serviceName`}
          min={1}
          inputMode={"numeric"}
          pattern="[0-9]*"
          value={service.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          aria-required={true}
          arial-label="Quantity"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id={`services.${index}.serviceName`}
          name={`services.${index}.serviceName`}
          min={1}
          inputMode={"numeric"}
          pattern="[0-9]*"
          value={service.price}
          onChange={handleChange}
          placeholder="price"
          required
          aria-required={true}
          arial-label="Price"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="total">Total</label>
        <input
          type="text"
          min={1}
          inputMode={"numeric"}
          pattern="[0-9]*"
          readOnly
          value={service.quantity * service.price}
          onChange={handleChange}
          placeholder={""}
          required
          aria-required={true}
          arial-label="Total"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-800 leading-tight focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={()=> remove(index)}
        className="p-2 bg-gray-700 text-red-500"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ServiceForm;
