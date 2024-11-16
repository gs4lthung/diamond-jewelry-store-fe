"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import signupImg from "../../../../public/assets/img/Leonardo_Phoenix_A_luxurious_diamond_store_interior_with_rows_1.jpg";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import BackHomeBtn from "@/components/button/backHomeBtn";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { SignupInput } from "@/models/authentication";
// import { useAuth } from "@/hooks/useApi";
import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { MyInput, MyInputEmail, MyInputFirstName, MyInputLastName } from "@/components/ui/loginInput";
export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword : ''
};
const [isShowPassword, setIsShowPassword] = useState(false);
const validationSchema = Yup.object().shape({
  username: Yup.string()
      .required('Tên người dùng là bắt buộc')
      .min(3, 'Tên người dùng phải có ít nhất 3 ký tự')
      .max(20, 'Tên người dùng không được vượt quá 20 ký tự'),
  password: Yup.string()
      .required('Mật khẩu là bắt buộc')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(20, 'Mật khẩu không được vượt quá 20 ký tự'),
  firstName: Yup.string()
      .required('Họ là bắt buộc')
      .min(2, 'Tên Họ phải có ít nhất 2 ký tự')
      .max(20, 'Tên Họ không được vượt quá 20 ký tự'),
  lastName: Yup.string()
      .required('Tên là bắt buộc')
      .min(2, 'Tên của bạn phải có ít nhất 2 ký tự')
      .max(20, 'Tên của bạn không được vượt quá 20 ký tự'),
  email: Yup.string()
      .email('Địa chỉ email không hợp lệ')
      .required('Email là bắt buộc'),
});
// const { handleSignup } = useAuth();
const [isLoading, setIsLoading] = useState(false);
const handleSubmit = async (values: SignupInput) => {

    try {
        // await handleSignup(values);
        setIsLoading(true); // Start loading
        toast.success("Đăng ký thành công! Bạn sẽ chuyển đến trang đăng nhập trong giây lát...", {
            onClose: () => {
                setTimeout(() => {
                    router.replace('/signIn');
                }, 2000);
            },
            autoClose: 1000,
        });
    } catch (error) {
        toast.error("Đăng ký không thành công. Vui lòng thử lại.");
    } finally {
        setIsLoading(false);

    }
};
  return (
    <section className="min-h-screen flex bg-gray-50 relative">
      {/* Back to Home Page button */}
      <BackHomeBtn />

      <div className="flex w-full">
        {/* Left side with image */}
        <div className="relative w-[800px] h-screen">
          <Image
            src={signupImg}
            alt="Signup Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Right side with signup form */}
        <div className="w-[1200px] h-screen flex justify-center items-center">
          {" "}
          {/* Centering form vertically */}
          <div className="w-full max-w-md p-6  ">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-amber-700">
                Create Account
              </h2>
            </div>
            <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                       {({ isSubmitting }) => (
            <Form className="space-y-4">
                
              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="fullName">
                  Full Name
                </label>
                <Field
                                                    name='firstName'

                                                    component={MyInputFirstName}
                                                />
              </div>
             

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="birthday">
                  Birthday
                </label>
                <Field
                                                    name='lastName'

                                                    component={MyInputLastName}
                                                />
              </div>

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="emailOrPhone">
                  Email or phone number
                </label>
                <Field
                                                    name='email'
                                                    component={MyInputEmail}

                                                />
              </div>

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Field
                                                    name='username'
                                                    component={MyInput}
                                                    type={isShowPassword ? 'text' : 'password'}

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
             

              <div className="space-y-1">
                <label className="text-lg text-gray-700" htmlFor="password">
                 Confirm Password
                </label>
                <div className="relative">
                  <Field
                                                    name='confirmPassword'
                                                    component={MyInput}
                                                    type={isShowPassword ? 'text' : 'password'}

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
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-700 text-white py-3 rounded-md font-semibold hover:bg-amber-800 transition duration-300"
              >
                Sign Up
              </Button>

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
                className="w-full flex text-black items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                Sign Up With Google
              </button>
          
            </Form>
              )}
            </Formik>
            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-yellow-700">
                Already have an account?{" "}
                <Link
                  href="/signIn"
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
