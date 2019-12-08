import React from 'react';
import filter from "../../inc/shop/stage";
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
    return (
        <aside
            className="asideFilterBar secGap clearfix"
            id="asideFilterBar"
        >
            <h2 className="asideTitle">Filters</h2>

            <div className="asideBody bgGray" id="asideBody">
                <div className="singleFilterCard">
                    <h5>Stage</h5>
                    <ul className="filterList">
                        {filter.map((data, index) => (
                            <LiSpan

                                key={index}
                                Url={data.url}
                                itemName={data.name}
                                Value={data.value}
                            />)
                        )}
                    </ul>
                </div>

                <div className="singleFilterCard">
                    <h5>Discipline</h5>
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


                <div className="singleFilterCard">
                    <h5>Price Range</h5>
                    <Form>
                        <PriceRanger />
                    </Form>
                </div>


                <div className="singleFilterCard">
                    <h5>Author</h5>
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
                    {/* end of filterList */}
                </div>


                <div className="singleFilterCard">
                    <h5>Publishing house</h5>
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
                    {/* end of filterList */}
                </div>


                <div className="singleFilterCard">
                    <h5>Publishing Year</h5>
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
                    {/* end of filterList */}
                </div>


                <div className="singleFilterCard">
                    <h5>Book Cover</h5>
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
                    {/* end of filterList */}
                </div>


                <div className="singleFilterCard p-0 border-0 m-0">
                    <h5>Language</h5>
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
                    {/* end of filterList */}
                </div>

            </div>
        </aside>
    )
}

export default Fliters;
