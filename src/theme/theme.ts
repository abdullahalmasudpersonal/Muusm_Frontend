import { createTheme } from "@mui/material/styles";

export const Theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1e40af",
      },
      background: {
        default: mode === "dark" ? "#061c3f" : "#f8fafc",
        paper: mode === "dark" ? "#0b2a5b" : "#ffffff",
      },
    },
  });



// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0B5ED7', // ERP / education friendly blue
//     },
//     secondary: {
//       main: '#FF9800',
//     },
//     background: {
//       default: '#181818',
//       paper: '#ffffff',
//     },
//   },

//   typography: {
//     fontFamily: `'Inter', 'Hind Siliguri', sans-serif`,
//     h6: {
//       fontWeight: 600,
//     },
//   },

//   shape: {
//     borderRadius: 8,
//   },
// });

// export default theme;



