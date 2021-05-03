import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchTopDiscountBooksLimit } from "../../redux/actions/bookActions";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styled";

const TopDiscountProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topDiscountBooks = useSelector(
        (state) => state.book.topDiscountBooks
    );

    useEffect(() => {
        dispatch(fetchTopDiscountBooksLimit());
    }, [dispatch]);

    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.titleBox}>
                    <h4>Top Discount Products</h4>
                    <Link
                        className={classes.sellAllLink}
                        to="/top-products/discount"
                    >
                        See all
                    </Link>
                </div>

                <div className={classes.content}>
                    {topDiscountBooks &&
                        topDiscountBooks.map((item, index) => {
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
export default TopDiscountProduct;
