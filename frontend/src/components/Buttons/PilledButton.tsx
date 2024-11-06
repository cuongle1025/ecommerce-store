interface Props {
  text: string
}

export default function PilledButton({ text }: Props) {
  return (
    <>
      <button
        type="button"
        className="py-1.5 px-10 inline-flex items-center gap-x-2 text-base font-medium rounded-full border border-neutral-700 bg-white text-neutral-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
      >
        {text}
      </button>
    </>
  )
}
