
import { useState } from "react"
import axios from "axios"
import { ref, uploadBytes } from "firebase/storage"
import { firebasStorage } from "../../config/firebase.config"
import { useNavigate } from 'react-router-dom'

const genarateRandomText = () => {
    return (Math.random() + 1).toString(36).substring(7)
}
function Addproduct() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')

    const [prevImage, setPrevImage] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file)

        console.log(file);
        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setPrevImage(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = () => {
        console.log(title)
        console.log(desc)
        console.log(price)
        console.log(image);

        const uploadImage = ref(
            firebasStorage, `images/${genarateRandomText()}-${image.name}`
        )
        uploadBytes(uploadImage, image).then((response) => {
            const imagePath = response.metadata.fullPath
            axios.post("http://localhost:8000/save-product", {
                title, desc, price,imagePath
            }).then((res) => { navigate('/show-products') }).catch((err) => { console.log(err) })


        })


    }

    return (
        <div className="modal-container bg-white w-96 mx-auto mt-24 p-4 rounded shadow mb-6">
            <h3 className="text-lg text-gray-800 font-bold text-center mb-3">Product Upload</h3>
            <form>
                <label htmlFor="title" className="mt-2 block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" name="title" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => { setTitle(e.target.value) }}></input>

                <label htmlFor="description" className="mt-2 block text-sm font-medium text-gray-700" >Description</label>
                <textarea type="text" id="description" name="description" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => { setDesc(e.target.value) }}></textarea>

                <label htmlFor="price" className="mt-2 block text-sm font-medium text-gray-700" >Price</label>
                <input type="number" id="price" name="price" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => { setPrice(e.target.value) }}></input>

                <label htmlFor="image" className="mt-2 block text-sm font-medium text-gray-700">Image</label>
                <input type="file" id="image" name="image" className="mt-1 p-2 w-full border rounded-md" onChange={handleImageChange} ></input>
                {
                    prevImage && <div>
                        <label htmlFor="prevImage">Preview</label>
                        <img src={prevImage} className="h-full w-full" alt="" />
                    </div>
                }
                <div>
                    <button type="button" className="mt-4 bg-blue-500 text-white p-2 roundeed-md text-center w-full" onClick={handleSubmit}>Upload</button>
                </div>
            </form>



        </div>)
}

export default Addproduct