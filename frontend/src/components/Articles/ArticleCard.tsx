import UnderlineButton from '../Buttons/UnderlineButton'

interface Props {
  coverImg: string
  title: string
  readButton: boolean
}

export default function ArticleCard({ coverImg, title, readButton }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <img
        src={coverImg}
        alt="Cover Img"
        className="w-[357px] h-[325px] object-cover"
      />
      <span className="flex flex-col gap-2">
        <p className="text-xl tracking-wide font-medium">{title}</p>
        {readButton && <UnderlineButton text={'Read More'} />}
      </span>
    </div>
  )
}
