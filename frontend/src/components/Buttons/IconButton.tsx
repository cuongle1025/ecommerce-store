interface Props {
  icon: string
}

export default function IconButton({ icon }: Props) {
  return (
    <>
      <button
        type="button"
        className="w-8 h-8 p-1.5 bg-white rounded-[32px] shadow-md justify-center items-center gap-2.5 inline-flex hover:bg-neutral-200 focus:outline-none focus:bg-neutral-200"
      >
        <img src={icon} alt="icon" />
      </button>
    </>
  )
}
