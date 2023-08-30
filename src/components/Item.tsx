import React, { Dispatch, SetStateAction } from "react";

type ItemPros = {
  value: string;
  id: string;
  ans: string;
  setMark: Dispatch<SetStateAction<any>>;
  setSelectState: Dispatch<SetStateAction<any>>;
};

const Item = ({
  value,
  id,
  ans,
  setMark,
  setSelectState,
}: ItemPros): JSX.Element => {
  const [selected, setSelected] = React.useState<boolean>(false);
  const [init, setInit] = React.useState(true);
  const ref = React.useRef<HTMLLabelElement>(null);

  let isEqual = (): boolean => {
    if (selected) {
      return value === ans;
    }
    return false;
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (_) => {
    setSelected((prev) => !prev);
    setSelectState(true);
    setInit(false);
    if (value === ans) {
      setMark((prev: number) => prev + 1);
      console.log("You got 1+ mark");
    }
  };
  return (
    <div className=" my-2 w-[300px] ">
      <input
        type="radio"
        id={id}
        name="quiz"
        onChange={onChangeHandler}
        className="cursor-pointer"
      />
      <label
        htmlFor={id}
        ref={ref}
        className={`ml-4 text-xl cursor-pointer ${
          isEqual() ? "text-green-700" : init ? "" : "text-red-700"
        } `}
      >
        {value}
      </label>
    </div>
  );
};

export default Item;
