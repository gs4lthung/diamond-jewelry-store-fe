import React from "react";

interface ErrorMsgProps {
  message: string;
  color: string;
}

export default function ErrorMsg({ message, color }: ErrorMsgProps) {
  return (
    <div style={{ fontSize: "14px", color: color || "red" }}>{message}</div>
  );
}
