import React, { ChangeEvent, FC } from "react";

type Props = {
  currency: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Currency: FC<Props> = ({ currency, handleChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="currencies"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select Currency:
      </label>
      <select
        id="currencies"
        name="currency"
        value={currency}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="CAD">NGN</option>
      </select>
    </div>
  );
};

export default Currency;
