import React, { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="profile-card-wrapper" data-theme={theme}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div className="profile-card horizontal">
        <div className="profile-left">
          {/* Profile Image */}
          <div className="profile-image">
            <img src="/ProfilePic.jpg" alt="Profile" />
          </div>
          <h2 className="profile-name">Dulaj Kekulawala</h2>
          <div className="profile-info">
            <p className="bio">
              ✨ React Developer + <br/>Data Analyst <br /> 🚀 Turning code into magic & data into insights
            </p>
          </div>
        </div>
        
        {/* Social Icons Section */}
        <div className="profile-right">
          <div className="social-icons-vertical">
            <a
              href="mailto:dulajkekulawala1905@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon mail"
              aria-label="Email"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 3.3-8 5-8-5V8l8 5 8-5v1.3Z" />
                </svg>
                <h4>dulajkekulawala1905@gmail.com</h4>
              </div>  
            </a>
            
            {/* GitHub */}
            <a
              href="https://github.com/dula1905"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
              aria-label="GitHub"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h4>GitHub Profile</h4>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dulaj-kekulawala-83ab81347"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
              aria-label="LinkedIn"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
                </svg>
                <h4>LinkedIn Profile</h4>
              </div>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/igxdula?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="icon twitter"
              aria-label="Twitter"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z" />
                </svg>
                <h4>@igxdula</h4>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/dulaj.kekulawala.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
              aria-label="Facebook"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24h11.497v-9.294H9.691v-3.622h3.131V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.505 0-1.797.715-1.797 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
                <h4>Facebook Profile</h4>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dulaj_kekulawala?igsh=b3Q3cDFsOTJlZXg5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
              aria-label="Instagram"
            >
              <div className="icon-text">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.323.975.975 1.261 2.242 1.323 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.261-3.608 1.323-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.348-2.633 1.323-3.608.975-.975 2.242-1.261 3.608-1.323C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.053.072 5.775.131 4.602.438 3.678 1.362 2.754 2.286 2.447 3.459 2.388 4.737.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.278.366 2.451 1.29 3.375.924.924 2.097 1.231 3.375 1.29 1.278.059 1.687.072 4.947.072s3.668-.014 4.947-.072c1.278-.059 2.451-.366 3.375-1.29.924-.924 1.231-2.097 1.29-3.375.059-1.278.072-1.687.072-4.947 0-3.259-.014-3.668-.072-4.947-.059-1.278-.366-2.451-1.29-3.375-.924-.924-2.097-1.231-3.375-1.29C15.668.014 15.259 0 12 0z" />
                </svg>
                <h4>@dulaj_kekulawala</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;