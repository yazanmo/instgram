import React from "react";

import "./home.css";

export default function Home() {
  return (
    <section className="main">
      <div className="wrapper">
        <div className="left-col">
          <div className="status-wrapper">
            <div className="status-card">
              <div className="profile-pic">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt=""
                />
              </div>
              <p className="username">user_name_1</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <p className="username">user_name_2</p>
            </div>
            <div className="status-card">
              <div className="profile-pic">
                <img
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                  alt=""
                />
              </div>
              <p className="username">user_name_3</p>
            </div>
          </div>
          <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt=""/></div>
                        <p class="username">user_1</p>
                    </div>
                    <img src="https://icons-for-free.com/iconfiles/png/512/notification+settings+settings+button+icon-1320184051143953662.png" class="options" alt=""/>
                </div>
                <img src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=" class="post-image" alt=""/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="https://image.pngaaa.com/918/1336918-middle.png" class="icon" alt=""/>
                        <img src="https://www.pinclipart.com/picdir/middle/571-5717511_comment-instagram-icon-png-clipart.png" class="icon" alt=""/>
                        <img src="https://www.vhv.rs/dpng/d/535-5351493_paper-plane-instagram-send-icon-png-transparent-png.png" class="icon" alt=""/>
                        <img src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,012 likes</p>
                    <p class="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                    <p class="post-time">2 minutes ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="https://previews.123rf.com/images/fluffystudio/fluffystudio2012/fluffystudio201200141/161184997-happy-smile-icon-outline-pictogram-isolated-on-white.jpg" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
            </div>
            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img src="https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg" alt=""/></div>
                        <p class="username">user_2</p>
                    </div>
                    <img src="https://icons-for-free.com/iconfiles/png/512/notification+settings+settings+button+icon-1320184051143953662.png" class="options" alt=""/>
                </div>
                <img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg" class="post-image" alt=""/>
                <div class="post-content">
                    <div class="reaction-wrapper">
                    <img src="https://image.pngaaa.com/918/1336918-middle.png" class="icon" alt=""/>
                        <img src="https://www.pinclipart.com/picdir/middle/571-5717511_comment-instagram-icon-png-clipart.png" class="icon" alt=""/>
                        <img src="https://www.vhv.rs/dpng/d/535-5351493_paper-plane-instagram-send-icon-png-transparent-png.png" class="icon" alt=""/>
                        <img src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,012 likes</p>
                    <p class="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                    <p class="post-time">2 minutes ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="https://previews.123rf.com/images/fluffystudio/fluffystudio2012/fluffystudio201200141/161184997-happy-smile-icon-outline-pictogram-isolated-on-white.jpg" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
            </div>



        </  div>

        <div className="right-col">

        <div class="profile-card">
                <div class="profile-pic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZeyLuQlDuCYqWAkD3birEJcz40XytY5W8ntk4TAyU9Uh_6jM8bdBPabZle7TFaWrbmk&usqp=CAU" alt=""/>
                </div>
                <div>
                    <p class="username">user_3</p>
                    <p class="sub-text">yazan</p>
                </div>
                <button class="action-btn">switch</button>
            </div>
            <p class="suggestion-text">Suggestions for you</p>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src="https://image.shutterstock.com/image-vector/businessman-avatar-profile-picture-260nw-221565274.jpg  " alt=""/>
                </div>
                <div>
                    <p class="username">user_4</p>
                    <p class="sub-text">followed by user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/-avatar-people-person-profile-user-women-icon--icon-search-engine-23.png" alt=""/>
                </div>
                <div>
                    <p class="username">user_5</p>
                    <p class="sub-text">followed by user</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
        </div>
        </div>
        
    </section>
  );
}
