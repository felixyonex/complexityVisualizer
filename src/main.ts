import { Chart } from "chart.js";
import { Stack } from "./stack";
import { BracketStrings } from "./bracketStrings";
import { BracketValidate } from "./bracketsValidate";
// import * as fs from 'fs';
import * as jsonData_noGC_noAw from "./main_noGC_noAw.json";
import * as jsonData_GC_noAw from "./main_GC_noAw.json";
import * as jsonData_noGC_aw from "./main_noGC_aw.json";
import * as jsonData_GC_aw from "./main_GC_aw.json";
import * as jsonData_array from "./main_array.json";
import * as jsonData_arraySort from './arraySort.json';
import * as jsonData_sequenceFindRange from '../asset/sequenceFindRange.json';
import * as jsonData_getSumS from '../asset/sequenceFindRange.json';
import * as jsonData_getMaxSubSum from '../asset/sequenceFindRange.json';
import * as jsonData_deleteK from '../asset/deleteK.json';
import * as jsonData_deleteKkVaries from '../asset/deleteK_kVaries.json';
import * as jsonData_deleteKkVariesOn from '../asset/deleteK_kVaries_On.json';
import * as jsonData_deleteKkVariesImproved from '../asset/deleteK_kVaries_improved.json';
import * as jsonData_deleteKkVariesStack from '../asset/deleteK_kVaries_stack.json';
import * as jsonData_findX from '../asset/findX.json';
import * as jsonData_squareRoot from '../asset/squareRoot.json';
import * as jsonData_maxJointLength from '../asset/maxJointLength.json';
import * as jsonData_findMinAndMax from '../asset/findMinAndMax.json';
import * as jsonData_verticesInCloseShape from '../asset/verticesInClosedShape.json';
import * as jsonData_verticesInChain from '../asset/verticesInChain.json';
import * as jsonData_divideN from '../asset/divideN.json';
import * as jsonData_putItemInBag from '../asset/putItemInBag.json';
import * as jsonData_divideNImproved from '../asset/divideNImproved.json';
import * as jsonData_divideNImprovedLong from '../asset/divideNImprovedLong.json';
import * as jsonData_divideNCount from '../asset/divideNCount.json';
import * as divideNWithDiffKCount from '../asset/divideNWithDiffKCount.json';
 
// let label: string[] = [];
// let data: number[] = [];

/* for (let i = 0; i <= 10000; i += 100) {
  let stack = new Stack();
  label.push(`N:${i}`)
  for (let j = 0; j < i; j++) {
    stack.push(j);
  }
  const start = performance.now();
  stack.push(i);
  const end = performance.now();
  data.push(end - start);
} */

// const receivedJson = jsonData_noGC_noAw as any;
// label = receivedJson.label;

// const data_noGC_noAw = (jsonData_noGC_noAw as any).data;
// const data_GC_noAw = (jsonData_GC_noAw as any).data;
// const data_noGC_aw = (jsonData_noGC_aw as any).data;
// const data_GC_aw = (jsonData_GC_aw as any).data;
// const data_array = (jsonData_array as any).data;

// const data_arraySortLabel = (jsonData_arraySort as any).label;
// const data_arraySortData = (jsonData_arraySort as any).data

// const data_sequenceFindRangeLabel = (jsonData_sequenceFindRange as any).label;
// const data_sequenceFindRangeData = (jsonData_sequenceFindRange as any).data;

const data_getSumSLabel = (jsonData_getSumS as any).label;
const data_getSumSData = (jsonData_getSumS as any).data;

const data_getMaxSubSumLabel = (jsonData_getMaxSubSum as any).label;
const data_getMaxSubSumData = (jsonData_getMaxSubSum as any).data;

const data_deleteKLabel = (jsonData_deleteK as any).label;
const data_deleteKData = (jsonData_deleteK as any).data;


const jsonData_deleteKkVariesLabel = (jsonData_deleteKkVaries as any).label;
const jsonData_deleteKkVariesData = (jsonData_deleteKkVaries as any).data;


const jsonData_deleteKkVariesOnLabel = (jsonData_deleteKkVariesOn as any).label;
const jsonData_deleteKkVariesOnsData = (jsonData_deleteKkVariesOn as any).data;

