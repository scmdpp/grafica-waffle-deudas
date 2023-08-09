import React from "react";
import { render } from "react-dom";
import { ResponsiveWaffle } from "@nivo/waffle";

const data = [
  {
    id: "Ingresos",
    label: "Ingresos",
    value: 50,
    color: "#0A3323"
  },
  {
    id: "Deuda sector real",
    label: "Deuda sector real",
    value: 5,
    color: "#FFA64B"
  },
  {
    id: "Deuda sector financiero",
    label: "Deuda sector financiero",
    value: 10,
    color: "#ED5C15"
  },
  {
    id: "Deuda en vivienda",
    label: "Deuda en vivienda",
    value: 30,
    color: "#6C9FFF"
  },
  {
    id: "Deuda disponible",
    label: "Deuda disponible",
    value: 5,
    color: "#C5F5CA"
  }
];

const BarLegend = ({ height, legends, width }) => (
  <React.Fragment>
    {legends.map((legend) => (
      <BoxLegendSvg
        key={JSON.stringify(legend.data.map(({ id }) => id))}
        {...legend}
        containerHeight={height}
        containerWidth={width}
      />
    ))}
  </React.Fragment>
);

const keys = ["one", "two"];
const customColors = ["#0A3323", "#FFA64B", "#ED5C15", "#6C9FFF", "#C5F5CA"];

render(
  <div style={{ height: "500px" }}>
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={customColors}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.3]]
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          itemTextColor: "#777",
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
                itemBackground: "#f7fafb"
              }
            }
          ]
        }
      ]}
    />
  </div>,
  document.getElementById("root")
);
