import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'

export default function ReviewFilter() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Filter by star rating</p>
        <div className="flex justify-between">
          <label
            htmlFor="hs-checkbox-group-5"
            className="flex flex-col py-2 px-5 items-center border-2 border-gray-200 has-[:checked]:border-blue-800 rounded-lg text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer shrink-0 w-6 h-6 hidden border-gray-200 rounded text-transparent focus:ring-blue-500 cursor-pointer"
              id="hs-checkbox-group-5"
            />
            <span className="peer-checked:text-blue-800">5</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 peer-checked:fill-blue-800 peer-checked:stroke-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </label>

          <label
            htmlFor="hs-checkbox-group-4"
            className="flex flex-col py-2 px-5 items-center border-2 border-gray-200 has-[:checked]:border-blue-800 rounded-lg text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer shrink-0 w-6 h-6 hidden border-gray-200 rounded text-transparent focus:ring-blue-500 cursor-pointer"
              id="hs-checkbox-group-4"
            />
            <span className="peer-checked:text-blue-800">4</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 peer-checked:fill-blue-800 peer-checked:stroke-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </label>

          <label
            htmlFor="hs-checkbox-group-3"
            className="flex flex-col py-2 px-5 items-center border-2 border-gray-200 has-[:checked]:border-blue-800 rounded-lg text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer shrink-0 w-6 h-6 hidden border-gray-200 rounded text-transparent focus:ring-blue-500 cursor-pointer"
              id="hs-checkbox-group-3"
            />
            <span className="peer-checked:text-blue-800">3</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 peer-checked:fill-blue-800 peer-checked:stroke-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </label>

          <label
            htmlFor="hs-checkbox-group-2"
            className="flex flex-col py-2 px-5 items-center border-2 border-gray-200 has-[:checked]:border-blue-800 rounded-lg text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer shrink-0 w-6 h-6 hidden border-gray-200 rounded text-transparent focus:ring-blue-500 cursor-pointer"
              id="hs-checkbox-group-2"
            />
            <span className="peer-checked:text-blue-800">2</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 peer-checked:fill-blue-800 peer-checked:stroke-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </label>

          <label
            htmlFor="hs-checkbox-group-1"
            className="flex flex-col py-2 px-5 items-center border-2 border-gray-200 has-[:checked]:border-blue-800 rounded-lg text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer shrink-0 w-6 h-6 hidden border-gray-200 rounded text-transparent focus:ring-blue-500 cursor-pointer"
              id="hs-checkbox-group-1"
            />
            <span className="peer-checked:text-blue-800">1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 peer-checked:fill-blue-800 peer-checked:stroke-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  )
}
