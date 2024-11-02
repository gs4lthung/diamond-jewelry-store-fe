"use client";

import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Image from 'next/image';
import image2 from '../../../../public/assets/img/diamond.png';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

export default function Signup() {
//   const router = useRouter();

  return (
    <section className="relative">
     <Link href="/">
        <Button
          startContent={<FaArrowAltCircleLeft />}
          className="bg-gradient-to-tr absolute m-5 from-pink-500 to-yellow-500 text-white shadow-lg z-20"
        >
          Back to Home Page
        </Button>
      </Link>

      <Card >
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-[800px] p-8 bg-white rounded-lg shadow-lg relative">
            <CardHeader className="justify-center mb--20">
              <h2 className="mb-8 text-2xl font-semibold text-center text-green-700">Create Account</h2>
            </CardHeader>

            {/* Image positioned outside the form */}
            <div className="absolute right-[-100px] top-1/4 z-10">
              <Image
                src={image2}
                alt="Jewelry Image"
                width={400}
                height={450}
                className="object-cover"
              />
            </div>

            <CardBody>
              <form className="space-y-6">
                <div className="max-w-[500px]">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="max-w-[500px]">
                  <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                    Birthday
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="max-w-[500px]">
                  <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                    Email or phone number
                  </label>
                  <input
                    type="text"
                    id="emailOrPhone"
                    placeholder="Enter email or phone number"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="max-w-[500px]">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter at least 8+ characters"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full max-w-[500px] py-2 mt-4 text-white bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-lg shadow-lg hover:opacity-90 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                >
                  Create Account
                </button>
              </form>
            </CardBody>
            <CardFooter>
              <p className="mt-6 text-center">
                Already have an account?{' '}
                <Link href="/(auth)/signIn" className="text-green-600 hover:underline">Login</Link>
              </p>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  );
}
