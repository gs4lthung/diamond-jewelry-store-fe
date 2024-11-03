"use client";

import { useState } from 'react';
import Image from 'next/image';
import signupImg from '../../../../public/assets/img/Leonardo_Phoenix_A_luxurious_diamond_store_interior_with_rows_1.jpg';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex bg-gray-50 relative">
      {/* Back to Home Page button */}
      <Button
        startContent={<FaArrowAltCircleLeft />}
        className="absolute top-5 right-5 bg-gradient-to-tr from-amber-600 to-amber-800 text-white shadow-lg"
        onClick={() => router.push('/')}
      >
        Back to Home Page
      </Button>

      <div className="flex w-full">
        {/* Left side with image */}
        <div className="relative w-[800px] h-screen">
          <Image
            src={signupImg}
            alt="Signup Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side with signup form */}
        <div className="w-[1200px] h-screen flex justify-center items-center"> {/* Centering form vertically */}
          <div className="w-full max-w-md p-6  ">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-amber-700">
                Create Account
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="birthday">
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="emailOrPhone">
                  Email or phone number
                </label>
                <input
                  type="text"
                  id="emailOrPhone"
                  placeholder="Enter email or phone number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-md font-semibold hover:bg-amber-800 transition duration-300"
              >
                Sign Up
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                Sign Up With Google
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-gray-500">
                Already have an account?{' '}
                <Link
                  href='/signIn'
                  className="text-amber-700 hover:text-amber-800 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
