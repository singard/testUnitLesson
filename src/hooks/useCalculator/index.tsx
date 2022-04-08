const useCalculator = () => {
  const addition = (value1: string, value2: string) => {
    return Number(Number(value1) + Number(value2)).toString();
  };
  const substraction = (value1: string, value2: string) => {
    return Number(Number(value1) - Number(value2)).toString();
  };  
  const square = (value1: string) => {
    return Number(Math.sqrt(Number(value1))).toString();
  };
  return {
    addition,
    substraction,
    square
  };
};

export default useCalculator;
