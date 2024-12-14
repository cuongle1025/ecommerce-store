import AddRoundedIcon from '@mui/icons-material/AddRounded'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function CheckoutCoupon() {
  return (
    <>
      <button
        type="button"
        className="hs-collapse-toggle py-4 w-full inline-flex items-center justify-between gap-x-2 focus:outline-none"
        id="hs-basic-collapse"
        aria-expanded="false"
        aria-controls="hs-basic-collapse-heading"
        data-hs-collapse="#hs-basic-collapse-heading"
      >
        <span className="flex gap-2 items-center font-medium">
          <span className="flex hs-collapse-open:rotate-45 transition duration-300">
            <AddRoundedIcon fontSize="small" />
          </span>
          Apply discount code
        </span>
        <svg
          className="hs-collapse-open:rotate-180 shrink-0 size-5 transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <div
        id="hs-basic-collapse-heading"
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-collapse"
      >
        <div className="mb-4 mt-1 ml-1">
          <form className="w-full inline-flex space-x-3 items-center">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-md focus:border-black focus:ring-black"
            />
            <PrimaryButton text="Apply" />
          </form>
        </div>
      </div>
    </>
  )
}
