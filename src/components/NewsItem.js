import React from "react";
import image from "./kaltak.jpg";
import Spinner from "./Spinner";
export default function NewsItem(props) {
  let {
    title,
    description,
    imageurl,
    newsurl,
    author,
    publishedAt,
    mode,
    toggle_mode,
    source,
  } = props;
  return (
    <div className="container my-3 m-md-4">
      <div className="card" style={{ width: "20rem" }}>
        <span
          className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${toggle_mode} text-${mode}`}
          style={{ width: "200px" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={!imageurl ? image : imageurl}
          className="card-img-top"
          alt="..."
          style={{ height: "160px", width: "19.9rem" }}
        />
        <div className={`card-body bg-${mode}`}>
          <h5
            className={`card-title text-${toggle_mode}`}
            style={{ height: "7rem" }}
          >
            {title !== null && title.length > 110 ? (
              `${title.slice(0, 110)}....`
            ) : title === null ? (
              <span>
                <Spinner height={`2rem`} width={`2rem`} fs={`4`} />
              </span>
            ) : (
              <span>
                {title} <br />
              </span>
            )}
          </h5>
          <div
            className={`card-text text-${toggle_mode}`}
            style={{ height: "8rem" }}
          >
            {description !== null && description.length > 175 ? (
              `${description.slice(0, 175)}....`
            ) : description !== null ? (
              <span>
                {description} <br /> <br />
              </span>
            ) : (
              <span className="fw-bold text-center">
                <Spinner height={`3rem`} width={`3rem`} fs={`4`} my={`2`} />
              </span>
            )}
          </div>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-outline-${toggle_mode}`}
          >
            Read more
          </a>
        </div>
        <div className={`card-footer text-${toggle_mode} bg-${mode}`}>
          {`Author:- ${
            !author
              ? "Unknown"
              : author.length > 24
              ? `${author.slice(0, 24)}...`
              : author
          }`}{" "}
          <br />
          {`Published on: ${new Date(publishedAt).toDateString()}`}
        </div>
      </div>
    </div>
  );
}
