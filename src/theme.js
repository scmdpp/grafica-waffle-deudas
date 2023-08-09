/*
  "grayscale" theme (VictoryTheme.grayscale)
  The grayscale is the default theme.
  Try changing it. You could start with `colors` or `fontSize`.
*/

const assign = Object.assign;

// Colors
const blue = "#1f9bb6";
const purple = "#e3429b";
const textBlack = "#343434";
const axisGrey = "#a9acbd";
const gridGrey = "#e0e1e6";

// Typography
const sansSerif = "'Open Sans', sans-serif";
const letterSpacing = "normal";
const fontSize = 11;

// Different strokes (for different folks)
const strokeLinecap = "square";
const strokeLinejoin = "square";

// Layout
const baseProps = {
  width: 460,
  height: 260,
  padding: 50
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: textBlack,
  stroke: "transparent"
};

const centeredLabelStyles = { ...{ textAnchor: "middle" }, ...baseLabelStyles };

// Put it all together...
export const theme = {
  area: {
    style: {
      data: {
        //  fill: charcoal,
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  independentAxis: {
    style: {
      axis: {},
      ticks: {},
      grid: {
        strokeWidth: x => (x === 0 ? 0 : 1),
        stroke: gridGrey,
        strokeLinecap,
        strokeLinejoin
      }
    }
  },
  dependentAxis: {
    style: {
      axis: {},
      axisLabel: {},
      grid: {
        strokeWidth: 0
      },
      tickLabels: {}
    }
  },
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: "red",
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        grid: {
          strokeWidth: 0,
          pointerEvents: "painted"
        },
        ticks: {
          strokeWidth: 0
        },
        tickLabels: baseLabelStyles
      }
    },
    baseProps
  ),
  bar: assign(
    {
      style: {
        data: {
          // fill: charcoal,
          // padding: 8,
          // strokeWidth: 0,
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  chart: baseProps,

  legend: {
    width: 200,
    gutter: 20,
    orientation: "horizontal",
    titleOrientation: "top",
    style: {
      data: {
        type: "square"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { fontSize: 11, padding: 5 })
    }
  }
};
