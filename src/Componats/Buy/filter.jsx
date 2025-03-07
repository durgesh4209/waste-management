import React, { useState } from 'react';

const ProductFilterSearch = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isFilterVisible, setFilterVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    const toggleFilter = () => {
        setFilterVisible(!isFilterVisible);
    };

    return (
        <>

                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                All Product
                            </button>
                        </div>

                        <div className="flex-w flex-c-m m-tb-10">
                            <div
                                className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
                                onClick={toggleSearch}>
                                <i className="icon-search m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                                <i className="icon-close-search m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Search
                            </div>
                        </div>

                        {/* Search product */}
                        {isSearchVisible && (
                            <div className="panel-search w-full p-t-10 p-b-15">
                                <div className="bor8 dis-flex p-l-15">
                                    <button className="size-113 flex-c-m fs-16 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>

                                    <input
                                        className="mtext-107 size-114 plh2 p-r-15"
                                        type="text"
                                        name="search-product"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
      
        </>

    );
};

export default ProductFilterSearch;
