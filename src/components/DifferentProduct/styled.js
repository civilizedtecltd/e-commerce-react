import { createUseStyles } from "react-jss";
import styled from "styled-components";

export const useStyles = createUseStyles({
    wrapper: {
        paddingTop: "1rem",
        marginBottom: "2rem",
    },
    titleBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        paddingLeft: "1.4rem",
        boxSizing: "border-box",
    },
    sellAllLink: {
        fontSize: 13,
    },
    content: {
        // justifyContent: "space-between",
        display: "flex",        
        gap: "0.5rem",
        padding: "0 0.5rem",
        "@media (max-width: 1150px)": {
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
        },
    },
    item: {
        display: "block",
        width: "calc(100%/6)",
        height: "320px",
        backgroundColor: "#ffffff",
        transition: "transform 0.2s",
        "&:hover": {
            transform: "scale(1.02)",
        },
    },
    itemCard: {
        cursor: "pointer",
        width: "100%",
        height: "100%",
        boxShadow: "2px 2px 10px -3px rgba(0, 0, 0, 0.55)",
    },
    itemMediaContent: {
        height: "200px",
        width: "100%",
    },
    itemMedia: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    itemCardContent: {
        padding: "0.5rem",      
    },
    description: {
        height: "50px",
        textTransform: "capitalize",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 400,
    },
    price: {
     /*    marginTop: "1.5rem", */
        color: "#f88824",
        fontSize: "15px",
        textTransform: "capitalize",
    },
});