const jsonData_deleteKkVariesImprovedLabel = (jsonData_deleteKkVariesImproved as any).label;
const jsonData_deleteKkVariesImprovedData = (jsonData_deleteKkVariesImproved as any).data;


const jsonData_deleteKkVariesStackLabel = (jsonData_deleteKkVariesStack as any).label;
const jsonData_deleteKkVariesStackData = (jsonData_deleteKkVariesStack as any).data;


const jsonData_findXLabel = (jsonData_findX as any).label;
const jsonData_findXData = (jsonData_findX as any).data;


const jsonData_squareRootLabel = (jsonData_squareRoot as any).label;
const jsonData_squareRootData = (jsonData_squareRoot as any).data;


const jsonData_maxJointLengthLabel = (jsonData_maxJointLength as any).label;
const jsonData_maxJointLengthData = (jsonData_maxJointLength as any).data;

const jsonData_findMinAndMaxLabel = (jsonData_findMinAndMax as any).label;
const jsonData_findMinAndMaxData = (jsonData_findMinAndMax as any).data;

const jsonData_verticesInCloseShapeLabel = (jsonData_verticesInCloseShape as any).label;
const jsonData_verticesInCloseShapeData = (jsonData_verticesInCloseShape as any).data;

const jsonData_verticesInChainLabel = (jsonData_verticesInChain as any).label;
const jsonData_verticesInChainData = (jsonData_verticesInChain as any).data;


const jsonData_divideNLabel = (jsonData_divideN as any).label;
const jsonData_divideNData = (jsonData_divideN as any).data;

const jsonData_divideNImprovedLabel = (jsonData_divideNImproved as any).label;
const jsonData_divideNImprovedData = (jsonData_divideNImproved as any).data;


const jsonData_divideNImprovedLongLabel = (jsonData_divideNImprovedLong as any).label;
const jsonData_divideNImprovedLongData = (jsonData_divideNImprovedLong as any).data;

const jsonData_divideNCountLabel = (jsonData_divideNCount as any).label;
const jsonData_divideNCountData = (jsonData_divideNCount as any).data;

const divideNWithDiffKCountLabel = (divideNWithDiffKCount as any).label;
const divideNWithDiffKCountData = (divideNWithDiffKCount as any).data;


const jsonData_putItemInBagLabel = (jsonData_putItemInBag as any).label;
const jsonData_putItemInBagData = (jsonData_putItemInBag as any).data;


const ctx = document.getElementById("chartCanvas");
if (ctx !== null) {
  new Chart(ctx as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: jsonData_divideNLabel,
      datasets: [
        {
          label: "Runtime DivideN",
          data: jsonData_divideNData,
          backgroundColor: "rgb(0, 0, 0, 0.0)",
          borderColor: "#ff0000"
        },
        {
        label: "Runtime DivideN Improved",
        data: jsonData_divideNImprovedData,
        backgroundColor: "rgb(0, 0, 0, 0.0)",
        borderColor: "#0000ff"
      },
      ]
    },
    options: {
      scales: {
        yAxes: [
          // {
          //   ticks: {
          //     max: 500,
          //     min: 0
          //   }
          // }
        ]
      }
    }
  });
}

const ctx1 = document.getElementById("chartCanvas1");
if (ctx1 !== null) {
  new Chart(ctx1 as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: jsonData_putItemInBagLabel,
      datasets: [
        {
          label: "Runtime put Items in a bag",
          data: jsonData_putItemInBagData,
          backgroundColor: "rgb(0, 0, 0, 0.0)",
          borderColor: "#ff0000"
        },
        // {
        //   label: "Runtime verticesInChain",
        //   data: jsonData_verticesInChainData,
        //   backgroundColor: "rgb(0, 0, 0, 0.0)",
        //   borderColor: "#0000ff"
        // },

      ]
    },
    options: {
      scales: {
        yAxes: [
          // {
          //   ticks: {
          //     max: 300,
          //     min: 0
          //   }
          // }
        ]
      }
    }
  });
}
const ctx2 = document.getElementById("chartCanvas2");
if (ctx2 !== null) {
  new Chart(ctx2 as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: jsonData_divideNImprovedLongLabel,
      datasets: [
        {
          label: "Runtime divideNImprovedLong",
          data: jsonData_divideNImprovedLongData,
          backgroundColor: "rgb(0, 0, 0, 0.0)",
          borderColor: "#ff0000"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              max: 100000,
              min: 0
            }
          }
        ]
      }
    }
  });
}

