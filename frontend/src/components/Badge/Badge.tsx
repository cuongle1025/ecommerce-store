interface Props {
  text: string
  textColor: string
  bgColor: string
}

export default function Badge({ text, textColor, bgColor }: Props) {
  return (
    <>
      <span
        className={`inline-flex justify-center items-center gap-x-1.5 h-6 px-3.5 py-1 rounded-md text-base uppercase font-medium ${bgColor} ${textColor}`}
      >
        {text}
      </span>
    </>
  )
}
