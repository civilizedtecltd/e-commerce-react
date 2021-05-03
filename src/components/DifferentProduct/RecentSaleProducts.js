import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecentSaleBooksLimit } from "../../redux/actions/bookActions";
import { useStyles } from "./styled";

const RecentSaleProducts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const recentSaleBooks = useSelector((state) => state.book.recentSaleBooks);

    useEffect(() => {
        dispatch(fetchRecentSaleBooksLimit());
    }, [dispatch]);

    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.titleBox}>
                    <h4>Recent Sales Product</h4>
                    <Link
                        className={classes.sellAllLink}
                        to="/top-products/recent-sale"
                    >
                        See all
                    </Link>
                </div>

                <div className={classes.content}>
                    {recentSaleBooks &&
                        recentSaleBooks.map((item, index) => {
                            return (
                                <Link
                                    className={classes.item}
                                    to={`/product/${item.book.id}`}
                                    key={index}
                                >
                                    <div className={classes.itemCard}>
                                        <div
                                            className={classes.itemMediaContent}
                                        >
                                            <img
                                                className={classes.itemMedia}
                                                src={
                                                    item.book.cover_images.img_1
                                                }
                                                alt="product image"
                                            />
                                        </div>
                                        <div
                                            className={classes.itemCardContent}
                                        >
                                            <p className={classes.description}>
                                                {item.book.short_description.substring(
                                                    0,
                                                    50
                                                )}
                                            </p>
                                            <p className={classes.price}>
                                                Ksh {item.book.price}
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
export default RecentSaleProducts;
