import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import FinanceSummaryCard from "./FinanceSummaryCard";

function PieChart(props: any) {
  var totalSum = 0;

  const testData = props.testData;
  testData.forEach((item: any) => {
    totalSum += item.Amount;
  });

  const theme = {
    axis: {
      textColor: "#eee",
      fontSize: "14px",
      tickColor: "#eee",
    },
    grid: {
      stroke: "#888",
      strokeWidth: 1,
    },
  };

  return (
    <ResponsivePie
      data={testData}
      id="Type"
      value="Amount"
      valueFormat={" >-$"}
      colors={{ scheme: "accent" }}
      margin={{ top: 60, right: 110, bottom: 80, left: 110 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#f4f4f5"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      tooltip={(input) => {
        return (
          <FinanceSummaryCard finItem={input.datum.data} salarySum={totalSum} />
        );
      }}
      defs={[
        {
          id: "Income",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "Expense",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Expense",
          },
          id: "dots",
        },
        {
          match: {
            id: "Expense",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#f4f4f5",
              },
            },
          ],
        },
      ]}
    />
  );
}

export default PieChart;
