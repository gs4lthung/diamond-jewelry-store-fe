"use client";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import loginImg from "../../../../public/assets/img/SignIn.jpg";
import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Spinner,
} from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import BackHomeBtn from "@/components/button/backHomeBtn";
// import { loginFailure, loginStart } from '@/lib/redux/slice/authSlice';
// import { useAppDispatch } from '@/lib/redux/store';
import { LoginInput } from "@/models/authentication";
import Cookies from "js-cookie";
import { Field, Form, Formik } from "formik";
import { MyInput, MyInputPassword } from "@/components/ui/loginInput";
import axiosInstance from "@/utils/api/axiosInstance";
import { CustomAxiosRequestConfig } from "@/config/axios.config";
import { loginValidationShema } from "@/utils/validationSchema";
import ErrorMsg from "@/components/errorMsg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import cookieAuth from "@/utils/auth/cookie.auth";
import { Role } from "@/utils/enums";
interface roleJwt extends JwtPayload {
  role: string;
  userId: string;
}

export default function Login() {
  const error = useSelector((state: RootState) => state.auth.error);

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: LoginInput = {
    user_name: "",
    password: "",
  };

  // const dispatch = useAppDispatch();

  const handleLogin = async (values: LoginInput) => {
    // dispatch(loginStart());
    try {
      console.log("values", values);
      const response = await axiosInstance.post(`/auth/login`, values, {
        requiresAuth: true,
      } as CustomAxiosRequestConfig)
      console.log("response", response);

      cookieAuth.setAuthData(response.data.token);

      const { token, userId, role } = cookieAuth.getAuthData();

      switch (role) {
        case Role.ADMIN:
          router.replace(`/admin`);
          break;
        case Role.CUSTOMER:
          router.replace(`/`);
          break;
        default:
          break;
      }
    } catch (error) {}
  };

  return (
    <section className="min-h-screen flex bg-gray-50">
      <div className="relative w-1/2 h-screen">
        <Image
          src={loginImg}
          alt="Jewelry Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="flex w-1/2 h-screen justify-center items-center relative">
        <BackHomeBtn />

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationShema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values).then(() => {
              setSubmitting(false);
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Card className="w-full max-w-md border-none shadow-none bg-transparent">
              <CardBody className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-amber-700">
                    Welcome Back
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Let us continue assisting you with your journey
                  </p>
                </div>
                <Form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="text-lg text-gray-700" htmlFor="username">
                      Username
                    </label>
                    <Input
                      name="user_name"
                      type="text"
                      placeholder="Enter username"
                      onChange={handleChange}
                      value={values.user_name}
                    />
                    {errors.user_name && touched.user_name ? (
                      <ErrorMsg message={errors.user_name} color="red" />
                    ) : null}
                  </div>
                  <div className="space-y-1">
                    <label className="text-lg text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <ErrorMsg message={errors.password} color="red" />
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    {error && <ErrorMsg message={error} color="red" />}
                 <div className="flex items-center">  <Input type="checkbox" name="rememberMe" className="w-10" />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember Me
                    </label>
                  </div>
                      <div className="">
                        
                    <Link href='/forgotPass' className='text-blue-500 hover:text-orange-600'>Forgot Password?</Link>
                        </div>

                  
                  </div>
                  {/* <Button
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg"
                  >
                    Sign In
                  </Button> */}
                  <Button disabled={isLoading} type='submit' className='bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg'>
                                            {isLoading ? <Spinner color="default" /> : 'Sign In'}
                                        </Button>
                </Form>
                <div className="relative mt-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full flex text-black items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FcGoogle className="w-5 h-5" />
                  Sign In With Google
                </button>
                <div className="text-center mt-6">
                  <p className="text-gray-500">
                    Don't have an account?{" "}
                    <Link href="/signUp" className="text-amber-700 font-medium">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </CardBody>
            </Card>
          )}
        </Formik>
      </div>
    </section>
  );
}
