import { renderHook } from "@testing-library/react-hooks";
import exp from "constants";
import useJustForTest, { User } from "../../hooks/useJustForTest";

test("show multiple examples", () => {
  const { result } = renderHook(() => useJustForTest());
  const {
    testBoolTrue,
    testAssertEquals,
    testToBeInstanceOf,
    testToHaveReturned,
    testToBeLessThan,
    testToBeNull,
    testToStrictEqual,
    testToContainEqual
  } = result.current;

  expect(testBoolTrue()).toBeTruthy();
  expect(testAssertEquals()).toEqual("same");
  expect(1).not.toBeNaN();
  expect(testToBeInstanceOf()).toBeInstanceOf(User);
  const fnTest = jest.fn(testToHaveReturned);
  fnTest();
  expect(fnTest).toHaveReturnedWith(0);

  const toContain = {
    a : "a", 
    b : "b",
  }
  expect(testToContainEqual()).toContainEqual(toContain);
  
  expect(testToStrictEqual()).toStrictEqual([{ delicious: true, sour: false }]);
  expect(testToBeLessThan()).toBeLessThan(1001);
  expect(testToBeNull()).toBeNull();


  



});


