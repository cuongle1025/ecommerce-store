import Newsletter from '../../assets/images/Newsletter.png'
import iconMail from '../../assets/icons/iconMail.svg'

export default function NewsletterBanner() {
  return (
    <div
      style={{ backgroundImage: `url(${Newsletter})` }}
      className="flex flex-col px-[450px] xl:px-[500px] gap-8 min-h-[360px] bg-cover bg-no-repeat bg-center text-center justify-center items-center"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-4xl font-medium tracking-wide">
          Join Our Newsletter
        </h4>
        <p className="text-lg font-light">
          Sign up for deals, new products and promotions
        </p>
      </div>
      <div className="w-full">
        <div className="relative">
          <input
            type="email"
            className="py-3 pe-0 ps-8 flex-inline w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-[#6c7174]/50 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-[#6c7174] focus:border-b-2 focus:ring-0"
            placeholder={'Email address'}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none">
            <img src={iconMail} alt="Mail Icon" />
          </div>
          <button
            type="button"
            className="absolute inset-y-0 end-0 items-center gap-x-2 text-sm rounded-lg border border-transparent text-neutral-400 hover:text-neutral-700 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
