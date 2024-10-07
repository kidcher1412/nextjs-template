"use client";

import ViewNews from "@/app/components/homePageNews/contentMain";
import LeftNavbar from "@/app/components/mainComponent/leftNavbarComponent";
import MainNavbar from "@/app/components/mainComponent/navbarComponent";
import RightNavbarChatList from "@/app/components/mainComponent/rightNavbarChatListComponent";



const Social = () => {
    // const onInit = () => {
    //     console.log('lightGallery has been initialized');
    // };



    return (
        <div>
            <MainNavbar></MainNavbar>
            <LeftNavbar></LeftNavbar>
            <RightNavbarChatList></RightNavbarChatList>
            <ViewNews></ViewNews>

        </div>
    )
}
export default Social;
