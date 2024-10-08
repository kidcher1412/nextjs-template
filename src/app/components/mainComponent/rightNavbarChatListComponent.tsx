"use client";
import { useEffect } from "react";
import $ from 'jquery';

const RightNavbarChatList = ()=>{
    useEffect(() => {
        //Tắt loading 
        $('.preloader-wrap').fadeOut(300)
        // $('body').addClass('loaded');

        // Đăng ký sự kiện click khi component mount
        $('.chat-active-btn').on('click', function () {
            $('.right-chat').toggleClass('active-sidebar');
            $('.main-content').toggleClass('right-chat-active');
            return false;
        });

        // Cleanup sự kiện khi component unmount hoặc khi useEffect chạy lại
        return () => {
            $('.chat-active-btn').off('click');
        };
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <div className="right-chat nav-wrap mt-2 right-scroll-bar">
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
                {/* loader wrapper */}
                <div className="preloader-wrap p-3">
                    <div className="box shimmer">
                        <div className="lines">
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                        </div>
                    </div>
                    <div className="box shimmer mb-3">
                        <div className="lines">
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                        </div>
                    </div>
                    <div className="box shimmer">
                        <div className="lines">
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                            <div className="line s_shimmer" />
                        </div>
                    </div>
                </div>
                {/* loader wrapper */}
                <div className="section full pe-3 ps-4 pt-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        CONTACTS
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <figure className="avatar float-left mb-0 me-2">
                                <img src="images/user-8.png" alt="image" className="w35" />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Hurin Seary
                                </a>
                            </h3>
                            <span className="badge badge-primary text-white badge-pill fw-500 mt-0">
                                2
                            </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <figure className="avatar float-left mb-0 me-2">
                                <img src="images/user-7.png" alt="image" className="w35" />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Victor Exrixon
                                </a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <figure className="avatar float-left mb-0 me-2">
                                <img src="images/user-6.png" alt="image" className="w35" />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Surfiya Zakir
                                </a>
                            </h3>
                            <span className="bg-warning ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <figure className="avatar float-left mb-0 me-2">
                                <img src="images/user-4.png" alt="image" className="w35" />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Hurin Seary
                                </a>
                            </h3>
                            <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                                4:09 pm
                            </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <figure className="avatar float-left mb-0 me-2">
                                <img src="images/user-3.png" alt="image" className="w35" />
                            </figure>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    David Goria
                                </a>
                            </h3>
                            <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                                2 days
                            </span>
                        </li>

                    </ul>
                </div>
                <div className="section full pe-3 ps-4 pt-4 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        GROUPS
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                                UD
                            </span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Studio Express
                                </a>
                            </h3>
                            <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                                2 min
                            </span>
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                                AR
                            </span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Armany Design
                                </a>
                            </h3>
                            <span className="bg-warning ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-mini-gradiant me-3 ls-3 text-white font-xssss fw-700">
                                UD
                            </span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    De fabous
                                </a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                    </ul>
                </div>
                <div className="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
                    <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                        Pages
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                                AB
                            </span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Armany Seary
                                </a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                        <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                            <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                                SD
                            </span>
                            <h3 className="fw-700 mb-0 mt-0">
                                <a
                                    className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                                    href="#"
                                >
                                    Entropio Inc
                                </a>
                            </h3>
                            <span className="bg-success ms-auto btn-round-xss" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default RightNavbarChatList