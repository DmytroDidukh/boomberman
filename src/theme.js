import {createMuiTheme} from "@material-ui/core";
import {red} from '@material-ui/core/colors'


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Press Start 2P',
            'cursive',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
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
        error: {
            main: red.A400
        },
        background: {
            default: '#0B172A',
            lighten: '#0f4a8a',
            darken: '#010915'
        }
    },
    shadows: [],
    overrides: {
        MuiGrid: {
            'spacing-xs-2': {
                margin: 0
            },
            'spacing-xs-3': {
                margin: 0
            }
        },
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
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                minWidth: 35
            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px'
                },
                '&:before': {
                    borderColor: '#fff',
                    borderBottomWidth: '2px'
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)'
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
                backgroundColor: '#0B172A',
                color: '#fff'
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800
                },
                '& button': {
                    padding: 8,
                    marginRight: 20
                }
            }
        },
    }
})

export default theme;
