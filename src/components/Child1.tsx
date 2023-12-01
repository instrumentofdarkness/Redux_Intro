import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store";

export default function Child1() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const productValue = useSelector((state: RootState) => state.product.product);

  return <div>
    {counterValue}, {productValue}
    </div>;
}
