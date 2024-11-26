// src/HomePage.js
import React from "react";
import './loading.css';
import img1 from '../img/white back.jpg';
import { Link } from 'react-router-dom';
import pdf1 from '../img/dummy.pdf'

function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center top', backgroundSize: 'cover' }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800">Elevate Your Shopping Experience</h2>
        <p className="mt-4 text-lg text-gray-600">Shop the latest trends and exclusive offers at MS Store</p>
        <div className="mt-6">
          <h4 className="text-amber-800 mt-3 font-semibold">Download Our Shop About Us</h4><br />
          <a href={pdf1} download="about.pdf" className="bg-amber-800 pr-8 pl-8 pt-1 pb-2 text-white mt-8 hover:bg-amber-700 font-bold rounded-md">
            Download For
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
