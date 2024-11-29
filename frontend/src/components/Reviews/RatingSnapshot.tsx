import StarRoundedIcon from '@mui/icons-material/StarRounded'

export default function RatingSnapshot() {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-full gap-3">
        <div className="flex">
          <span>1</span>
          <StarRoundedIcon color="action" />
        </div>
        <div className="flex w-full items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-800 text-xs text-white text-center whitespace-nowrap transition duration-500"
              style={{ width: '83%' }}
            ></div>
          </div>
          <div className="text-end">
            <span className="text-sm text-gray-800">10</span>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full gap-3">
        <div className="flex">
          <span>2</span>
          <StarRoundedIcon color="action" />
        </div>
        <div className="flex w-full items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-800 text-xs text-white text-center whitespace-nowrap transition duration-500"
              style={{ width: '8.3%' }}
            ></div>
          </div>
          <div className="text-end">
            <span className="text-sm text-gray-800">1</span>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full gap-3">
        <div className="flex">
          <span>3</span>
          <StarRoundedIcon color="action" />
        </div>
        <div className="flex w-full items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-800 text-xs text-white text-center whitespace-nowrap transition duration-500"
              style={{ width: '8.3%' }}
            ></div>
          </div>
          <div className="text-end">
            <span className="text-sm text-gray-800">1</span>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full gap-3">
        <div className="flex">
          <span>4</span>
          <StarRoundedIcon color="action" />
        </div>
        <div className="flex w-full items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-800 text-xs text-white text-center whitespace-nowrap transition duration-500"
              style={{ width: '0%' }}
            ></div>
          </div>
          <div className="text-end">
            <span className="text-sm text-gray-800">0</span>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full gap-3">
        <div className="flex">
          <span>5</span>
          <StarRoundedIcon color="action" />
        </div>
        <div className="flex w-full items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-800 text-xs text-white text-center whitespace-nowrap transition duration-500"
              style={{ width: '0%' }}
            ></div>
          </div>
          <div className="text-end">
            <span className="text-sm text-gray-800">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
