"use client";

import Image from 'next/image';
import loginImg from '../../../../public/assets/img/diamond.png';
import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  return (
    <section className='relative'>
      <Button
        startContent={<FaArrowAltCircleLeft />}
        className="bg-gradient-to-tr absolute m-5 from-pink-500 to-yellow-500 text-white shadow-lg z-20"
        onClick={() => router.push('/')}  // Navigate to home page on click
      >
        Back to Home Page
      </Button>
        
      <Card className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-20 rounded-lg shadow-lg w-full max-w-[800px] relative">
          <CardHeader>
            <div className="flex items-center absolute -right-24 top-1/4 transform -translate-y-1/2 z-10">
              <h2 className="text-3xl font-semibold text-orange-500 mb-6">Welcome To DiaMond Shop</h2>
              <Image 
                src={loginImg} 
                alt="Jewelry Image" 
                width={400}
                height={400}
                className="object-cover mr--10"
              />
            </div>
          </CardHeader>

          <CardBody>
            <form className="space-y-6">
              <div className="flex flex-col items-start pt-20 pr-20">
                <label className="block text-gray-700" htmlFor="email">Email or phone number</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter email or phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex flex-col items-start pt-15 pr-20">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter at least 8+ characters"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <div className='forgot-password text-right'>
                  <Link href='/forgotPass' className='text-blue-500 hover:text-orange-600 pr-20'>Forget Password?</Link>
                </div>
              </div>

              <div className='pr-20'>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white py-3 rounded-md font-semibold hover:bg-orange-500 transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </CardBody>
          
          <CardFooter>
            Already have an account?
            <Link href='/auth/signUp'>
              <span className='text-default-500 hover:text-orange-600'> Sign Up Here </span>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </section>
  );
};

export default LoginForm;
