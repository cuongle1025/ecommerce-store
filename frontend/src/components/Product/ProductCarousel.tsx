import ProductCard from './ProductCard'

export default function ProductCarousel() {
  const productInfos = [
    {
      id: 1,
      name: 'Table',
      price: 180,
    },
    {
      id: 2,
      name: 'Char',
      price: 200,
    },
    {
      id: 3,
      name: 'Sock',
      price: 312.12,
    },
    {
      id: 4,
      name: 'Glass',
      price: 250,
    },
    {
      id: 5,
      name: 'Plant',
      price: 101,
    },
    {
      id: 6,
      name: 'Bed',
      price: 550,
    },
  ]

  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:w-[30px] transition-all duration-300 ease-in-out size-3 bg-neutral-500 rounded-full cursor-pointer",
        "isAutoPlay": false,
        "slidesQty": {
            "xs": 2,
            "md": 2,
            "lg": 3,
            "xl": 4
        }
    }'
      className="relative mt-12"
    >
      <div
        id="product-carousel"
        className="hs-carousel relative overflow-x-scroll overscroll-contain overflow-hidden w-full min-h-[481px]"
      >
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-1000 opacity-0">
          {productInfos.map((product, i) => (
            <div className="hs-carousel-slide" key={i}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
