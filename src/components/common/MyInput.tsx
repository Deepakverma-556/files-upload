import React, { ChangeEventHandler } from "react";
interface InputProp {
  myPlaceholder: string;
  myValue: string;
  customId: string;
  customOnChange: ChangeEventHandler<HTMLInputElement>;
  customType: string;
}

const MyInput = ({
  myPlaceholder,
  myValue,
  customId,
  customOnChange,
  customType,
}: InputProp) => {
  return (
    <input
      type={customType}
      placeholder={myPlaceholder}
      onChange={customOnChange}
      value={myValue}
      id={customId}
      required
      className="outline-none border border-black rounded-xl py-2 text-black px-3 bg-white"
    />
  );
};

export default MyInput;
