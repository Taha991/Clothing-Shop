import Image from "next/image"


const imageLoader = ({src}) => {
  return `/images/products/${src}`
}
export const ProductContainer = ({name , imageUrl }) => {
  return(
    <div className="w-full text-center rounded">
      <div className="border border-slate-300 rounded">
        <Image loader={imageLoader} src={imageUrl} alt="product image" width="150" height={300} objectFit="cover" /> 
      </div>
      <p>{name}</p>
    </div>
  )
}