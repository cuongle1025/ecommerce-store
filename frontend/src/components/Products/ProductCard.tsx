// import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addToCart } from '../../features/Cart/cartSlice'
import PrimaryButton from '../Buttons/PrimaryButton'
import Badge from '../Badge/Badge'
import Rating from '../Rating/Rating'
import iconHeart from '../../assets/icons/iconHeart.svg'
import BowlM from '../../assets/images/BowlM.png'

interface Props {
  id: number
  name: string
  price: number
}

export default function ProductCard({ id, name, price }: Props) {
  // const dispatch = useDispatch()

  // const handleAddToCart = () => {
  //   dispatch(addToCart({ id, name, price, quantity: 1 }))
  // }

  return (
    <div className="w-[262px] h-[433px]">
      <Link to={`/product/${id}`} className="group">
        <div className="bg-[#F3F5F7] h-[349px] mb-[12px] p-4">
          <div
            style={{ backgroundImage: `url(${BowlM})` }}
            className="bg-contain bg-no-repeat bg-center h-full w-full flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-20">
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
              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-8 h-8 p-1.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex hover:bg-neutral-200 focus:outline-none focus:bg-neutral-200"
                >
                  <img src={iconHeart} alt="icon" />
                </button>
              </div>
            </div>
            <div className="hidden flex-col group-hover:flex">
              <Link to={`/addToCart`}>
                <PrimaryButton text={'Add to cart'} wFull={true} />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[72px]">
          <Rating readOnly={true} />
          <h2 className="text-base text-neutral-700 font-semibold group-hover:underline">
            {name}
          </h2>
          <p className="text-neutral-700">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}
