import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../app/store'
// import { addToCart } from '../features/Cart/cartSlice'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductPreview from '../components/Products/ProductPreview'
import CountDown from '../components/Timer/CountDown'
import InputNumber from '../components/Input/InputNumber'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import IconButton from '../components/Buttons/IconButton'
import iconHeart from '../assets/icons/iconHeart.svg'
import Rating from '../components/Rating/Rating'
import ProductDetailsDrawer from '../components/Drawer/ProductDetailsDrawer'
import iconArrowRight from '../assets/icons/iconArrowRight.svg'
import ReviewSort from '../components/Reviews/ReviewSort'
import RatingSnapshot from '../components/Reviews/RatingSnapshot'
import ReviewFilter from '../components/Reviews/ReviewFilter'
import NewsletterBanner from '../components/Banners/NewsletterBanner'
import ReviewContent from '../components/Reviews/ReviewContent'

const ProductPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>()
  // const dispatch = useDispatch()
  // const product = useSelector((state: RootState) =>
  //   state.products.items.find((item) => item.id === Number(id)),
  // )

  // if (!product) return <div>Product not found</div>

  // const handleAddToCart = () => {
  //   dispatch(
  //     addToCart({
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       quantity: 1,
  //     }),
  //   )
  // }

  return (
    <>
      <section>
        <hr className="-mx-10 md:-mx-20 lg:-mx-40 xl:-mx-80 border-neutral-200" />
        <div className="py-4">
          <Breadcrumb itemsList={['Home', 'Shop', 'Living Room', 'Product']} />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <ProductPreview />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl">Serving Bowl</h2>
              <p className="text-neutral-400 font-light">
                Why complicate things? A large bowl with many uses – and just as
                natural and simple in its design as in its function. Easy to
                clean thanks to its stainless-steel material that lasts a
                lifetime or two.
              </p>
              <div className="flex gap-3 items-center">
                <span className="text-3xl font-medium">$199.00</span>
                <span className="text-neutral-400 text-xl font-medium line-through">
                  $400.00
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Rating readOnly />
                <span className="text-sm">(11)</span>
              </div>
            </div>
            <hr className="my-2 border-neutral-300" />
            <div className="flex flex-col gap-3">
              <p className="text-neutral-500 font-light">Offer expires in:</p>
              <CountDown />
            </div>
            <hr className="my-2 border-neutral-300" />
            <div className="flex flex-col gap-6">
              <p className="text-neutral-400 font-semibold">Measurements</p>
              <p>
                Height: 5 &quot; <br /> Diameter: 11 &quot; <br /> Volume: 183
                oz
              </p>
              <p className="text-neutral-400 font-semibold">Choose Color</p>
              <div className="flex gap-6">
                <InputNumber />
                <PrimaryButton text={'Add to bag'} wFull />
                <IconButton icon={iconHeart} />
              </div>
            </div>
            <hr className="my-2 border-neutral-300" />
            <div>
              <button
                type="button"
                className="py-3 inline-flex items-center justify-between w-full text-neutral-400 font-semibold hover:underline focus:outline-none"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-offcanvas-right"
                data-hs-overlay="#hs-offcanvas-right"
              >
                Product details
                <img src={iconArrowRight} alt={'Arrow Right Icon'} />
              </button>
              <ProductDetailsDrawer />
            </div>
            <hr className="my-2 border-neutral-300" />
            <div className="flex flex-col gap-3">
              <div className="justify-start items-center gap-24 inline-flex">
                <div className="text-neutral-400 text-xs">SKU</div>
                <div className="bg-black text-white px-2 py-0.5 text-xs font-semibold">
                  1117
                </div>
              </div>
              <div className="justify-start items-center gap-14 inline-flex">
                <div className="text-neutral-400 text-xs">CATEGORY</div>
                <div className="text-xs font-light">Living Room, Bedroom</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-10 flex flex-col">
        <div className="flex justify-between items-center border-b pb-2 mb-12">
          <h2 className="text-xl tracking-wide">Customer reviews</h2>
          <ReviewSort />
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-1 sticky top-24 h-fit max-h-[calc(100vh-6rem)]">
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-medium tracking-wide">4.7</span>
              <div className="flex flex-col">
                <Rating readOnly />
                <span className="text-neutral-400 text-sm">12 reviews</span>
              </div>
            </div>
            <hr className="my-8 border-neutral-300" />
            <div>
              <RatingSnapshot />
            </div>
            <hr className="my-8 border-neutral-300" />
            <div>
              <ReviewFilter />
            </div>
          </div>
          <div className="col-span-2">
            <ReviewContent />
          </div>
        </div>
      </section>
      <section className="-mx-10 md:-mx-20 lg:-mx-40 xl:-mx-80">
        <NewsletterBanner />
      </section>
    </>
  )
}

export default ProductPage
