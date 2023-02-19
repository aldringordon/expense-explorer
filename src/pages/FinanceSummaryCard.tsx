function FinanceCard(props: any) {
  const finItem = props.finItem;

  console.log(finItem);

  const income = "#064e3b";
  const expense = "#7c2d12";
  const liability = "#7f1d1d";

  if (finItem.Type === "Expense") {
    return (
      <div
        className="bg-[#662286c2]
            flex-col justify-center flex items-center flex-shrink-0 rounded-lg
            w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-light ">${finItem.Amount}</p>
      </div>
    );
  }

  if (finItem.Type === "Liability") {
    return (
      <div
        className="bg-[#9c7d3a7c]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-light ">${finItem.Amount}</p>
      </div>
    );
  }

  if (finItem.Type === "Income") {
    return (
      <div
        className="bg-[#3aa73aa2]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[120px] h-[80px]"
      >
        <p className="text-xl font-light ">{finItem.Type}</p>
        <p className="text-lg font-light ">${finItem.Amount}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-[#686868]
              flex-col justify-center flex items-center flex-shrink-0 rounded-lg
              w-[250px] h-[120px]"
    >
      <p className="text-xl font-light ">{finItem.Name}</p>
      <p className="text-base font-light ">
        {finItem.Type} ({finItem.Subtype})
      </p>
      <p className="text-lg font-light ">
        ${finItem.Amount} {finItem.Frequency}
      </p>
    </div>
  );
}

export default FinanceCard;
