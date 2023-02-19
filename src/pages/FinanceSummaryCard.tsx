function convertToPercentage(val1: number, val2: number) {
  return ((val1 / val2) * 100).toFixed(2);
}

function FinanceCard(props: any) {
  const finItem = props.finItem;
  const salarySum = props.salarySum;

  const income = "#064e3b";
  const expense = "#7c2d12";
  const liability = "#7f1d1d";

  if (finItem.Type === "Expenses") {
    return (
      <div
        className="bg-[#662286c2]
            flex-col justify-center flex items-center flex-shrink-0 rounded-lg
            w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-base">
          {convertToPercentage(finItem.Amount, salarySum)}%
        </p>
      </div>
    );
  }

  if (finItem.Type === "Liabilities") {
    return (
      <div
        className="bg-[#9b772991]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-base">
          {convertToPercentage(finItem.Amount, salarySum)}%
        </p>
      </div>
    );
  }

  if (finItem.Type === "Available") {
    return (
      <div
        className="bg-[#3aa73aa2]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-base">
          {convertToPercentage(finItem.Amount, salarySum)}%
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-[#686868]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[120px] h-[80px]"
    >
      <p className="text-xl font-light ">{finItem.Type}</p>
      <p className="text-lg font-base">
        {convertToPercentage(finItem.Amount, salarySum)}%
      </p>
    </div>
  );
}

export default FinanceCard;
