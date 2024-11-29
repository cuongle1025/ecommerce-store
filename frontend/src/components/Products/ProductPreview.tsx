import iconArrowLeft from '../../assets/icons/iconArrowLeft.svg'
import iconArrowRight from '../../assets/icons/iconArrowRight.svg'
import Badge from '../Badge/Badge'
import BowlM from '../../assets/images/BowlM.png'
import servingBowl1 from '../../assets/images/servingBowl1.webp'
import servingBowl2 from '../../assets/images/servingBowl2.avif'

export default function ProductPreview() {
  return (
    <>
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
        className="sticky top-24"
      >
        <div className="group hs-carousel relative overflow-hidden w-full min-h-[760px]">
          <div className="hs-carousel-body absolute top-0 bottom-48 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${BowlM})` }}
                className="bg-contain bg-no-repeat bg-center flex justify-start h-full w-full bg-[#F3F5F7] p-6"
              >
                <div className="flex flex-col gap-2">
                  <Badge
                    text={'new'}
                    textColor={'text-neutral-700'}
                    bgColor={'bg-white'}
                  />
                  <Badge
                    text={'-50%'}
                    textColor={'text-white'}
                    bgColor={'bg-secondary-green'}
                  />
                </div>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${servingBowl1})` }}
                className="bg-cover bg-no-repeat bg-center flex justify-start h-full w-full bg-[#F3F5F7] p-6"
              />
            </div>
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${servingBowl2})` }}
                className="bg-cover bg-no-repeat bg-center flex justify-start h-full w-full bg-[#F3F5F7] p-6"
              />
            </div>
          </div>

          <div className="hs-carousel-pagination absolute bottom-0 start-0 w-full">
            <div className="flex flex-row items-center justify-between">
              <div className="hs-carousel-pagination-item shrink-0 border overflow-hidden cursor-pointer w-[167px] h-[167px] hs-carousel-active:border-black">
                <div
                  style={{ backgroundImage: `url(${BowlM})` }}
                  className="bg-contain bg-no-repeat bg-center h-full w-full bg-[#F3F5F7] p-2"
                />
              </div>
              <div className="hs-carousel-pagination-item shrink-0 border overflow-hidden cursor-pointer w-[167px] h-[167px] hs-carousel-active:border-black">
                <div
                  style={{ backgroundImage: `url(${servingBowl1})` }}
                  className="bg-contain bg-no-repeat bg-center h-full w-full bg-[#F3F5F7] p-2"
                />
              </div>
              <div className="hs-carousel-pagination-item shrink-0 border overflow-hidden cursor-pointer w-[167px] h-[167px] hs-carousel-active:border-black">
                <div
                  style={{ backgroundImage: `url(${servingBowl2})` }}
                  className="bg-contain bg-no-repeat bg-center h-full w-full bg-[#F3F5F7] p-2"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute ml-8 my-auto inset-y-0 start-0 bottom-48 hidden group-hover:inline-flex justify-center items-center w-[40px] h-[40px] bg-white hover:inline-flex hover:bg-neutral-200 focus:outline-none rounded-full"
          >
            <span className="text-2xl" aria-hidden="true">
              <img src={iconArrowLeft} alt="Arrow Left" />
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute mr-8 my-auto inset-y-0 end-0 bottom-48 hidden group-hover:inline-flex justify-center items-center w-[40px] h-[40px] bg-white hover:inline-flex hover:bg-neutral-200 focus:outline-none rounded-full"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <img src={iconArrowRight} alt="Arrow Right" />
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
