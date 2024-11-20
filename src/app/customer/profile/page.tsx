"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Input } from '@nextui-org/react';
import { BiEdit } from 'react-icons/bi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadFile from '@/utils/upload';
import { useAppDispatch } from '@/lib/redux/store';
import { patchUpdateProfile, fetchUserInforPagination } from '@/lib/redux/slice/userSlice';
import { updateProfileInput, UserInfor } from '@/models/userModels';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';

const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
    return message ? <div className="text-red-500 text-sm mt-1">{message}</div> : null;
};

const Profile: React.FC = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required')
            .min(2, 'First Name must be at least 2 characters')
            .max(20, 'First Name must not exceed 20 characters'),

        lastName: Yup.string()
            .required('Last Name is required')
            .min(2, 'Last Name must be at least 2 characters')
            .max(20, 'Last Name must not exceed 20 characters'),

        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Invalid phone number')
            .matches(/^(0[0-9]{9})$/, 'Phone number must start with 0 and be 10 digits')
            .required('Phone number is required')
    });

    const [previewImage, setPreviewImage] = useState("");
    const [userId, setUserId] = useState<string>('');
    const [items, setItems] = useState<UserInfor | null>(null);
    const [isEditing, setIsEditing] = useState(false);  // Trạng thái chỉnh sửa
    const [serverError, setServerError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, []);

    useEffect(() => {
        const fetchUserInformation = async () => {
            if (userId) {
                try {
                    const response = await dispatch(fetchUserInforPagination());
                    const userInfo = response.payload;
                    setItems(userInfo);
                } catch (error) {
                    console.error('Error fetching user information:', error);
                }
            }
        };
        fetchUserInformation();
    }, [dispatch, userId]);

    const handleEditClick = () => {
        setIsEditing(true);  // Bật chế độ chỉnh sửa
        setServerError(null);
    };

    const handleUpdate = async (values: updateProfileInput, { setSubmitting }: any) => {
        try {
            if (userId) {
                const updateData: updateProfileInput = {
                    id: userId,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    profileImageUrl: values.profileImageUrl
                };

                await dispatch(patchUpdateProfile({ profileData: updateData })).unwrap();
                toast.success("Profile updated successfully!", {
                    autoClose: 1500,
                });
                setIsEditing(false);
                setItems(prevItems => {
                    if (prevItems === null) return null;
                    return {
                        ...prevItems,
                        firstName: updateData.firstName ?? prevItems.firstName,
                        lastName: updateData.lastName ?? prevItems.lastName,
                        email: updateData.email ?? prevItems.email,
                        phone: updateData.phone ?? prevItems.phone,
                        profileImageUrl: updateData.profileImageUrl ?? prevItems.profileImageUrl
                    };
                });
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setServerError("An error occurred while updating. Please try again!");
        } finally {
            setSubmitting(false);
        }
    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const fileName = file.name;
            const fileUrl = await uploadFile(fileName, file);
            setItems(prevItems => {
                if (prevItems === null) return null;
                return {
                    ...prevItems,
                    profileImageUrl: fileUrl,
                };
            });
            setPreviewImage(fileUrl);
            localStorage.setItem('profileImageUrl', fileUrl);
        }
    };

    return (
        <div className='max-h-screen mt-10 mr-20'>
            <div className='container flex flex-col items-center'>
                <h2 className='text-2xl font-bold mb-4'>Account Settings</h2>
                <Card className='w-full max-w-md p-6'>
                    <div className="flex flex-col items-center mb-4">
                        <Avatar
                            src={previewImage || items?.profileImageUrl}
                            size="sm"
                            className="object-cover mb-2"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
                            Upload
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={handleUpload}
                        />
                        <p className="text-gray-500 text-sm">Accepted file type: .png. Less than 1MB</p>
                    </div>
                    <Formik<updateProfileInput>
                        initialValues={{
                            id: userId,
                            firstName: items?.firstName || '',
                            lastName: items?.lastName || '',
                            phone: items?.phone ? Number(items.phone) : undefined,
                            email: items?.email || '',
                            profileImageUrl: items?.profileImageUrl || ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleUpdate}
                        enableReinitialize
                    >
                        {({ isSubmitting, errors, touched, setFieldValue }) => (
                            <>
                                <Form className="space-y-4">
                                    <div>
                                        <Field name="firstName">
                                            {({ field, form }: { field: any; form: any }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="First Name"
                                                        id="firstName"
                                                        disabled={!isEditing}
                                                    />
                                                    <ErrorMessage message={form.touched.firstName && form.errors.firstName ? form.errors.firstName : undefined} />
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="lastName">
                                            {({ field, form }: { field: any; form: any }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Last Name"
                                                        id="lastName"
                                                        disabled={!isEditing}
                                                    />
                                                    <ErrorMessage message={form.touched.lastName && form.errors.lastName ? form.errors.lastName : undefined} />
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="email">
                                            {({ field, form }: { field: any; form: any }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Email Address"
                                                        id="email"
                                                        disabled={!isEditing}
                                                    />
                                                    <ErrorMessage message={form.touched.email && form.errors.email ? form.errors.email : undefined} />
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                    <div>
                                        <Field name="phone">
                                            {({ field, form }: { field: any; form: any }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        label="Phone Number"
                                                        id="phone"
                                                        disabled={!isEditing}
                                                    />
                                                    <ErrorMessage message={form.touched.phone && form.errors.phone ? form.errors.phone : undefined} />
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                    {serverError && <ErrorMessage message={serverError} />}
                                    {isEditing && (
                                        <div className="flex justify-between mt-4">
                                            <Button
                                                color="primary"
                                                type="submit"
                                                disabled={isSubmitting || Object.keys(errors).length > 0}
                                            >
                                                {isSubmitting ? 'Saving...' : 'Save Changes'}
                                            </Button>
                                            <Button
                                                color="secondary"
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    setFieldValue('firstName', items?.firstName || '');
                                                    setFieldValue('lastName', items?.lastName || '');
                                                    setFieldValue('email', items?.email || '');
                                                    setFieldValue('phone', items?.phone || '');
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    )}
                                </Form>
                            </>
                        )}
                    </Formik>

                    {!isEditing && (
                        <div className="mt-4">
                            <Button color="primary" onClick={handleEditClick} fullWidth>
                                <BiEdit /> Edit
                            </Button>
                        </div>
                    )}

                </Card>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Profile;
