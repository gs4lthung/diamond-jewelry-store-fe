"use client";
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { useState } from "react";
import Image from "next/legacy/image";
import loginImg from "../../../../public/assets/img/SignIn.jpg";
import { Button, Card, CardBody, Link, Spinner } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import BackHomeBtn from "@/components/button/backHomeBtn";
import { loginFailure, loginStart } from '@/lib/redux/slice/authSlice';
import { LoginError } from '@/utilities/authUtils/loginValidation';
import { useAppDispatch } from '@/lib/redux/store';
import { LoginInput } from '@/models/authentication';
import baseApi from '@/utilities/baseApi';
import { ROLE } from '@/utilities/roleUtils/role';
import Cookies from 'js-cookie';
import { Field, Form, Formik } from 'formik';
import { MyInput, MyInputPassword } from '@/components/ui/loginInput';

interface roleJwt extends JwtPayload {
  role: string;
  userId: string;
}

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: LoginInput = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must contain 3 characters')
      .max(20, 'Username cannot exceed 20 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
  });

  const dispatch = useAppDispatch();

  const handleLogin = async (values: LoginInput) => {
    setIsLoading(true);
    dispatch(loginStart());
    try {
      const { data } = await baseApi.post(`api/v1/auth/signin`, values);

      toast.success("Login successful! You will be redirected to the home page shortly...", {
        onClose: () => router.replace('/'),
        autoClose: 1000,
      });

      const decodedToken = jwtDecode(data.token) as roleJwt;
      Cookies.set('token', data.token, { expires: 1 });
      Cookies.set('role', decodedToken.role, { expires: 1 });
      Cookies.set('userId', decodedToken.userId, { expires: 1 });

      switch (decodedToken.role) {
        case ROLE.role1:
          router.replace(`/`);
          break;
        case ROLE.role2:
          router.replace(`/shopOwner`);
          break;
        case ROLE.role3:
          router.replace(`/admin`);
          break;
        default:
          break;
      }

      localStorage.setItem("token", data.token);
    } catch (error) {
      toast.error("Login failed! Please check your account and password again.");
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.error?.message;
        const translatedError = LoginError[errorResponse as keyof typeof LoginError];
        dispatch(loginFailure(translatedError ?? "An error occurred."));
      } else {
        dispatch(loginFailure("An error occurred."));
      }
    } finally {
      setIsLoading(false);
    }
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
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
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

              <Form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-lg text-gray-700" htmlFor="username">
                    Username
                  </label>
                  <Field
                    name="username"
                    component={MyInput}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-lg text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      component={MyInputPassword}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md pr-10"
                    />

                  </div>
                </div>

                <Button disabled={isLoading} type='submit' className='bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg'>
                  {isLoading ? <Spinner color="default" /> : 'Sign In'}
                </Button>
              </Form>

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
        </Formik>
      </div>
    </section>
  );
}
