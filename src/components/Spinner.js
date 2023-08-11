import React from "react";
export default function Spinner(props) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center my-${props.my} py-${props.my}`}
    >
      <div
        className={`spinner-border border-4 text-${props.toggle_mode}`}
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
        }}
        role="status"
      ></div>
      <div
        className={`fs-${props.fs} mt-2 fw-semibold text-${props.toggle_mode}`}
      >
        Loading...
      </div>
    </div>
  );
}
