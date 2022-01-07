import React from "react";

import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <header>
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt=""
              />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">yazan</h1>

              <button class="btn profile-edit-btn">Edit Profile</button>

              <button
                class="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i class="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div class="profile-stats">
              <ul>
                <li>
                  <span class="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span class="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span class="profile-stat-count">206K</span> following
                </li>
              </ul>
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">Full stack developer</span>{" "}
                Innovative optimized solution seeker. Excited to be at the
                deployment phase of my new career as a full-stack developer. I
                am ambitious, adventurous, assiduous, animated .
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="gallery">
            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 89
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 5
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 42
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 42
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
