import iconArrowRight from '../../assets/icons/iconArrowRight.svg'

interface Props {
  text: string
  icon?: boolean
  small?: boolean
}

export default function UnderlineButton({ text, icon, small }: Props) {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        className={`inline-flex w-fit items-center gap-x-1 ${small ? 'text-sm' : 'text-base'} text-neutral-700 hover:text-neutral-400 focus:outline-none focus:text-neutral-400 border-b border-neutral-700`}
      >
        {text}
        {icon && (
          <img src={iconArrowRight} className="w-5 h-5" alt="Arrow Right" />
        )}
      </button>
    </div>
  )
}
