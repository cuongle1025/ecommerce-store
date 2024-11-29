interface Props {
  icon: string
  text?: string
  wFull?: boolean
}

export default function IconButton({ icon, text, wFull }: Props) {
  return (
    <>
      <button
        type="button"
        className={`py-2 px-6 h-[46px] ${wFull && 'w-full'} inline-flex gap-2 items-center justify-center gap-1 text-sm font-medium rounded-lg border border-neutral-300 bg-white hover:bg-neutral-200 focus:outline-none focus:bg-neutral-200`}
      >
        <img src={icon} alt="icon" width={30} height={24} />
        {text}
      </button>
    </>
  )
}
