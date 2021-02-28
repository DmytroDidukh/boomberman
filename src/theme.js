import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Press Start 2P',
            'cursive',
            'system-ui',
            '-apple-system',
            'sans-serif',
        ],
    },
    palette: {
        type: "light",
        primary: {
            main: '#ff4500',
            dark: '#ba2f01',
            contrastText: '#fff'
        },
        secondary: {
            main: '#0B172A'
        },
    },
    shadows: [],
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#0B172A',
                padding: '12px',
                margin: '10px 0',
                boxShadow: '0px 0px 19px 6px #bc412329',
            },
        },

        MuiButton: {
            root: {
                borderRadius: 0,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                margin: 3,
                fontWeight: 600
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20
            },
            outlinedPrimary: {
                borderColor: '#ff4500'
            }
        },
        MuiIconButton: {
            root: {
                '&:hover': {
                    backgroundColor: 'rgba(188,65,45,0.2)',
                    color: '#ba2f01'
                }
            }
        },
        MuiButtonBase: {
            root: {
                color: '#fff',
            }
        },
        MuiListItem: {
            button: {
                '&:hover': {
                    backgroundColor: 'rgba(188,65,45,0.2)',
                    color: '#ff4500',
                }
            }
        },
        MuiDialog: {
            paper: {
                borderRadius: 0,
                backgroundColor: '#0B172A',
                color: '#fff'
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
                justifyContent: 'center'
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    textAlign: 'center',
                }
            }
        },
        MuiTableCell: {
            body: {
                color: '#fff',
                fontSize: '12px'
            },
            head: {
                color: '#ff4500',
            }
        },
        MuiTab: {
            root: {
                minWidth: 120,
                '@media (min-width: 600px)': {
                    minWidth: 120,
                }
            }
        }
    }
})

export default theme;
