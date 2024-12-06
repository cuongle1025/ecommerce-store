import SaleBannerCover from '../../assets/images/SaleBannerCover.png'
import UnderlineButton from '../Buttons/UnderlineButton'

export default function SaleBanner() {
  return (
    <div className="flex flex-row min-h-[532px]">
      <img src={SaleBannerCover} alt="Sale Banner" className="object-contain" />
      <div className="bg-[#F3F5F7] flex flex-col pl-[72px] pr-[196px] py-[140px] gap-4 justify-start items-start w-full">
        <p className="text-secondary-blue text-base font-bold leading-none">
          SALE UP TO 35% OFF
        </p>
        <h4 className="text-[40px] text-medium leading-[44px]">
          HUNDREDS of <br /> New lower prices!
        </h4>
        <p className="text-xl font-light">
          It&apos;s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <UnderlineButton text={'Shop Now'} icon />
      </div>
    </div>
  )
}
