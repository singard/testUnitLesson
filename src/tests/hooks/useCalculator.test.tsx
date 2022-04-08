import { renderHook, act } from "@testing-library/react-hooks";
import useCalculatorView from "../../hooks/useCalculatorView";
import index from "../../hooks/useCalculator";
import useCalculator from "../../hooks/useCalculator";

test("show result", () => {
  const { result } = renderHook(() => useCalculator());
  const { addition,substraction,square } = result.current;

  expect(addition("1","1")).toEqual("2");
  expect(substraction("1","1")).toEqual("0");
  expect(square("9")).toEqual("4");

});