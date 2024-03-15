import { Badge } from "antd"
import {ShoppingCartOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
function Navbar()
{
    const navigate = useNavigate()
    return(
        <div>
            <div className="bg-gray-800 p-4">
                <ul className="flex justify-between text-slate-50">
                    <li className="font-bold cursor-pointer">
                        <div>EMCKART</div>
                    </li> 

                    <li className="flex gap-1">
                        <button className="bg-blue-600 hover:bg-blue-700 p-1 px-2 rounded-md cursor-pointer font-medium" onClick={()=>navigate("/add-product")}>Add Product</button>
                        <h1 className="cursor-pointer font-medium mt-1">Welcome John</h1>
                        <Badge size="small" count={5}>
                            <ShoppingCartOutlined
                            style={{fontSize:'24px',color:"#08c",marginLeft:"5px"}}
                            className="cursor-pointer mt-1"
                            >
                            </ShoppingCartOutlined>
                        </Badge>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar