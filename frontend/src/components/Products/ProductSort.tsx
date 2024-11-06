export default function ProductSort() {
  return (
    <>
      <div
        className="m-1 hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex"
        data-hs-dropdown-auto-close="inside"
      >
        <button
          id="hs-dropdown-item-checkbox"
          type="button"
          className="hs-dropdown-toggle inline-flex items-center gap-x-2 font-medium hover:underline focus:outline-none"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Sort by
          <svg
            className="hs-dropdown-open:rotate-180 size-4"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md border border-neutral-200 rounded-lg p-1 space-y-0.5 mt-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-item-checkbox"
        >
          <div className="gap-x-2 py-2 px-3 rounded-lg hover:bg-gray-100">
            <label
              htmlFor="hs-dropdown-item-radio-best-match"
              className="flex justify-between cursor-pointer"
            >
              <span className="block text-sm">Best match</span>
              <input
                id="hs-dropdown-item-radio-best-match"
                name="hs-dropdown-item-radio"
                type="radio"
                className="mt-0.5 shrink-0 border-gray-200 rounded-full text-neutral-700 focus:ring-blue-500 cursor-pointer"
              />
            </label>
          </div>
          <div className="gap-x-2 py-2 px-3 rounded-lg hover:bg-gray-100">
            <label
              htmlFor="hs-dropdown-item-radio-low-to-high"
              className="flex justify-between cursor-pointer"
            >
              <span className="block text-sm">Price: low to high</span>
              <input
                id="hs-dropdown-item-radio-low-to-high"
                name="hs-dropdown-item-radio"
                type="radio"
                className="mt-0.5 shrink-0 border-gray-200 rounded-full text-neutral-700 focus:ring-blue-500 cursor-pointer"
              />
            </label>
          </div>
          <div className="gap-x-2 py-2 px-3 rounded-lg hover:bg-gray-100">
            <label
              htmlFor="hs-dropdown-item-radio-high-to-low"
              className="flex justify-between cursor-pointer"
            >
              <span className="block text-sm">Price: high to low</span>
              <input
                id="hs-dropdown-item-radio-high-to-low"
                name="hs-dropdown-item-radio"
                type="radio"
                className="shrink-0 border-gray-200 rounded-full text-neutral-700 focus:ring-blue-500 cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
