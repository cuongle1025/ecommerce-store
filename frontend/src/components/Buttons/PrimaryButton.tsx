interface Props {
  text: string
  wFull?: boolean
}

export default function PrimaryButton({ text, wFull }: Props) {
  return (
    <>
      <button
        type="button"
        className={`py-2 px-6 h-[46px] ${wFull && 'w-full'} inline-flex items-center justify-center gap-1 text-sm font-medium rounded-lg bg-neutral-600 text-neutral-100 hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none`}
      >
        {text}
      </button>
    </>
  )
}
