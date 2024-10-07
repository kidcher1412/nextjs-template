const StatusImageInfomation = ()=>{
    return (
        <div className="card-body d-block p-0 mb-3">
            <div className="row ps-2 pe-2">
                <div className="col-xs-6 col-sm-6 p-1">
                    <a href="images/t-36.jpg" data-lightbox="roadtri">
                        <img src="images/t-21.jpg" className="rounded-3 w-100" alt="image" />
                    </a>
                </div>
                <div className="col-xs-6 col-sm-6 p-1">
                    <a href="images/t-32.jpg" data-lightbox="roadtri">
                        <img src="images/t-22.jpg" className="rounded-3 w-100" alt="image" />
                    </a>
                </div>
            </div>
            <div className="row ps-2 pe-2">
                <div className="col-xs-4 col-sm-4 p-1">
                    <a href="images/t-33.jpg" data-lightbox="roadtri">
                        <img src="images/t-23.jpg" className="rounded-3 w-100" alt="image" />
                    </a>
                </div>
                <div className="col-xs-4 col-sm-4 p-1">
                    <a href="images/t-34.jpg" data-lightbox="roadtri">
                        <img src="images/t-24.jpg" className="rounded-3 w-100" alt="image" />
                    </a>
                </div>
                <div className="col-xs-4 col-sm-4 p-1">
                    <a
                        href="images/t-35.jpg"
                        data-lightbox="roadtri"
                        className="position-relative d-block"
                    >
                        <img src="images/t-25.jpg" className="rounded-3 w-100" alt="image" />
                        <span className="img-count font-sm text-white ls-3 fw-600">
                            <b>+2</b>
                        </span>
                    </a>
                </div>
            </div>
        </div>

    )

}
export default StatusImageInfomation