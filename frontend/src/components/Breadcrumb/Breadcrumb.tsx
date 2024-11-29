interface Props {
  itemsList: string[]
}

export default function Breadcrumb({ itemsList }: Props) {
  return (
    <>
      <ol className="flex items-center whitespace-nowrap">
        {itemsList.map((item, i) => (
          <>
            {i !== itemsList.length - 1 ? (
              <li className="inline-flex items-center" key={i}>
                <a
                  className="flex items-center text-sm text-neutral-400 hover:text-neutral-700 focus:outline-none focus:text-neutral-700"
                  href="/"
                >
                  {item}
                </a>
                <svg
                  className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </li>
            ) : (
              <li
                className="inline-flex items-center text-sm font-semibold text-neutral-700 truncate"
                aria-current="page"
                key={i}
              >
                {item}
              </li>
            )}
          </>
        ))}
      </ol>
    </>
  )
}
