import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_SOCKS } from "../../apollo/query"


function ProductCard() {
  const {data, loading, error} = useQuery(GET_SOCKS)
  const [dataInfo, setDataInfo] = useState([])


  useEffect(()=>{
      if(!loading){
        setDataInfo(data.getAllSocks)
      }
  }, [data, loading, error])

  

  return (
    <>
      {
        dataInfo.map((item)=>{
          return(
            <div key={item.id} className="w-[200px] h-[320px] bg-orange-200 rounded-[10px]">
              <div>
                <img src="./image/socks.jfif" alt="product-image" className="w-[200px] h-[220px] rounded-t-[10px]"/>
              </div>
              <div className="ml-3 mt-2">
                <h2 className="text-[20px] font-bold">{item.name}</h2>
                <p>Price:</p>
                <p className="ml-2 font-bold">{item.currency.UAN ? '₴' : '$'} {item.price}</p>
              </div>
            </div>
        )})
      }
    </>
  )
}

export default ProductCard