import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div className="header__banner">
      <div>
        <p>REACT CINEMA</p>
        <p>
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep scrolling.{" "}
        </p>
        <div>
          <a href="#movies">Movies</a>
          {/* <Link to={'/favorites'}> */}
          <button>Favorites</button>

          {/* </Link> */}
        </div>
      </div>
      <video autoPlay muted loop>
        <source
          src="./assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4"
          type="video/mp4"
        />
      </video>
      <img src="./assets/background.jpg" alt="" />
    </div>
  );
}
