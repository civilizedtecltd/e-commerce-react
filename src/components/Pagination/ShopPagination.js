import React,{ useState } from 'react'
const ShopPagination = ({currentPage,totalPage }) => {

    const [preview , setPreview ] = useState(1);
    const [ next , setNext ] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        setPage(currentPage)
    }
  
    const handlePreviews = (e)=>{
      e.preventDefault();
    }

    return (
        <div className="row mb-4">
        <div className="col">
          <ul className="singleFilter d-flex align-items-center">
            <li>
              <label htmlFor="">Sort By</label>
            </li>
            <li>
              <select className="filterSelect form-control">
                <option>Popular</option>
                <option>New</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className="singleFilter d-flex align-items-center">
            <li>
              <label htmlFor="">Show</label>
            </li>

            <li>
              <select name="up-filter-select" className="filterSelect form-control" value={show} onChange={handleShowBook}>
                <option value="16">16</option>
                <option value="10">10</option>
                <option value="5">5</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="col">
          <nav aria-label="Page navigation">
            <ul className="pagination align-items-center justify-content-between">
              <li className="page-item" onClick={handlePreviews}>
                <button className="page-link">
                  <i className="fas fa-chevron-left"></i>
                </button>
              </li>
              <li className="page-item">Page</li>
              <li className="page-item">
                <input id="next-page" type="text" className="page-link" value={ currentPage } readOnly/>
                 
               
              </li>
              <li className="page-item">of</li>
              <li className="page-item">
                <input type="text" id="total-page" value= {totalPage} className="page-link" readOnly/>
              </li>
              <li className="page-item" onClick={handleNext} >
                <button className="page-link">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    );
}

export default ShopPagination;