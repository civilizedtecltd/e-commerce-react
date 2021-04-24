import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import '../../assets/css/theme.css';
import { Form } from 'react-bootstrap';
import Language from './LanguageComponent';
//import BookCover from "./BookCoverComponent";
import PublishYear from './PublishYearComponent';
import StageComponent from './StageComponent';
import Discipline from './DisciplineComponent';
import Author from './AuthorComponent';
import PublishHouse from './PublishHouseComponent';
import PriceRanger from './PriceRangeComponent';
import styled from 'styled-components';

const Filters = (props) => {
  const [filter, setFilter] = useState({
    stage: true,
    discipline: true,
    price: true,
    author: true,
    publishingHouse: true,
    publishingYear: true,
    bookCover: true,
    languages: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width /*innerHeight: height*/ } = window;
      if (width <= 1199) {
        setFilter({
          stage: false,
          discipline: false,
          price: false,
          author: false,
          publishingHouse: false,
          publishingYear: false,
          bookCover: false,
          languages: false,
        });
      } else {
        setFilter({
          stage: true,
          discipline: true,
          price: true,
          author: true,
          publishingHouse: true,
          publishingYear: true,
          bookCover: true,
          languages: true,
        });
      }
    };

    window.onload = handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper>
      <div className={`${props.filterShow ? 'bg show' : 'bg'}`}>
        <aside className='asideFilterBar secGap clearfix' id='asideFilterBar'>
          <h2 className='asideTitle'>Filters</h2>

          <div className='asideBody bgGray' id='asideBody'>
            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Stage</h5>
                <p
                  onClick={() => setFilter({ ...filter, stage: !filter.stage })}
                  aria-controls='example-collapse-text'
                  aria-expanded={filter.stage}
                  className=' text-black-50 shadow-none desktop-view-icon-none'
                >
                  {!filter.stage ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>

              <Collapse in={filter.stage}>
                <div id='example-collapse-text'>
                  <ul className='filterList'>
                    <StageComponent />
                  </ul>
                </div>
              </Collapse>
            </div>

            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Discipline</h5>
                <p
                  onClick={() =>
                    setFilter({ ...filter, discipline: !filter.discipline })
                  }
                  aria-controls='collapse-discipline'
                  aria-expanded={filter.discipline}
                  className=' text-black-50 shadow-none desktop-view-icon-none'
                >
                  {!filter.discipline ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.discipline}>
                <div id='collapse-discipline'>
                  <ul className='filterList'>
                    <Discipline />
                  </ul>
                </div>
              </Collapse>
            </div>

            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Price Range</h5>
                <p
                  onClick={() => setFilter({ ...filter, price: !filter.price })}
                  aria-controls='collapse-price'
                  aria-expanded={filter.price}
                  className=' text-black-50 shadow-none desktop-view-icon-none'
                >
                  {!filter.price ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.price}>
                <div id='collapse-price'>
                  <Form>
                    <PriceRanger
                      callback={props.callback}
                      filter={props.filter}
                    />
                  </Form>
                </div>
              </Collapse>
            </div>

            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Author</h5>
                <p
                  onClick={() =>
                    setFilter({ ...filter, author: !filter.author })
                  }
                  aria-controls='collapse-author'
                  aria-expanded={filter.author}
                  className=' text-black-50 desktop-view-icon-none'
                >
                  {!filter.author ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.author}>
                <div id='collapse-author'>
                  <ul className='filterList'>
                    <Author />
                  </ul>
                </div>
              </Collapse>
            </div>

            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Publishing house</h5>
                <p
                  onClick={() =>
                    setFilter({
                      ...filter,
                      publishingHouse: !filter.publishingHouse,
                    })
                  }
                  aria-controls='collapse-publishingHouse'
                  aria-expanded={filter.publishingHouse}
                  className='text-black-50 desktop-view-icon-none'
                >
                  {!filter.publishingHouse ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.publishingHouse}>
                <div id='collapse-publishingHouse'>
                  <ul className='filterList'>
                    <PublishHouse />
                  </ul>
                </div>
              </Collapse>
            </div>

            <div className='singleFilterCard'>
              <div className='d-flex justify-content-between'>
                <h5>Publishing Year</h5>
                <p
                  onClick={() =>
                    setFilter({
                      ...filter,
                      publishingYear: !filter.publishingYear,
                    })
                  }
                  aria-controls='collapse-publishingYear'
                  aria-expanded={filter.publishingYear}
                  className=' text-black-50 desktop-view-icon-none'
                >
                  {!filter.publishingYear ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.publishingYear}>
                <div id='collapse-publishingYear'>
                  <ul className='filterList'>
                    <PublishYear />
                  </ul>
                </div>
              </Collapse>
            </div>

            {/*  <div className="singleFilterCard">

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
                                <BookCover/>
                            </ul>
                        </div>
                    </Collapse>
                </div> */}

            <div className='singleFilterCard p-0 border-0 m-0'>
              <div className='d-flex justify-content-between'>
                <h5>Language</h5>
                <p
                  onClick={() =>
                    setFilter({ ...filter, languages: !filter.languages })
                  }
                  aria-controls='collapse-languages'
                  aria-expanded={filter.languages}
                  className=' text-black-50 desktop-view-icon-none'
                >
                  {!filter.languages ? (
                    <i className='fa fa-plus'></i>
                  ) : (
                    <i className='fas fa-minus'></i>
                  )}
                </p>
              </div>
              <Collapse in={filter.languages}>
                <div id='collapse-languages'>
                  <ul className='filterList'>
                    <Language />
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter.priceFilter,
  };
};

const Wrapper = styled.div`
  overflow: scroll;
  @media (max-width: 990px) {
    .bg {
      overflow: scroll;
      position: fixed;
      width: 100%;
      height: auto;
      background-color: #fff;
      top: 17%;
      z-index: 88;
      left: 0;
      display: flex;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
    }
    .asideFilterBar {
      margin-top: 1rem;
      background-color: #f6f6f6;
      position: relative;
      width: 90%;
      overflow: scroll;
    }
    .asideTitle {
      margin-left: 1rem;
    }
  }

  .show {
    visibility: visible;
    opacity: 1;
  }
`;
export default connect(mapStateToProps, null)(Filters);
