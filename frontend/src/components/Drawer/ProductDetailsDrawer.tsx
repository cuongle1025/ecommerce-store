// interface Props {
//   id: string
// }

export default function ProductDetailsDrawer() {
  return (
    <div
      id="hs-offcanvas-right"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full rounded-l-lg max-w-md w-full z-[101] bg-white border-s"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-offcanvas-right-label"
    >
      <div className="flex justify-end items-center py-3 px-4">
        <button
          type="button"
          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          aria-label="Close"
          data-hs-overlay="#hs-offcanvas-right"
        >
          <span className="sr-only">Close</span>
          <svg
            className="shrink-0 size-4"
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-wide">Product details</h2>
        <p className="text-sm text-neutral-400 font-light">
          Stack the smaller sizes inside the larger of the same range, to save
          space when not in use.
          <br />
          <br /> The serving bowls in the BLANDA series are available in several
          different materials and sizes to mix and match according to your
          tastes and needs.
          <br />
          <br />
          Made of stainless steel which is both durable and easy to clean.
        </p>
        <span className="text-sm inline-flex items-center gap-3">
          SKU{' '}
          <span className="bg-black text-white px-2 py-0.5 font-semibold">
            1117
          </span>
        </span>
      </div>
    </div>
  )
}
