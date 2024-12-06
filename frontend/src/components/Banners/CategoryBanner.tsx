import BedroomBanner from '../../assets/images/BedroomBanner.png'
import KitchenBanner from '../../assets/images/KitchenBanner.png'
import LivingRoomBanner from '../../assets/images/LivingRoomBanner.png'
import UnderlineButton from '../Buttons/UnderlineButton'

export default function CategoryBanner() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-6">
        <div
          style={{ backgroundImage: `url(${LivingRoomBanner})` }}
          className="bg-contain bg-[#F3F5F7] bg-no-repeat bg-center h-[664px] p-12 flex items-start"
        >
          <div className="flex flex-col items-start">
            <h3 className="text-[34px] font-medium text-neutral-700">
              Living Room
            </h3>
            <UnderlineButton text={'Shop Now'} icon />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div
            style={{ backgroundImage: `url(${BedroomBanner})` }}
            className="bg-contain bg-[#F3F5F7] bg-no-repeat bg-center h-[320px] p-12 flex items-end"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-[34px] font-medium text-neutral-700">
                Bedroom
              </h3>
              <UnderlineButton text={'Shop Now'} icon />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${KitchenBanner})` }}
            className="bg-contain bg-[#F3F5F7] bg-no-repeat bg-center h-[320px] p-12 flex items-end"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-[34px] font-medium text-neutral-700">
                Kitchen
              </h3>
              <UnderlineButton text={'Shop Now'} icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
