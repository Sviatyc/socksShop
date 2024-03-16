import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_SOCKS } from "../../apollo/query"
import { ThreeDots } from 'react-loader-spinner';




function ProductCard() {
  const {data, loading, error} = useQuery(GET_SOCKS)
  const [dataInfo, setDataInfo] = useState([])


  useEffect(()=>{
      if(!loading){
        setDataInfo(data ? data.getAllSocks : '')
      }
  }, [data, loading, error])

  if(loading){
    return (
      <div className="flex justify-center w-screen items-center mt-5">
        <ThreeDots
        visible={true}
        height="130"
        width="130"
        color="#black"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
      </div>
    )
  }else if(error){
    return <div className="w-screen flex justify-center text-[80px] font-bold">ERROR</div>
  }

  const curr = (item)=>{
    
  }

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
                <p className="ml-2 font-bold">{item.currency.UAN ? '₴' : item.currency.USD ? '$' : '€'} {item.price}</p>
              </div>
            </div>
        )})
      }
    </>
  )
}

export default ProductCard