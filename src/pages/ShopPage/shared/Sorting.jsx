import React from "react";
import {Row} from "react-bootstrap";
import {PaginationRowWrapper} from "../styled";

const Sorting = (props) => {
    const {
        filterShow,
        sortBy,
        handleSortBy,
        classes,
        handleNext,
        handlePreviews,
        handleShowBook,
        pagination,
        totalPage
    } = props


    return (
        <PaginationRowWrapper>
            <Row
                className="Pagination-Row mb-5"
            >
                <div className='col'>
                    <ul className='singleFilter d-flex align-items-center'>
                        <li>
                            <label htmlFor=''>Sort By</label>
                        </li>
                        <li>
                            <select
                                className='filterSelect form-control'
                                value={sortBy}
                                onChange={handleSortBy}
                            >
                                <option value=''>select</option>
                                <option value='Popular'>Popular</option>
                                <option value='New'>New</option>
                                <option value='Price: low to high'>
                                    Price: low to high
                                </option>
                                <option value='Price: high to low'>
                                    Price: high to low
                                </option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className='col'>
                    <ul className='singleFilter d-flex align-items-center'>
                        <li>
                            <label>Show</label>
                        </li>

                        <li>
                            <select
                                name='up-filter-select'
                                className='filterSelect form-control'
                                value={pagination.show}
                                onChange={handleShowBook}
                            >
                                <option value='20'>20</option>
                                <option value='45'>45</option>
                                <option value='100'>100</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className='col'>
                    <nav aria-label='Page navigation'>
                        <ul className='pagination align-items-center justify-content-between'>
                            <li
                                className={`page-item ${classes.page_field}`}
                                onClick={handlePreviews}
                            >
                                <button className='page-link'>
                                    <i className='fas fa-chevron-left'/>
                                </button>
                            </li>
                            <li
                                className={`page-item ${classes.page_field}`}
                            >
                                Page
                            </li>
                            <li
                                className={`page-item ${classes.page_field}`}
                            >
                                <input
                                    type='text'
                                    className='page-link'
                                    value={pagination.page}
                                    readOnly
                                />
                            </li>
                            <li className='page-item'>of</li>
                            <li
                                className={`page-item ${classes.page_field}`}
                            >
                                <input
                                    type='text'
                                    value={totalPage || 0}
                                    className='page-link'
                                    readOnly
                                />
                            </li>
                            <li
                                className='page-item'
                                onClick={handleNext}
                            >
                                <button className='page-link'>
                                    <i className='fas fa-chevron-right'/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Row>
        </PaginationRowWrapper>
    )
}

export default Sorting
