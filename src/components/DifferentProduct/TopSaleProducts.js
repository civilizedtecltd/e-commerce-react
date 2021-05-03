import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTopSaleBooksLimit } from "../../redux/actions/bookActions";
import { useStyles } from "./styled";

const TopSaleProducts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topSaleBooks = useSelector((state) => state.book.topSaleBooks);

    useEffect(() => {
        dispatch(fetchTopSaleBooksLimit());
    }, [dispatch]);

    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.titleBox}>
                    <h4>Top Sales Product</h4>
                    <Link
                        className={classes.sellAllLink}
                        to="/top-products/sale"
                    >
                        See all
                    </Link>
                </div>

                <div className={classes.content}>
                    {topSaleBooks &&
                        topSaleBooks.map((item, index) => {
                            return (
                                <Link
                                    className={classes.item}
                                    to={`/product/${item.id}`}
                                    key={index}
                                >
                                    <div className={classes.itemCard}>
                                        <div
                                            className={classes.itemMediaContent}
                                        >
                                            <img
                                                className={classes.itemMedia}
                                                src={item.cover_images.img_1}
                                                alt="product image"
                                            />
                                        </div>
                                        <div
                                            className={classes.itemCardContent}
                                        >
                                            <p className={classes.description}>
                                                {item.short_description.substring(
                                                    0,
                                                    50
                                                )}
                                            </p>
                                            <p className={classes.price}>
                                                Ksh {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </Container>
    );
};
export default TopSaleProducts;
