import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentSaleBooksLimit } from "../../redux/actions/bookActions";
import DifferentProductView from "./DifferentProductView";


const RecentSaleProducts = () => {
    const dispatch = useDispatch();
    const recentSaleBooks = useSelector((state) => state.book.recentSaleBooks);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        dispatch(fetchRecentSaleBooksLimit());
    }, [dispatch]);

    useEffect(() => {
        const tempBooks = [];
        recentSaleBooks && recentSaleBooks.forEach(item => tempBooks.push(item.book));
        if(tempBooks.length > 0){
            setBooks(tempBooks);
        }        
    }, [recentSaleBooks]);

    return ( books & books.length ? <DifferentProductView title = "Recent Sales Products" seeAllLink = "/top-products/recent-sale" bookList = {books} /> : <></>); 
};
export default RecentSaleProducts;
