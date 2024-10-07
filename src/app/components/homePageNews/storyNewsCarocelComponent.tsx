"use client";

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';

const StoryNews = ()=>{
    useEffect(() => {
        // Đăng ký sự kiện khi component mount

    }, []); // Chỉ chạy một lần khi component mount

    return(
        <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
            <div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    centeredSlides={false}
                    grabCursor={true} // Cảm giác kéo
                    speed={400} // Thời gian chuyển đổi slide
                >

                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-none rounded-xxxl bg-dark overflow-hidden mb-3 mt-3"
                        >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <span className="btn-round-lg bg-white">
                                        <i className="feather-plus font-lg" />
                                    </span>
                                    <div className="clearfix" />
                                    <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Add Story{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{ backgroundImage: "url(images/s-1.jpg)" }}
                        >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-11.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Victor Exrixon{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{ backgroundImage: "url(images/s-2.jpg)" }}
                        >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-12.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Surfiya Zakir{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                        >
                            <video autoPlay="" loop="" className="float-right w-100">
                                <source src="images/s-4.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-9.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Goria Coast{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3 me-1"
                        >
                            <video autoPlay="" loop="" className="float-right w-100">
                                <source src="images/s-3.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-4.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Hurin Seary{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{ backgroundImage: "url(images/s-5.jpg)" }}
                        >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-3.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        David Goria{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{ backgroundImage: "url(images/s-6.jpg)" }}
                        >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                                <a href="#">
                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                        <img
                                            src="images/user-2.png"
                                            alt="image"
                                            className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                        />
                                    </figure>
                                    <div className="clearfix" />
                                    <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                        Seary Victor{" "}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    )

}
export default StoryNews