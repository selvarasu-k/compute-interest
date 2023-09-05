import React from 'react';
import './Pagination.css';

const Pagination = (props) => {

    const npage = Math.ceil(props.borrowdata.length / props.recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const firstPage = () => {
      props.setCurrentPage(1);
    }

    const previousPage = () => {
        if(props.currentPage !== 1) {
              props.setCurrentPage(props.currentPage - 1);
          }
        }

    const changeCurrentPage = (id) => {
        props.setCurrentPage(id);
    }

    const nextPage = () => {
        if(props.currentPage !== npage) {
            props.setCurrentPage(props.currentPage + 1);
        }
    }

    const lastPage = () => {
      props.setCurrentPage(npage);
    }

  return (
    <div className='pagination-block'>
        <nav>
            <ul className='pagination'>
                <li className="page-item">
                    <a href="/#" className='page-link' onClick={firstPage} 
                    style={{opacity: props.currentPage !== 1 ? "1" : "0.5"}}>FIRST
                    </a>
                </li>
                <li className='page-item'>
                    <a href="/#" className='page-link' 
                    onClick={previousPage} style={{opacity: props.currentPage !== 1 ? "1" : "0.5"}}>PREV
                    </a>
                </li>
                {
                    numbers.map((num, index) => (
                        <li className={`page-item ${props.currentPage === num ? 'paginate-active' : ''}`} key={index}>
                            <a href="/#" className='page-links' 
                            onClick={() => changeCurrentPage(num)}>{num}
                            </a>
                        </li>
                    ))
                }
                <li className='page-item'>
                    <a href="/#" className='page-link' 
                                onClick={nextPage} style={{opacity: props.currentPage !== npage ? "1" : "0.5"}}>NEXT
                    </a>
                </li>
                <li className="page-item">
                    <a href="/#" className='page-link' 
                    onClick={lastPage} style={{opacity: props.currentPage !== npage ? "1" : "0.5"}}>LAST
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination;