"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@nextui-org/react';
import { BiEdit } from 'react-icons/bi';
import { Formik, Form, Field, FieldInputProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { MdFlipCameraIos } from 'react-icons/md';
import uploadFile from '@/utils/upload';

const Profile: React.FC = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Tên Họ là bắt buộc')
            .min(2, 'Tên Họ phải có ít nhất 2 ký tự')
            .max(20, 'Tên Họ không được vượt quá 20 ký tự'),
        lastName: Yup.string()
            .required('Tên là bắt buộc')
            .min(2, 'Tên phải có ít nhất 2 ký tự')
            .max(20, 'Tên không được vượt quá 20 ký tự'),
        email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Số điện thoại chỉ chứa số')
            .matches(/^0[0-9]{9}$/, 'Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số')
            .required('Số điện thoại là bắt buộc'),
    });

    const [isEditing, setIsEditing] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [items, setItems] = useState({
        firstName: 'Nguyen',
        lastName: 'Van A',
        email: 'example@example.com',
        phone: '0123456789',
        profileImageUrl: '',
    });

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const fileUrl = await uploadFile(file.name, file); // Upload logic
            setItems({ ...items, profileImageUrl: fileUrl });
            setPreviewImage(fileUrl);
        }
    };

    const handleUpdate = async (values: typeof items, { setSubmitting }: FormikHelpers<typeof items>) => {
        try {
            // Simulate API update
            setItems(values);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-h-screen mt-10 mr-20">
            {/* Profile Picture Section */}
            <div className="flex justify-center items-center w-full">
                <div className="relative w-24 h-24">
                    <Avatar
                        src={previewImage || items.profileImageUrl || 'https://via.placeholder.com/150'}
                        size="lg"
                        className="w-full h-full object-cover"
                    />
                    {isEditing && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <MdFlipCameraIos className="text-white h-6 w-6" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                hidden
                                onChange={handleUpload}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Form Section */}
            <div className="container mt-6 flex justify-center">
                <Card className="w-full max-w-xl">
                    <CardHeader>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">Tài Khoản</h2>
                            <p>Thay đổi thông tin cá nhân của bạn.</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <Formik
                        initialValues={items}
                        validationSchema={validationSchema}
                        onSubmit={handleUpdate}
                        enableReinitialize
                    >
                        {({ errors, touched, isSubmitting, setFieldValue }) => (
                            <Form>
                                <CardBody>
                                    <div className="space-y-4">
                                        <Field name="firstName">
                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Họ"
                                                        disabled={!isEditing}
                                                        className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
                                                    />
                                                    {errors.firstName && touched.firstName && (
                                                        <p className="text-red-500 text-sm">{errors.firstName}</p>
                                                    )}
                                                </>
                                            )}
                                        </Field>
                                        <Field name="lastName">
                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Tên"
                                                        disabled={!isEditing}
                                                        className={errors.lastName && touched.lastName ? 'border-red-500' : ''}
                                                    />
                                                    {errors.lastName && touched.lastName && (
                                                        <p className="text-red-500 text-sm">{errors.lastName}</p>
                                                    )}
                                                </>
                                            )}
                                        </Field>
                                        <Field name="email">
                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Email"
                                                        disabled={!isEditing}
                                                        className={errors.email && touched.email ? 'border-red-500' : ''}
                                                    />
                                                    {errors.email && touched.email && (
                                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                                    )}
                                                </>
                                            )}
                                        </Field>
                                        <Field name="phone">
                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Số điện thoại"
                                                        disabled={!isEditing}
                                                        className={errors.phone && touched.phone ? 'border-red-500' : ''}
                                                    />
                                                    {errors.phone && touched.phone && (
                                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                                    )}
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                </CardBody>
                                {isEditing && (
                                    <CardFooter>
                                        <Button
                                            type="submit"
                                            color="success"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Đang lưu...' : 'Lưu'}
                                        </Button>
                                        <Button
                                            type="button"
                                            className="ml-4"
                                            onClick={() => setIsEditing(false)}
                                        >
                                            Huỷ
                                        </Button>
                                    </CardFooter>
                                )}
                                {!isEditing && (
                                    <CardFooter className="justify-center">
                                        <Button
                                            startContent={<BiEdit />}
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Chỉnh sửa
                                        </Button>
                                    </CardFooter>
                                )}
                            </Form>
                        )}
                    </Formik>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
