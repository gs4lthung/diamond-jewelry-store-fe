'use server';

import { cookies } from 'next/headers';

const getAccessAndRefreshCookie = async () => {
    const cookieStore = await cookies(); // Await the cookies() call

    const uid = cookieStore.get("userId")?.value;
    return { uid };
};

export default getAccessAndRefreshCookie;
