import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <Spinner animatio="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
