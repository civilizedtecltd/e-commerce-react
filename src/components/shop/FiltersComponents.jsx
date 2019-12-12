import React, {useState, useEffect} from 'react';
import {Button, Collapse} from 'react-bootstrap';
import filterData from "../../inc/shop/stage";
import '../../assets/css/theme.css'
import {LiSpan} from "../LiComponent/CommonLiComponent";
import discipline from "../../inc/shop/discipline";
import {Form} from "react-bootstrap";
import PriceRanger from "../PriceRangeSlider/PriceRangeSlider";
import author from "../../inc/shop/author";
import publish_house from "../../inc/shop/publish_house";
import publish_year from "../../inc/shop/publish_year";
import book_cover from "../../inc/shop/book_cover";
import language from "../../inc/shop/language";

const Fliters = () => {

    const [filter, setFilter] = useState({
        stage: true,
        discipline: true,
        price:true,
        author:true,
        publishingHouse:true,
        publishingYear:true,
        bookCover:true,
        languages:true

    });

    useEffect(()=> {
        const handleResize = () => {
            const { innerWidth: width, innerHeight: height } = window;
            if(width <= 1199){
                setFilter({
                    stage: false,
                    discipline: false,
                    price:false,
                    author:false,
                    publishingHouse:false,
                    publishingYear:false,
                    bookCover:false,
                    languages:false

                })
            }else{
                setFilter({
                    stage: true,
                    discipline: true,
                    price:true,
                    author:true,
                    publishingHouse:true,
                    publishingYear:true,
                    bookCover:true,
                    languages:true
                })
            }

        }

        window.onload = handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    },[]);


    return (
        <aside
            className="asideFilterBar secGap clearfix"
            id="asideFilterBar"
        >
            <h2 className="asideTitle">Filters</h2>

            <div className="asideBody bgGray" id="asideBody">

                <div className="singleFilterCard">
                    <div className="d-flex justify-content-between">
                        <h5>Stage</h5>
                        <p
                            onClick={()=>setFilter({...filter, stage:!filter.stage})}
                            aria-controls="example-collapse-text"
                            aria-expanded={filter.stage}
                            className=" text-black-50 shadow-none desktop-view-icon-none"
                        >
                         {!filter.stage ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>

                    <Collapse in={filter.stage}>
                        <div id="example-collapse-text">
                            <ul className="filterList">
                                {filterData.map((data, index) => (
                                    <LiSpan

                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>
                </div>

                <div className="singleFilterCard">
                    <div className="d-flex justify-content-between">
                        <h5>Discipline</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, discipline: !filter.discipline})}
                            aria-controls="collapse-discipline"
                            aria-expanded={filter.discipline}
                            className=" text-black-50 shadow-none desktop-view-icon-none"
                        >
                            {!filter.discipline ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.discipline}>
                        <div id="collapse-discipline">
                            <ul className="filterList">
                                {discipline.map((data, index) => (
                                    <LiSpan
                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>

                </div>


                <div className="singleFilterCard">

                    <div className="d-flex justify-content-between">
                        <h5>Price Range</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, price: !filter.price})}
                            aria-controls="collapse-price"
                            aria-expanded={filter.price}
                            className=" text-black-50 shadow-none desktop-view-icon-none"
                        >
                            {!filter.price ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.price}>
                        <div id="collapse-price">
                            <Form>
                                <PriceRanger />
                            </Form>
                        </div>
                    </Collapse>
                </div>


                <div className="singleFilterCard">
                    <div className="d-flex justify-content-between">
                        <h5>Author</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, author: !filter.author})}
                            aria-controls="collapse-author"
                            aria-expanded={filter.author}
                            className=" text-black-50 desktop-view-icon-none"
                        >
                            {!filter.author ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.author}>
                        <div id="collapse-author">
                            <ul className="filterList">
                                {author.map((data, index) => (
                                    <LiSpan
                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>
                </div>


                <div className="singleFilterCard">
                    <div className="d-flex justify-content-between">
                        <h5>Publishing house</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, publishingHouse: !filter.publishingHouse})}
                            aria-controls="collapse-publishingHouse"
                            aria-expanded={filter.publishingHouse}
                            className=" text-black-50 desktop-view-icon-none"
                        >
                            {!filter.publishingHouse ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.publishingHouse}>
                        <div id="collapse-publishingHouse">
                            <ul className="filterList">
                                {publish_house.map((data, index) => (
                                    <LiSpan

                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>
                </div>


                <div className="singleFilterCard">
                    <div className="d-flex justify-content-between">

                        <h5>Publishing Year</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, publishingYear: !filter.publishingYear})}
                            aria-controls="collapse-publishingYear"
                            aria-expanded={filter.publishingYear}
                            className=" text-black-50 desktop-view-icon-none"
                        >
                            {!filter.publishingYear ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.publishingYear}>
                        <div id="collapse-publishingYear">
                            <ul className="filterList">
                                {publish_year.map((data, index) => (
                                    <LiSpan

                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>

                </div>


                <div className="singleFilterCard">

                    <div className="d-flex justify-content-between">
                        <h5>Book Cover</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, bookCover: !filter.bookCover})}
                            aria-controls="collapse-bookCover"
                            aria-expanded={filter.bookCover}
                            className=" text-black-50 desktop-view-icon-none"
                        >
                            {!filter.bookCover ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.bookCover}>
                        <div id="collapse-bookCover">
                            <ul className="filterList">
                                {book_cover.map((data, index) => (
                                    <LiSpan

                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>
                </div>


                <div className="singleFilterCard p-0 border-0 m-0">
                    <div className="d-flex justify-content-between">
                        <h5>Language</h5>
                        <p
                            onClick={()=>setFilter({ ...filter, languages: !filter.languages})}
                            aria-controls="collapse-languages"
                            aria-expanded={filter.languages}
                            className=" text-black-50 desktop-view-icon-none"
                        >
                            {!filter.languages ? <i className="fa fa-plus"></i> : <i className="fas fa-minus"></i>}
                        </p>
                    </div>
                    <Collapse in={filter.languages}>
                        <div id="collapse-languages">
                            <ul className="filterList">
                                {language.map((data, index) => (
                                    <LiSpan
                                        key={index}
                                        Url={data.url}
                                        itemName={data.name}
                                        Value={data.value}
                                    />)
                                )}
                            </ul>
                        </div>
                    </Collapse>
                </div>

            </div>
        </aside>
    )
}

export default Fliters;
