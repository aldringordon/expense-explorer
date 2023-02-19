function FinanceCard(props: any) {
  const finItem = props.finItem;

  return (
    <div
      className="bg-[#5b20b3b7] flex-col justify-center flex items-center flex-shrink-0 rounded-lg
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
