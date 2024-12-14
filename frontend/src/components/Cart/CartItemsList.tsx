import bowlM from '../../assets/images/BowlM.png'
import InputNumber from '../Input/InputNumber'
import UnderlineButton from '../Buttons/UnderlineButton'

export default function CartItemsList() {
  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <>
          <div className="flex gap-4 mx-3" key={index}>
            <div className="bg-[#F3F5F7] shrink-0">
              <img src={bowlM} className="w-20 h-24 object-contain" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold">BLANDA BLANK</p>
              <p className="text-sm text-neutral-400">
                Serving bowl, stainless steel, 11 &quot;
              </p>
              <div className="flex gap-4 items-center">
                <InputNumber small />
                <UnderlineButton text="Remove" small />
              </div>
            </div>
            <div className="flex flex-col ml-auto">
              <span className="text-sm font-semibold">$19.19</span>
            </div>
          </div>
          {index !== 9 && <hr className="mb-10 mt-6 border-neutral-300 mx-6" />}
        </>
      ))}
    </div>
  )
}