const ctx3 = document.getElementById("chartCanvas3");
if (ctx3 !== null) {
  new Chart(ctx3 as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: jsonData_divideNCountLabel,
      datasets: [
        {
          label: "count divideNImprovedLong",
          data: jsonData_divideNCountData,
          backgroundColor: "rgb(0, 0, 0, 0.0)",
          borderColor: "#ff0000"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          // {
          //   ticks: {
          //     max: 100000,
          //     min: 0
          //   }
          // }
        ]
      }
    }
  });
}
const ctx4 = document.getElementById("chartCanvas4");
if (ctx4 !== null) {
  new Chart(ctx4 as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: divideNWithDiffKCountLabel,
      datasets: [
        {
          label: "count divideNWithDiffK",
          data: divideNWithDiffKCountData,
          backgroundColor: "rgb(0, 0, 0, 0.0)",
          borderColor: "#ff0000"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          // {
          //   ticks: {
          //     max: 100000,
          //     min: 0
          //   }
          // }
        ]
      }
    }
  });
}

// const ctx = document.getElementById("chartCanvas");
// if (ctx !== null) {
//   new Chart(ctx as HTMLCanvasElement, {
//     type: "line",
//     data: {
//       labels: jsonData_deleteKkVariesImprovedLabel,
//       datasets: [
//         {
//           label: "Runtime deletK",
//           data: jsonData_deleteKkVariesImprovedData,
//           backgroundColor: "rgb(0, 0, 0, 0.0)",
//           borderColor: "#ff0000"
//         },
//         {
//           label: "Runtime deletK stack",
//           data: jsonData_deleteKkVariesStackData,
//           backgroundColor: "rgb(0, 0, 0, 0.0)",
//           borderColor: "#0000ff"
//         },
//         // {
//         //   label: "Runtime noGC noAw",
//         //   data: data_noGC_noAw,
//         //   backgroundColor: "rgb(0, 0, 0, 0.0)",
//         //   borderColor: "#ff0000"
//         // },
//         // {
//         //   label: "Runtime array",
//         //   data: data_array,
//         //   backgroundColor: "rgb(0, 0, 0, 0.0)",
//         //   borderColor: "#0000ff"
//         // },
//         // {
//         //   label: "Runtime GC noAw",
//         //   data: data_GC_noAw,
//         //   backgroundColor: "rgb(0, 0, 0, 0.0)",
//         //   borderColor: "#0000ff"
//         // },
//         // {
//         //   label: "Runtime noGC aw",
//         //   data: data_noGC_aw,
//         //   backgroundColor: "rgb(0, 0, 0, 0.0)",
//         //   borderColor: "#00ffff"
//         // },
//         // {
//         //   label: "Runtime GC aw",
//         //   data: data_GC_aw,
//         //   backgroundColor: "rgb(0, 0, 0, 0.0)",
//         //   borderColor: "#0000ff"
//         // }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               max: 15000,
//               min: 0
//             }
//           }
//         ]
//       }
//     }
//   });
// }

// const ctx1 = document.getElementById("chartCanvas1");
// if (ctx1 !== null) {
//   new Chart(ctx1 as HTMLCanvasElement, {
//     type: "line",
//     data: {
//       labels: data_getSumSLabel,
//       datasets: [
//         {
//           label: "Runtime getSum",
//           data: data_getSumSData,
//           backgroundColor: "rgb(0, 0, 0, 0.0)",
//           borderColor: "#ff0000"
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               max: 500,
//               min: 0
//             }
//           }
//         ]
//       }
//     }
//   });
// }

// const ctx2 = document.getElementById("chartCanvas2");
// if (ctx2 !== null) {
//   new Chart(ctx2 as HTMLCanvasElement, {
//     type: "line",
//     data: {
//       labels: data_getMaxSubSumLabel,
//       datasets: [
//         {
//           label: "Runtime getMaxSubSum",
//           data: data_getMaxSubSumData,
//           backgroundColor: "rgb(0, 0, 0, 0.0)",
//           borderColor: "#ff0000"
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               max: 500,
//               min: 0
//             }
//           }
//         ]
//       }
//     }
//   });
// }
