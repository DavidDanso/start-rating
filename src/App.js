import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Nav />
      <RatingModal rating={rating} setRating={setRating} />
      <MovieCard rating={rating} />
    </div>
  );
}

export default App;

// Nav
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src="./favourite.png" className="logo" alt="logo" />
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span
            className="navbar-text"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ⭐️ leave a rating
          </span>
        </div>
      </div>
      {/*  */}
    </nav>
  );
}

// RatingModal
function RatingModal({ rating, setRating }) {
  return (
    <div className="rating--modal">
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>How would you rate Nimona?</h1>
              <StarRating
                rating={rating}
                setRating={setRating}
                maxRating={5}
                messages={[
                  "Awful, not what I expected at all🤮",
                  "Poor, pretty disappointed🤬",
                  "Average, could be better🤗",
                  "Good, what I expected😎",
                  "Amazing, above expectations!🤩",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
function MovieCard({ rating }) {
  return (
    <>
      <h3
        className="star--modal"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        ⭐️ leave a rating
      </h3>
      <div className="movie--card">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="./cover.jpg"
                  className="movie--cover"
                  alt="movie--cover"
                />
              </div>
              {/* end movie--cover */}

              <div className="col-md-8 align-self-center">
                <h1>Nimona</h1>
                <p>2023 -- 1 hr 42 min</p>
                <h5>
                  Action / Adventure / Animation / Comedy / Drama / Family /
                  Fantasy / Sci-Fi / Thriller
                </h5>
                {rating ? (
                  <h6>
                    You rated this movie <span>{rating} ⭐️</span>
                  </h6>
                ) : (
                  ""
                )}
              </div>
              {/* end movie--card--details */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// StarRating
function StarRating({ rating, setRating, maxRating = 5, messages }) {
  // const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  const message =
    messages[tempRating - 1] || messages[rating - 1] || "Select Rating";
  //
  return (
    <>
      <p className="rating--p">{message}</p>
      <div className="star-rating">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onMouseIn={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
          />
        ))}
      </div>
    </>
  );
}

// Star
function Star({ onRate, fill, onMouseIn, onMouseOut }) {
  return (
    <span
      role="button"
      className="stars"
      onClick={onRate}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      {fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fd7c0f"
          stroke="#fd7c0f"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fd7c0f"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
