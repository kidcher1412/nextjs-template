"use client";

import { useEffect } from "react";
import $ from 'jquery';
import StoryNews from "./storyNewsCarocelComponent";
import CreatePostView from "./createPostComponent";
import AnotherPostView from "./anotherPostView";

const ViewNews = ()=>{
    useEffect(() => {
        $('body').addClass('loaded');
    }, []); // Chỉ chạy một lần khi component mount
    return(
        <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
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
                    <div className="row feed-body">
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            {/* StoryNews */}
                            <StoryNews></StoryNews>
                            {/* Create Post News */}
                            <CreatePostView></CreatePostView>
                            {/* Another Post News */}
                            <AnotherPostView></AnotherPostView>


                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                                <div className="card-body p-0 d-flex">
                                    <figure className="avatar me-3 m-0">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Goria Coast{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            2 hour ago
                                        </span>
                                    </h4>
                                    <a
                                        href="#"
                                        className="ms-auto"
                                        id="dropdownMenu6"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu6"
                                    >
                                        <div className="card-body p-0 d-flex">
                                            <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Save Link{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Add this to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Hide Post{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Hide all from Group{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-lock text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow Group{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0 me-lg-5">
                                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                        nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                        faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
                                        <a href="#" className="fw-600 text-primary ms-2">
                                            See more
                                        </a>
                                    </p>
                                </div>
                                <div className="card-body d-flex p-0">
                                    <a
                                        href="#"
                                        className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                                    >
                                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                                        2.8K Like
                                    </a>
                                    <div className="emoji-wrap">
                                        <ul className="emojis list-inline mb-0">
                                            <li className="emoji list-inline-item">
                                                <i className="em em---1" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-angry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-anguished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-astonished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-blush" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-clap" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-cry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-full_moon_with_face" />
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                                        <span className="d-none-xss">22 Comment</span>
                                    </a>
                                    <a
                                        href="#"
                                        id="dropdownMenu31"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                                        <span className="d-none-xs">Share</span>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu31"
                                    >
                                        <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                                            Share{" "}
                                            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2" />
                                        </h4>
                                        <div className="card-body p-0 d-flex">
                                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-facebook">
                                                        <i className="font-xs ti-facebook text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-twiiter">
                                                        <i className="font-xs ti-twitter-alt text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-linkedin">
                                                        <i className="font-xs ti-linkedin text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-instagram">
                                                        <i className="font-xs ti-instagram text-white" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-round-lg bg-pinterest">
                                                        <i className="font-xs ti-pinterest text-white" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body p-0 d-flex">
                                            <ul className="d-flex align-items-center justify-content-between mt-2">
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-tumblr">
                                                        <i className="font-xs ti-tumblr text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-youtube">
                                                        <i className="font-xs ti-youtube text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-flicker">
                                                        <i className="font-xs ti-flickr text-white" />
                                                    </a>
                                                </li>
                                                <li className="me-1">
                                                    <a href="#" className="btn-round-lg bg-black">
                                                        <i className="font-xs ti-vimeo-alt text-white" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="btn-round-lg bg-whatsup">
                                                        <i className="font-xs feather-phone text-white" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                                            Copy Link
                                        </h4>
                                        <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500" />
                                        <input
                                            type="text"
                                            defaultValue="https://socia.be/1rGxjoJKVF0"
                                            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                                <div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/u-bg.jpg)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-11.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Aliqa Macale{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/s-2.jpg)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-2.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Seary Victor{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/s-6.jpg)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-3.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">John Steere </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/bb-16.png)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-4.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Mohannad Zitoun{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/e-4.jpg)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-7.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Studio Express{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/coming-soon.png)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-5.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Hendrix Stamp{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                                            <div
                                                className="card-body position-relative h100 bg-image-cover bg-image-center"
                                                style={{ backgroundImage: "url(images/bb-9.jpg)" }}
                                            />
                                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                                    <img
                                                        src="images/user-6.png"
                                                        alt="image"
                                                        className="float-right p-1 bg-white rounded-circle w-100"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xsss mt-2 mb-1">
                                                    Mohannad Zitoun{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                                    support@gmail.com
                                                </p>
                                                <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                                    LIVE
                                                </span>
                                                <div className="clearfix mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                                <div className="card-body p-0 d-flex">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            2 hour ago
                                        </span>
                                    </h4>
                                    <a
                                        href="#"
                                        className="ms-auto"
                                        id="dropdownMenu5"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu5"
                                    >
                                        <div className="card-body p-0 d-flex">
                                            <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Save Link{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Add this to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Hide Post{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Hide all from Group{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2">
                                            <i className="feather-lock text-grey-500 me-3 font-lg" />
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow Group{" "}
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                    Save to your saved items
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                                    <a href="default-video.html" className="video-btn">
                                        <video autoPlay="" loop="" className="float-right w-100">
                                            <source src="images/v-2.mp4" type="video/mp4" />
                                        </video>
                                    </a>
                                </div>
                                <div className="card-body p-0 me-lg-5">
                                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                        nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                        faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
                                        <a href="#" className="fw-600 text-primary ms-2">
                                            See more
                                        </a>
                                    </p>
                                </div>
                                <div className="card-body d-flex p-0">
                                    <a
                                        href="#"
                                        className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                                    >
                                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                                        2.8K Like
                                    </a>
                                    <div className="emoji-wrap">
                                        <ul className="emojis list-inline mb-0">
                                            <li className="emoji list-inline-item">
                                                <i className="em em---1" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-angry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-anguished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-astonished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-blush" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-clap" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-cry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-full_moon_with_face" />
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                                        <span className="d-none-xss">22 Comment</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                                        <span className="d-none-xs">Share</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                                <div className="card-body p-0 d-flex">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            2 hour ago
                                        </span>
                                    </h4>
                                    <a href="#" className="ms-auto">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                                    </a>
                                </div>
                                <div className="card-body p-0 me-lg-5">
                                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                        nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                        faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
                                        <a href="#" className="fw-600 text-primary ms-2">
                                            See more
                                        </a>
                                    </p>
                                </div>
                                <div className="card-body d-block p-0 mb-3">
                                    <div className="row ps-2 pe-2">
                                        <div className="col-xs-6 col-sm-6 p-1">
                                            <a href="images/t-36.jpg" data-lightbox="roadtri">
                                                <img
                                                    src="images/t-21.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 p-1">
                                            <a href="images/t-32.jpg" data-lightbox="roadtri">
                                                <img
                                                    src="images/t-22.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row ps-2 pe-2">
                                        <div className="col-xs-4 col-sm-4 p-1">
                                            <a href="images/t-33.jpg" data-lightbox="roadtri">
                                                <img
                                                    src="images/t-23.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 p-1">
                                            <a href="images/t-34.jpg" data-lightbox="roadtri">
                                                <img
                                                    src="images/t-24.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 p-1">
                                            <a
                                                href="images/t-35.jpg"
                                                data-lightbox="roadtri"
                                                className="position-relative d-block"
                                            >
                                                <img
                                                    src="images/t-25.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                                <span className="img-count font-sm text-white ls-3 fw-600">
                                                    <b>+2</b>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body d-flex p-0">
                                    <a
                                        href="#"
                                        className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                                    >
                                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                                        2.8K Like
                                    </a>
                                    <div className="emoji-wrap">
                                        <ul className="emojis list-inline mb-0">
                                            <li className="emoji list-inline-item">
                                                <i className="em em---1" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-angry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-anguished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-astonished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-blush" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-clap" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-cry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-full_moon_with_face" />
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                                        <span className="d-none-xss">22 Comment</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                                        <span className="d-none-xs">Share</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                                <div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
                                    <div className="item">
                                        <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                                    <img
                                                        src="images/user-11.png"
                                                        alt="image"
                                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xssss mt-3 mb-1">
                                                    Richard Bowers
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                                    @macale343
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                                >
                                                    FOLLOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                                    <img
                                                        src="images/user-9.png"
                                                        alt="image"
                                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xssss mt-3 mb-1">
                                                    David Goria{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                                    @macale343
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                                >
                                                    FOLLOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                                    <img
                                                        src="images/user-12.png"
                                                        alt="image"
                                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xssss mt-3 mb-1">
                                                    Vincent Parks
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                                    @macale343
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                                >
                                                    FOLLOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                                    <img
                                                        src="images/user-8.png"
                                                        alt="image"
                                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xssss mt-3 mb-1">
                                                    Studio Express{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                                    @macale343
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                                >
                                                    FOLLOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                                    <img
                                                        src="images/user-7.png"
                                                        alt="image"
                                                        className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                                    />
                                                </figure>
                                                <div className="clearfix" />
                                                <h4 className="fw-700 font-xssss mt-3 mb-1">
                                                    Aliqa Macale{" "}
                                                </h4>
                                                <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                                    @macale343
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                                >
                                                    FOLLOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                                <div className="card-body p-0 d-flex">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            2 hour ago
                                        </span>
                                    </h4>
                                    <a href="#" className="ms-auto">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                                    </a>
                                </div>
                                <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                                    <a href="default-video.html" className="video-btn">
                                        <video autoPlay="" loop="" className="float-right w-100">
                                            <source src="images/v-1.mp4" type="video/mp4" />
                                        </video>
                                    </a>
                                </div>
                                <div className="card-body p-0 me-lg-5">
                                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                        nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                        faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
                                        <a href="#" className="fw-600 text-primary ms-2">
                                            See more
                                        </a>
                                    </p>
                                </div>
                                <div className="card-body d-flex p-0">
                                    <a
                                        href="#"
                                        className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                                    >
                                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                                        2.8K Like
                                    </a>
                                    <div className="emoji-wrap">
                                        <ul className="emojis list-inline mb-0">
                                            <li className="emoji list-inline-item">
                                                <i className="em em---1" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-angry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-anguished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-astonished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-blush" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-clap" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-cry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-full_moon_with_face" />
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                                        <span className="d-none-xss">22 Comment</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                                        <span className="d-none-xs">Share</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                                <div className="card-body p-0 d-flex">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            2 hour ago
                                        </span>
                                    </h4>
                                    <a href="#" className="ms-auto">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                                    </a>
                                </div>
                                <div className="card-body p-0 me-lg-5">
                                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                        nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                        faucibus mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
                                        <a href="#" className="fw-600 text-primary ms-2">
                                            See more
                                        </a>
                                    </p>
                                </div>
                                <div className="card-body d-block p-0 mb-3">
                                    <div className="row ps-2 pe-2">
                                        <div className="col-sm-12 p-1">
                                            <a href="images/t-30.jpg" data-lightbox="roadtr">
                                                <img
                                                    src="images/t-31.jpg"
                                                    className="rounded-3 w-100"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body d-flex p-0">
                                    <a
                                        href="#"
                                        className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                                    >
                                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                                        2.8K Like
                                    </a>
                                    <div className="emoji-wrap">
                                        <ul className="emojis list-inline mb-0">
                                            <li className="emoji list-inline-item">
                                                <i className="em em---1" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-angry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-anguished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-astonished" />{" "}
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-blush" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-clap" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-cry" />
                                            </li>
                                            <li className="emoji list-inline-item">
                                                <i className="em em-full_moon_with_face" />
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                                        <span className="d-none-xss">22 Comment</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                    >
                                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                                        <span className="d-none-xs">Share</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                                <div
                                    className="snippet mt-2 ms-auto me-auto"
                                    data-title=".dot-typing"
                                >
                                    <div className="stage">
                                        <div className="dot-typing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                                <div className="card-body d-flex align-items-center p-4">
                                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                                        Friend Request
                                    </h4>
                                    <a
                                        href="default-member.html"
                                        className="fw-600 ms-auto font-xssss text-primary"
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-7.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                </div>
                                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Confirm
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Delete
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Mohannad Zitoun{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                </div>
                                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Confirm
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Delete
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                                    <figure className="avatar me-3">
                                        <img
                                            src="images/user-12.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                                        Mohannad Zitoun{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                </div>
                                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Confirm
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 p-0 ">
                                <div className="card-body d-flex align-items-center p-4 mb-0">
                                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                                        Confirm Friend
                                    </h4>
                                    <a
                                        href="default-member.html"
                                        className="fw-600 ms-auto font-xssss text-primary"
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3">
                                    <figure className="avatar me-2 mb-0">
                                        <img
                                            src="images/user-7.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        Anthony Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                    <a
                                        href="#"
                                        className="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"
                                    />
                                </div>
                                <div
                                    className="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3"
                                    style={{ marginBottom: "0 !important" }}
                                >
                                    <figure className="avatar me-2 mb-0">
                                        <img
                                            src="images/user-8.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        {" "}
                                        David Agfree{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                    <a
                                        href="#"
                                        className="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
                                    />
                                </div>
                                <div className="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3">
                                    <figure className="avatar me-2 mb-0">
                                        <img
                                            src="images/user-12.png"
                                            alt="image"
                                            className="shadow-sm rounded-circle w45"
                                        />
                                    </figure>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        Hugury Daugloi{" "}
                                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                            12 mutual friends
                                        </span>
                                    </h4>
                                    <a
                                        href="#"
                                        className="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
                                    />
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                                <div className="card-body d-flex align-items-center p-4">
                                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                                        Suggest Group
                                    </h4>
                                    <a
                                        href="default-group.html"
                                        className="fw-600 ms-auto font-xssss text-primary"
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                                    <img
                                        src="images/e-2.jpg"
                                        alt="img"
                                        className="img-fluid rounded-xxl mb-2"
                                    />
                                </div>
                                <div className="card-body dd-block pt-0 ps-4 pe-4 pb-4">
                                    <ul className="memberlist mt-1 mb-2 ms-0 d-block">
                                        <li className="w20">
                                            <a href="#">
                                                <img
                                                    src="images/user-6.png"
                                                    alt="user"
                                                    className="w35 d-inline-block"
                                                    style={{ opacity: 1 }}
                                                />
                                            </a>
                                        </li>
                                        <li className="w20">
                                            <a href="#">
                                                <img
                                                    src="images/user-7.png"
                                                    alt="user"
                                                    className="w35 d-inline-block"
                                                    style={{ opacity: 1 }}
                                                />
                                            </a>
                                        </li>
                                        <li className="w20">
                                            <a href="#">
                                                <img
                                                    src="images/user-8.png"
                                                    alt="user"
                                                    className="w35 d-inline-block"
                                                    style={{ opacity: 1 }}
                                                />
                                            </a>
                                        </li>
                                        <li className="w20">
                                            <a href="#">
                                                <img
                                                    src="images/user-3.png"
                                                    alt="user"
                                                    className="w35 d-inline-block"
                                                    style={{ opacity: 1 }}
                                                />
                                            </a>
                                        </li>
                                        <li className="last-member">
                                            <a
                                                href="#"
                                                className="bg-greylight fw-600 text-grey-500 font-xssss w35 ls-3 text-center"
                                                style={{ height: 35, lineHeight: 35 }}
                                            >
                                                +2
                                            </a>
                                        </li>
                                        <li className="ps-3 w-auto ms-1">
                                            <a href="#" className="fw-600 text-grey-500 font-xssss">
                                                Member apply
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                                <div className="card-body d-flex align-items-center p-4">
                                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                                        Suggest Pages
                                    </h4>
                                    <a
                                        href="default-group.html"
                                        className="fw-600 ms-auto font-xssss text-primary"
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                                    <img
                                        src="images/g-2.jpg"
                                        alt="img"
                                        className="img-fluid rounded-xxl mb-2"
                                    />
                                </div>
                                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                                    <a
                                        href="#"
                                        className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                                    >
                                        <i className="feather-external-link font-xss me-2" /> Like Page
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden">
                                    <img
                                        src="images/g-3.jpg"
                                        alt="img"
                                        className="img-fluid rounded-xxl mb-2 bg-lightblue"
                                    />
                                </div>
                                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                                    <a
                                        href="#"
                                        className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                                    >
                                        <i className="feather-external-link font-xss me-2" /> Like Page
                                    </a>
                                </div>
                            </div>
                            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                                <div className="card-body d-flex align-items-center  p-4">
                                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Event</h4>
                                    <a
                                        href="default-event.html"
                                        className="fw-600 ms-auto font-xssss text-primary"
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                                    <div className="bg-success me-2 p-3 rounded-xxl">
                                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                                            <span className="ls-1 d-block font-xsss text-white fw-600">
                                                FEB
                                            </span>
                                            22
                                        </h4>
                                    </div>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        Meeting with clients{" "}
                                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                                            41 madison ave, floor 24 new work, NY 10010
                                        </span>{" "}
                                    </h4>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                                    <div className="bg-warning me-2 p-3 rounded-xxl">
                                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                                            <span className="ls-1 d-block font-xsss text-white fw-600">
                                                APR
                                            </span>
                                            30
                                        </h4>
                                    </div>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        Developer Programe{" "}
                                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                                            41 madison ave, floor 24 new work, NY 10010
                                        </span>{" "}
                                    </h4>
                                </div>
                                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                                    <div className="bg-primary me-2 p-3 rounded-xxl">
                                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                                            <span className="ls-1 d-block font-xsss text-white fw-600">
                                                APR
                                            </span>
                                            23
                                        </h4>
                                    </div>
                                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                                        Aniversary Event{" "}
                                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                                            41 madison ave, floor 24 new work, NY 10010
                                        </span>{" "}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ViewNews