import { useLocation } from 'react-router-dom'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

export default function CheckoutStepper() {
  const location = useLocation()

  return (
    <>
      {/* <!-- Stepper --> */}
      <ul className="relative flex flex-col md:flex-row gap-2">
        {/* <!-- Item --> */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span
              className={`size-10 flex justify-center items-center shrink-0 bg-black text-white text-base font-semibold rounded-full`}
            >
              {location.pathname == '/checkoutdetails' ||
              location.pathname == '/ordercomplete' ? (
                <CheckRoundedIcon htmlColor="white" />
              ) : (
                1
              )}
            </span>
            <span className="ms-2 block grow md:grow-0 text-base font-semibold">
              Shopping cart
            </span>
          </div>
          <div
            className={`mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-[180px] md:h-px md:flex-1 ${location.pathname == '/cart' ? 'bg-gray-200' : 'bg-black'} group-last:hidden`}
          ></div>
        </li>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span
              className={`size-10 flex justify-center items-center shrink-0 ${location.pathname == '/cart' ? 'bg-gray-100' : 'bg-black text-white'} text-base font-semibold rounded-full`}
            >
              {location.pathname == '/ordercomplete' ? (
                <CheckRoundedIcon htmlColor="white" />
              ) : (
                2
              )}
            </span>
            <span className="ms-2 block grow md:grow-0 text-base font-semibold">
              Checkout details
            </span>
          </div>
          <div
            className={`mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-[180px] md:h-px md:flex-1 ${location.pathname == '/ordercomplete' ? 'bg-black' : 'bg-gray-200'} group-last:hidden`}
          ></div>
        </li>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
            <span
              className={`size-10 flex justify-center items-center shrink-0  text-base ${location.pathname == '/ordercomplete' ? 'bg-black' : 'bg-gray-100'} font-semibold rounded-full`}
            >
              {location.pathname == '/ordercomplete' ? (
                <CheckRoundedIcon htmlColor="white" />
              ) : (
                3
              )}
            </span>
            <span className="ms-2 block grow md:grow-0 text-base font-semibold">
              Order complete
            </span>
          </div>
          <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        {/* <!-- End Item --> */}
      </ul>
      {/* <!-- End Stepper --> */}
    </>
  )
}
