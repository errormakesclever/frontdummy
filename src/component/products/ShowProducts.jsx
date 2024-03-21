import axios from 'axios'
import { getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { firebasStorage } from '../../config/firebase.config'

function ShowProducts() {
    const [allProducts, setAllproducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/show-products").then(async (response) => {
            console.log(response);
            const product = []
            for (const data of response.data) {
                const imgUrl = await getDownloadURL(ref(firebasStorage, data.image_path))
                console.log(imgUrl)
                product.push({
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    imgUrl: imgUrl
                })
            }
            setAllproducts(product)
        }).catch((err) => {
            console.log("error : ", err);
        })
    }, [])

    return (
        <div className='flex justify-center flex-wrap gap-y-6 gap-x-6 mt-2'>
            {
                allProducts.map((product) => {
                    return (
                        <div className='relative max-w-xs rounded overflow-hidden shadow-lg'>
                            <img src={product.imgUrl} alt="" className='w-80 h-60' />
                            <div className='px-6 py-4'>
                                <h1 className='font-bold text-xl mb-2'>{product.title}</h1>
                                <p className='text-gray-700 text-base'>{product.description}</p>
                            </div>

                            <div className='flex items-center justify-between px-6 pt-4 pb-2'>
                                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                                    ${product.price}
                                </span>
                                <button
                                    className='text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700'
                                >Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ShowProducts