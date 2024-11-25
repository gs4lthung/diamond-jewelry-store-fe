export interface createServiceInput {
    userId: string,
    id: string,
    serviceCategoryId: number,
    serviceName: string,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    tags: string
    servicePhoto: string
}
export interface allOrderBookingPaginationData {
    id: string,
    status: string,
    customerFullName: string,
    localDate: string,
    timeSlotDto: {
        startLocalDateTime: string,
        endLocalDateTime: string,
    },
    serviceId: string,
    serviceName: string,
    shopId: string,
    shopName: string,
    petId: string,
    petName: string,
    petPhoto: string
}
export interface allOrderBookingPaginationResponse {
    success: boolean;
    status: number;
    data: {
        data: allOrderBookingPaginationData[];
        totalCount: number;
        pageCount: number;
    };
}

export interface serviceCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface getShopId {
    id: string,
}
export interface ServiceInfor {
    slug: string | undefined | null,
    userId: string | undefined | null,
    id: string,
    serviceName: string | undefined | null,
    serviceDescription: string | undefined | null,
    price: number | undefined | null,
    minWeight: number | undefined | null,
    maxWeight: number | undefined | null,
    nomination: number | undefined | null,
    tags: string | undefined | null
    servicePhoto: string
}
export interface shopInfor {
    id: string,
    shopName: string,
    shopAddress: string,
    role: string,
    firstName: string,
    lastName: string,
    shopEmail: string,
    area: string,
    shopDescription: string,
    openTime: string,
    closeTime: string,
    isAvailable: boolean,
    totalServices: number,
    nomination: number,
    shopTitle: string,
    shopPhone: string,
    shopProfileImangeUrl: string,
    coverImageUrl: string | undefined | null,
    birthday: string | undefined | null,


}
export interface ShopAccountInfor {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    phone: string
    profileImageUrl: string

}
export interface updateProfileShopInput {
    id: string,
    firstName: string | undefined | null,
    lastName: string | undefined | null,
    email: string | undefined | null,
    phone: string | undefined | null,
    profileImageUrl: string
}
export interface ShopPage {
    id: string;
    totalServices: number;
    totalNominations: number;
    totalBookings: number;
    monthlyBookings: MonthlyBookingDto[];
}

export interface MonthlyBookingDto {
    month: string;
    bookings: number;
}
export interface updateProfileInputResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}
export interface ShopInput {
    id: string,
    shopName: string,
    shopAddress: string,
    shopPhone: string,
    area: string,
    shopDescription: string,
    openTime: string,
    closeTime: string,
    isAvailable: boolean,
    shopEmail: string,
    shopTitle: string,
    shopProfileImangeUrl: string
}
export interface AllShopTimeSlotIn4 {
    shopId: string,
    id: string,
    startLocalTime: string,
    endLocalTime: string,
    description: string,
    totalSlot: number,
    availableSlot: number,
    usedSlot: number,
    status: boolean,

}
export interface CreateShopTimeSlotInput {
    shopId: string,
    timeSlotId: string,
    description: string,
    totalSlot: string,


}
export interface getAllTimeSlot {
    id: string,
    startLocalDateTime: string,
    endLocalDateTime: string,
}
export interface getAllTimeSlotResponse {
    success: boolean;
    status: number;
    data: {
        data: getAllTimeSlot[];
        totalCount: number;
        pageCount: number;
    };
}

export interface AllShopTimeSlotIn4Response {
    success: boolean;
    status: number;
    data: {
        data: AllShopTimeSlotIn4[];
        totalCount: number;
        pageCount: number;
    };
}
export interface AllFeedbackOfService {
    id: number,
    userId: string,
    userName: string,
    content: string,
    ratingType: string,
    localDateTime: string,
    edited: boolean,
    userPhoto: string
}
export interface AllFeedbackOfServiceResponse {
    success: boolean;
    status: number;
    data: {
        data: AllFeedbackOfService[];
        totalCount: number;
        pageCount: number;
    };
}
export interface shopCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface updatePasswordInputResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}
export interface updatePasswordShopInput {
    id: string,
    oldPassword: string | undefined | null,
    newPassword: string | undefined | null,
    confirmPassword: string | undefined | null,

}
export interface passwordShopInfor {
    id: string,
    firstName: string,
    lastName: string,
    oldPassword: string | undefined | null,
    newPassword: string | undefined | null,
    confirmPassword: string | undefined | null,


}
export interface allServicePaginationData {
    id: string,
    serviceName: string,
    categoryId: number,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    nomination: number,
    tags: string,
    servicePhoto: string

}

export interface allDiamondPaginationData {
    diamond_id: string,
    diamond_code: string,
    diamond_name: string,
    origin : string,
    proportions: number,
    polish: number,
    symmetry: number,
    flowescense: number,
    colors: string,
    Cut: string
    Carat_weight :string ,
    Status: boolean,
    Product_Id : string 
}
export interface DiamondInfor {
    slug : string | null | undefined,
    diamond_id: string,
    diamond_code: string,
    diamond_name: string,
    origin : string,
    proportions: number,
    polish: number,
    symmetry: number,
    flowescense: number,
    colors: string,
    Cut: string
    Carat_weight :string ,
    Status: boolean,
    Product_Id : string 
 }
 export interface Product {
    Product_id: string; // Primary Key
    Product_Code: string; // Code for the product
    Product_name: string; // Name of the product
    Description: string; // Description of the product
    Cate_Id: string; // Foreign Key to Category table
    Collection_id: string; // Foreign Key to Collection table
    Gen_id: string; // Foreign Key to Generation/Type table
    Dia_id: string; // Foreign Key to Diamond table
  }
  export interface DiamondPriceDetail {
    Dia_PList_id: string; // Primary Key
    Origin: string; // Origin of the diamond
    Ct_Weight_From: number; // Carat weight range start
    Ct_Weight_To: number; // Carat weight range end
    Color: string; // Diamond color
    Clarity: string; // Diamond clarity
    Cut: string; // Diamond cut
    Price: number; // Price for the diamond
    Eff_date: string; // Effective date of the price
  }
  
  
export interface BookingComplete {
    bookingId: number,
}