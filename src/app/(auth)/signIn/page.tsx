"use client";

import { useState } from 'react';
import Image from 'next/image';
import loginImg from '../../../../public/assets/img/SignIn.jpg';
import { Card, CardBody, Link } from '@nextui-org/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex bg-gray-50">
      {/* Left side with image */}
      <div className="relative w-[800] h-screen">
        <Image
          src={loginImg}
          alt="Jewelry Image"
          layout='fill'
          style={{objectFit: 'cover'}}
          priority
        />
      </div>

      {/* Right side with login form */}
      <div className="flex w-[1200] h-screen justify-center items-center relative">
        {/* Back to Home Page button */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-5 right-5 bg-gradient-to-tr from-amber-600 to-amber-800 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2"
        >
          <FaArrowAltCircleLeft />
          Back to Home Page
        </button>

        <Card className="w-1/2 border-none shadow-none bg-transparent">
          <CardBody className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-amber-700">
                Welcome Back
              </h2>
              <p className="text-gray-500 mt-2">
                Let us continue assisting you with your journey
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="email">
                  Email or phone number
                </label>
                <input
                  type="text"
                  id="email"
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

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-amber-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <Link
                  href='/forgotPass'
                  className='text-blue-600 hover:text-amber-700 transition-colors'
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-md font-semibold hover:bg-amber-800 transition duration-300"
              >
                Sign In
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                Sign In With Google
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-gray-500">
                Don't have an account?{' '}
                <Link
                  href='/signUp'
                  className="text-amber-700 hover:text-amber-800 font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
