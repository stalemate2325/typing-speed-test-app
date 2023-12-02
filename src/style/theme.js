const lightTheme = {
  label: "Light",
  background: "#F5F5F5",
  text: "#000000",
  gradient: "linear-gradient(315deg, #74ebd5 0%, #ACB6E5 94%)",
  title: "#2979ff",
  textTypeBox: "#9E9E9E",
  stats: "#3D5AFE",
  fontFamily: "sans-serif",
};

const darkTheme = {
  label: "Dark",
  background: "#121212",
  text: "#FAFAFA",
  gradient: "linear-gradient(315deg, #F7971E 0%, #FFD200 94%)",
  title: "#ffc107",
  textTypeBox: "#706d6d",
  stats: "#BB86FC",
  fontFamily: "sans-serif",
};

const cyberTheme = {
  label: "Cyber",
  background: "#272932",
  text: "#CB1DCD",
  gradient: "linear-gradient(315deg, #FDF500 0%, #CB1DCD 94%)",
  title: "#FDF500",
  textTypeBox: "#D1C5C0",
  stats: "#00ff9f",
  fontFamily: "Tomorrow",
};

const nintendoTheme = {
  label: "Nintendo",
  background: "#000000",
  text: "#00c3e3",
  gradient: "linear-gradient(90deg, 	#dd2020 0%, #00c3e3 100%)",
  title: "#dd2020",
  textTypeBox: "#a5a2a2",
  stats: "#00c3e3",
  fontFamily: "Tomorrow",
};

const arakiNobuyoshiTheme = {
  label: "Araki Nobuyoshi",
  background: "#232335",
  text: "#086063",
  gradient: "linear-gradient(90deg, 	#232335 0%, #0a4951 100%)",
  title: "#B42D2C",
  textTypeBox: "#CCB1B0",
  stats: "#1a5426",
  fontFamily: "sans-serif",
};

const pianoTheme = {
  label: "Piano",
  background: "linear-gradient(to bottom,  #000, #222)",
  text: "#FAF9F6",
  gradient: "linear-gradient(90deg, #000 0%, #222 100%)",
  title: "#f5f2e7",
  textTypeBox: "#555",
  stats: "#FAF9F6",
  fontFamily: "Rufina",
  textShadow: "0px -1px 0px rgba(0,0,0,0.3)"
};

const defaultTheme = darkTheme;

const themesOptions = [
  { value: darkTheme, label: "Dark" },
  { value: pianoTheme, label: "Piano" },
  { value: nintendoTheme, label: "Nintendo" },
  { value: cyberTheme, label: "Cyber" },
  { value: arakiNobuyoshiTheme, label: "Araki Nobuyoshi" },
  { value: lightTheme, label: "Light" }
];

export {
  lightTheme,
  darkTheme,
  cyberTheme,
  nintendoTheme,
  arakiNobuyoshiTheme,
  pianoTheme,
  defaultTheme,
  themesOptions,
};
