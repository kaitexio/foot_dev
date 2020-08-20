import {createMuiTheme} from '@material-ui/core';

// import palette from './palette';
import typography from './typography';
// import overrides from './overrides';

const white = '#FFFFFF';
const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: white,
            // dark: colors.indigo[900],
            main: "#C89C5E",
            // backgroundColor: "#C89C5E",
            // light: colors.indigo[100]
        },
        secondary: {
            main: "#FFF",
        }
    },
    typography,
    overrides: {
        MuiButton: {
            root: {
                padding: "10px"
            },
            containedPrimary: {
                padding: "7px 25px",
                color: "#FFF",
                borderRadius: "40px",
                border: "1px solid #C89C5E",
                fontSize: "13px",
                fontWeight: "bold",
                '&:hover': {
                    color: "#C89C5E",
                    backgroundColor: "#FFF"
                },
            }
        },
        MuiAppBar: {
            root: {}
        },
        MuiPaper:{
            root:{
                backgroundColor: "#F5F5F5",
            }
        }
    },
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    },
    shadows: ["none"]
});

export default theme;