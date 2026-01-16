import React from "react";
import Form from "./Form";
export default function Layout({ isLoading, onClickSubmit }) {
  return (
    <div className="layout">
      <Form isLoading={isLoading} onClickSubmit={onClickSubmit} />
    </div>
  );
}
