/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TestCategoryRow from './TestCategoryRow';
import ProductCard from '../product/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Navigation } from "swiper";

const TestCategory = ({catProducts, showToastMessage}) => {
    const categoryName = catProducts?.data?.[0]?.attributes?.category?.data?.attributes?.name;
    const showToastMsg = (data)=>{
      showToastMessage({
        msg: data.msg
      })
    }
    return (
        <>
        <div className="container electronics mb-4">
            <div className="bg-lighter trending-products">
                <div className="heading heading-flex">
                    <div className="heading-left">
                        <h2 className="title font-weight-bold mb-1">{categoryName}</h2>
                        {/* End .title */}
                    </div>
                {/* End .heading-left */}
                    {/* <div className="heading-right">
                        <ul
                        className="nav nav-pills justify-content-center mr-n3"
                        role="tablist"
                        >
                            { 
                            subCategory.data.map(sb => {
                                // eslint-disable-next-line react/jsx-key
                                return <li className="nav-item">
                                    <a
                                        className="nav-link font-size-normal second-primary-color font-weight-normal text-uppercase active"
                                        id={sb.attributes.slug}
                                        data-toggle="tab"
                                        href="#electronic-cell-tab"
                                        role="tab"
                                        aria-controls={sb.attributes.slug}
                                        aria-selected="true"
                                        >
                                        {sb.attributes.name}
                                    </a>
                            </li> 

                            }) 
                            }
                        </ul>
                    </div> */}
                {/* End .heading-right */}
                </div>


                {/* End .heading */}


                <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView:5,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
          
                navigation={true}
                mousewheel={false}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    catProducts?.data?.map((product)=><SwiperSlide key={product?.id}> 
                                                          <ProductCard key={product?.id} data = {product} showToastMsg={showToastMsg}/>
                                              </SwiperSlide>
                    )
                }
          </Swiper> 

            </div>
        </div>

        </>
    );
};

export default TestCategory;