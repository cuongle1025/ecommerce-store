import Rating from '../Rating/Rating'
import Avatar from '../Avatar/Avatar'
import PilledButton from '../Buttons/PilledButton'

export default function ReviewContent() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <>
          <div className="flex flex-col" key={index}>
            <div className="inline-flex justify-between mb-4">
              <Rating readOnly />
              <span className="text-sm text-neutral-400 font-light">
                {month}/{day}/{year}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Blanda Blank Bowl</h2>
            <p className="text-neutral-400 mb-4">
              These are my favorite bowls anywhere! I have several of them in
              different sizes and use them on a daily basis.
            </p>
            <div className="inline-flex mt-2 items-center gap-2">
              <Avatar />
              <span className="text-sm text-neutral-400 font-light">
                Cuong Le
              </span>
            </div>
          </div>
          {index !== 4 && <hr className="my-6 border-neutral-300" />}
        </>
      ))}
      <div className="flex justify-center mt-6">
        <PilledButton text="Load more" />
      </div>
    </>
  )
}
