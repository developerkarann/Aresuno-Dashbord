import React from 'react'

const ProductCard = () => {
    return (
        <>
            <div className="mx-0 ">

                <div className="top-header flex justify-between border-b">
                    <h4 className=" text-2xl font-semibold text-gray-700 mb-2 px-8 pb-4 ">
                        <i class="fa-solid fa-bookmark text-[#6D96F1] mr-3"></i>
                        Products</h4>

                </div>

                {/* Products Feed */}
                <div className=" p-4">
                    <div class="">
                        <div className="products grid grid-cols-2 w-full gap-8">
                            <div className="product-card max-h-96 max-w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer transform duration-500 hover:-translate-y-1">
                                <div class="relative">
                                    <img class="w-full h-44" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                                    <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                                    </div>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-medium mb-2">Product Title</h3>
                                    <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ant.</p>
                                    <div class="flex items-center justify-between">
                                        <span class="font-bold text-lg">$19.99</span>
                                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card max-h-96 max-w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer transform duration-500 hover:-translate-y-1">
                                <div class="relative">
                                    <img class="w-full h-44" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                                    <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                                    </div>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-medium mb-2">Product Title</h3>
                                    <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ant.</p>
                                    <div class="flex items-center justify-between">
                                        <span class="font-bold text-lg">$19.99</span>
                                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card max-h-96 max-w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer transform duration-500 hover:-translate-y-1">
                                <div class="relative">
                                    <img class="w-full h-44" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                                    <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                                    </div>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-medium mb-2">Product Title</h3>
                                    <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ant.</p>
                                    <div class="flex items-center justify-between">
                                        <span class="font-bold text-lg">$19.99</span>
                                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard