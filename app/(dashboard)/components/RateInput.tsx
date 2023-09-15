import { ChangeEvent, FC } from "react";

type Props = {
  id: string;
  label: string;
  name: string;
  value: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
};

const RateInput: FC<Props> = ({ label, name, id, value, handleChange }) => {
  return (
    <div className="w-full flex flex-col md:space-y-2">
      <label htmlFor={id}>{label}:</label>
      <div className="flex items-center bg-slate-800  rounded-md overflow-hidden">
        <input
          type="text"
          name={name}
          id={id}
          value={value === 0 ? undefined : value}
          min={1}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="0.0"
          onChange={(e)=> handleChange(e)}
          className="w-full bg-transparent p-2 appearance-none leading-tight focus:outline-none"
        />
        <span className="p-2  bg-slate-700">%</span>
      </div>
    </div>
  );
};

export default RateInput;
