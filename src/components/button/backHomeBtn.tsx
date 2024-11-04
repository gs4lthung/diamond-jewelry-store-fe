import React from 'react'
import { Link } from "@nextui-org/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function BackHomeBtn() {
  return (
    <Link
    href="/"
    className="absolute top-5 right-5 bg-gradient-to-tr from-amber-600 to-amber-800 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2"
  >
    <FaArrowAltCircleLeft />
    Back to Home Page
  </Link>
  )
}
