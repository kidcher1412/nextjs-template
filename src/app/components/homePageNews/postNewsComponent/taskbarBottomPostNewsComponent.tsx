import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

const TaskbarBottomPostNews = (numberOfReaction: { numLike: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; numComment: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined })=>{
    return(
        <div className="card-body d-flex p-0 mt-3">
            <a
                href="#"
                className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
            >
                <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                {numberOfReaction.numLike}
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
                <span className="d-none-xss">{numberOfReaction.numComment}</span>
            </a>
            <a
                href="#"
                id="dropdownMenu21"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                <span className="d-none-xs">Share</span>
            </a>
            <div
                className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                aria-labelledby="dropdownMenu21"
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
    )
}
export default TaskbarBottomPostNews