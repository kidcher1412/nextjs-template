"use client"

import { useEffect } from 'react';
// import $ from "jquery"
import tippy from 'tippy.js';

const HeadInformationPost = (userInfomation)=>{
    useEffect(() => {
        const template = document.querySelector('#headThisTaskbar');
        tippy("#dropdownMenu2", {
            content: template.innerHTML,  // Tham chiếu đến thẻ dropdown
            allowHTML: true,  // Cho phép HTML
            trigger: 'click',  // Hiển thị khi click
            interactive: true, // Cho phép tương tác với dropdown
            placement: 'bottom-end',  // Vị trí của popup
            animation: 'fade',
            followCursor: true,
            animateFill: true,
            theme: "light",
            arrow: false
        });
    }, []); //

    return(
        <div className="card-body p-0 d-flex">
            <figure className="avatar me-3">
                <img
                    src={userInfomation.avataImage}
                    alt="image"
                    className="shadow-sm rounded-circle w45"
                />
            </figure>
            <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                {userInfomation.userProfileName}{" "}
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                    {userInfomation.timePost}
                </span>
            </h4>
            <div
                className="ms-auto"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
            </div>
            <div
                id="headThisTaskbar"
                className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                aria-labelledby="dropdownMenu2"
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
    )

}
export default  HeadInformationPost