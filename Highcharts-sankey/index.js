document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    title: {
      text: "Задача 1",
      style: {
        color: "white",
      },
    },

    chart: {
      backgroundColor: "#242427",
    },

    tooltip: {
      animation: false,
      borderRadius: 20,
      style: {
        color: "white",
      },
    },

    credits: {
      /* enabled: false, - убрать ссылку на Figma */
      text: "проект на Figma",
      href: "https://www.figma.com/file/K6OVoDkNc3wSe4JwIg1E5Q/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BA%D0%B8?node-id=0%3A1",
      position: {
        align: "left",
        x: 20,
      },
      style: {
        fontSize: "15px",
        color: "#8B75BA",
      },
    },

    series: [
      {
        keys: ["from", "to", "weight"],
        data: [
          { from: "Медведи", to: "Мед", weight: 7 },
          ["Медведи", "Малина", 3],
          ["Медведи", "Яблоки", 4],
          ["Ежи", "Мед", 3],
          ["Ежи", "Малина", 2],
          ["Ежи", "Яблоки", 2],
        ],

        type: "sankey",
        colors: ["#979797", "#8B75BA", "#DDAFD3", "#7EB9BF", "#77954D"],
      },
    ],
  });
});
