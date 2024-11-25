'use client'

export default function Home() {
    return (
        <div className="h-screen">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
                <div className="gap-6 flex flex-col w-full">
                    <div className="flex flex-col gap-2">
                        <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5 justify-center w-full">
                            {/* <QuantityShop />
                            <QuantityAllService />
                            <QuantityCustomer />
                            <QuantityAllBooking />
                            <QuantityAllPet /> */}
                        </div>
                    </div>

                    <div className="h-full flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Thống kê</h3>
                        <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6">
                            {/* <ChartAdmin /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
