document.addEventListener("DOMContentLoaded", function () {
  let colors = ["#77954D", "#979797"];
  categories = ["Не зашифровано", "Зашифровано"];
  data = [
    {
      y: 38,
      color: colors[1],
      drilldown: { name: "Не зашифровано 38", data: [38] },
    },
    {
      y: 62,
      color: colors[0],
      drilldown: { name: "Зашифровано 62", data: [62] },
    },
  ];

  (browserData = []),
    (versionsData = []),
    (dataLen = data.length),
    (brightness = 0),
    (drillDataLen = 0);

  for (let i = 0; i < dataLen; i += 1) {
    browserData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color,
    });

    drillDataLen = data[i].drilldown.data.length;
    for (let j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - j / drillDataLen / 5;
      versionsData.push({
        y: data[i].drilldown.data[j],
        color: data[i].color,
      });
    }
  }
  console.log(browserData);
  const chart = Highcharts.chart("container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "transparent",
    },

    title: {
      text: "Задача 2",
      style: {
        color: "white",
      },
    },

    plotOptions: {
      pie: {
        shadow: false,
        center: ["50%", "50%"],
        borderWidth: 0,
      },
    },

    tooltip: {
      valueSuffix: "%",
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Center",
        data: browserData.color,
        size: "80%",
      },
      {
        name: "Data",
        data: browserData,
        size: "80%",
        innerSize: "70%",
        dataLabels: {
          color: "white",
          formatter: function () {
            return this.y > 1 /* '<b>' + this.point.name + ':</b> ' + */
              ? this.y + "%"
              : null;
          },
        },
      },
    ],
  });
});
