/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind 3.0版本已经不再支持purge选项，全部并入content选项
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // 表示哪些文件应当被tailwind扫描并转换
  theme: {
    extend: {
      // 扩展选项是保留默认的 比如说p最大支持到96，即 p-96 ，而你可以将其拓展到p-144
      spacing: {
        144: "36rem",
      },
    }, 
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
  },
  plugins: [],
};
