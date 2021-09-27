import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    main: {
        backgroundColor: '#D8D8D8'
    },
    card: {
        borderRadius: 1,
    },
    cardBody: {
        padding: '.8rem',
    },
    bookName: {
        textTransform: 'uppercase',
        color: '#000000'
    },
    bookAuthor: {
        color: '#0A7BC1',
        textTransform: 'capitalize',
        marginBottom: 10,

        '& span': {
            textTransform: 'lowercase',
            color: '#000000'
        }
    },
    bookRating: {
        fontSize: 16
    },
    btnContainer: {
        /* justifyContent: 'space-between', */
        display: 'flex',
        gap: '0.5rem',
        rowGap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',

        '@media (max-width: 525px)': {
            flexDirection: 'column',
        },

        '& p': {
            fontSize: '10px',
            fontWeight: 400,
            lineHeight: '18px',
            textTransform: 'capitalize',
            color: '#0098D2'
        },

        '& .available': {
            color: '#222',
            marginBottom: '0.1rem',
            opacity: 0,
            fontSize: '10px',
        },

        '& .show': {
            opacity: 1,
        },

        '& .btn': {
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.5rem',
            color: '#0098D2',
            backgroundColor: 'transparent',
            border: '1px solid #0098D2',
            minWidth: '90px',
            transition: 'all 0.3s ease',
            '@media (max-width: 1199px)': {
                minWidth: '150px',
            },
            '@media (max-width: 992px)': {
                minWidth: '140px',
            },
            '@media (max-width: 767px)': {
                minWidth: '110px',
            },
            '@media (max-width: 525px)': {
                minWidth: '100%',
            },

            '& svg': {
                fontSize: '15px',
                marginRight: '0.6rem',
                color: '#0098D2',
            },

            '& button span': {
                display: 'flex',
                flexDirection: 'column',
            },

            '&:hover': {
                backgroundColor: '#0098D2',
                color: '#fff',

                "& p": {
                    color: '#fff',
                },

                '& svg': {
                    color: '#fff',
                }
            }
        },
    },
    descriptionTab: {
        paddingTop: 10,
        '& .readmore': {
            cursor: 'pointer',
            color: 'blue',
            display: 'inline',
            paddingLeft: '0.5rem',
        }
    },
    specificationTab: {
        paddingTop: 10
    },
    reviewTab: {
        paddingTop: 10
    },
    bookCode: {
        marginBottom: 15,
        '& small': {
            marginLeft: 5,
            fontSize: 18,
            color: "#5DCF82"
        }
    },
    deliveryNav: {
        gap: '10px',
        marginBottom: 15,
        '& li': {
            fontSize: 14,
            fontWeight: 800
        }
    },
    cartBtn: {
        backgroundColor: "#0A7BC1",
        color: '#ffffff',
        fontSize: 13,
        border: '1px solid #0A7BC1',
        transition: 'background-color 1000ms, color 1000ms',
        '&:hover': {
            backgroundColor: "#ffffff",
            color: "#0A7BC1",
        }
    },
    favBtn: {
        backgroundColor: "#ffffff",
        color: "#0A7BC1",
        fontSize: 13,
        border: '1px solid #0A7BC1',
        transition: 'background-color 1000ms, color 1000ms',
        '&:hover': {
            backgroundColor: "#0A7BC1",
            color: '#ffffff',
        }
    },
    quantityInput: {
        minWidth: 45,
        maxWidth: 60,
        height: 45,
        borderRadius: 5,
        padding: '5px',
        boxSizing: 'border-box',
        fontSize: 14,
        border: '1px solid #C9C9C9'
    }
})
