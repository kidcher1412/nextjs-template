import HeadInformationPost from "./postNewsComponent/headInformationPostComponent"
import StatusImageInfomation from "./postNewsComponent/statusImageInfomationComponent"
import StatusStringInfomation from "./postNewsComponent/statusStringInfomationComponent"
import TaskbarBottomPostNews from "./postNewsComponent/taskbarBottomPostNewsComponent"

const AnotherPostView = ()=>(
    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
        {/* thẻ thông tin */}
        <HeadInformationPost
            avataImage="images/user-7.png"
            userProfileName="Thong"
            timePost = "123 giờ trước"
        ></HeadInformationPost>
        {/* string status here */}
        <StatusStringInfomation
            stringPost={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"}
        ></StatusStringInfomation>
        {/* Image post here  */}
        <StatusImageInfomation></StatusImageInfomation>
        {/* bottom taskbar  */}
        <TaskbarBottomPostNews
            numLike={123}
            numComment={865}
        ></TaskbarBottomPostNews>
    </div>
)
export default AnotherPostView