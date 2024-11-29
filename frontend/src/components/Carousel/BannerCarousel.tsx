import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg'
import iconArrowRight from '../../assets/icons/iconArrowRight.svg'

export default function BannerCarousel() {
  const carouselSlides = [
    {
      src: banner1,
      alt: 'Banner 1',
    },
    {
      src: banner2,
      alt: 'Banner 2',
    },
    {
      src: banner3,
      alt: 'Banner 3',
    },
  ]

  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:w-[30px] transition-all duration-300 ease-in-out size-3 bg-neutral-100 rounded-full cursor-pointer",
        "isAutoPlay": false,
        "isInfiniteLoop": true
    }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-[536px]">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-1000 opacity-0">
          {carouselSlides.map((slide, i) => (
            <div className="hs-carousel-slide" key={i}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-fill w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[52px] h-[52px] my-[242px] ml-[32px] bg-white hover:bg-neutral-200 focus:outline-none focus:bg-neutral-300 rounded-full"
      >
        <span className="text-2xl" aria-hidden="true">
          <img src={iconArrowLeft} alt="Arrow Left" />
        </span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[52px] h-[52px] my-[242px] mr-[32px] bg-white hover:bg-neutral-200 focus:outline-none focus:bg-neutral-300 rounded-full"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <img src={iconArrowRight} alt="Arrow Right" />
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
  )
}
