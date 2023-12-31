// import { convertDate } from "./converDate"

import { convertDate } from "./converDate";

// export const settingChartData=(setChartData, prices)=>{
//     setChartData({
//         labels:prices.map((price)=>convertDate(price[0])),
//         datasets: [
//           {
//             data: prices.map((price)=>(price[1])),
//             borderColor: "#3a80e9",
//             backgroundColor: "transparent",
//             yAxisID: 'y',
//             borderWidth: 2,
//           fill: true,
//           tension: 0.25,
//           backgroundColor:  "rgba(58, 128, 233,0.1)",
//           borderColor: "#3a80e9",
//           pointRadius: 0,
//           },
//         ],       
//         }
//         )
// }

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1?.map((data) => convertDate(data[0])),
      datasets: [
        {           
          label:"crypto1",
          data: prices1?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        prices2 && {
         label:"crypto2",
          data: prices2?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1?.map((data) => convertDate(data[0])),
      datasets: [
        {
          label:"Crypto1",
          data: prices1?.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};

