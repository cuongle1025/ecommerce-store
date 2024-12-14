export default function ContactInfoForm() {
  return (
    <>
      <div className="px-6 py-10 border border-black rounded-md">
        <h2 className="text-xl font-medium tracking-wider">
          Contact Information
        </h2>
        <form className="mt-6">
          <div className="flex gap-6">
            <div className="w-full uppercase">
              <label
                htmlFor="first-name"
                className="block text-xs font-bold mb-2 text-neutral-400"
              >
                First Name *
              </label>
              <input
                type="text"
                id="first-name"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
              />
            </div>

            <div className="w-full uppercase">
              <label
                htmlFor="last-name"
                className="block text-xs font-bold mb-2 text-neutral-400"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="last-name"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
              />
            </div>
          </div>

          <div className="w-full uppercase mt-6">
            <label
              htmlFor="phone-number"
              className="block text-xs font-bold mb-2 text-neutral-400"
            >
              Phone Number *
            </label>
            <input
              type="text"
              id="phone-number"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>

          <div className="w-full uppercase mt-6">
            <label
              htmlFor="email-address"
              className="block text-xs font-bold mb-2 text-neutral-400"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email-address"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black"
            />
          </div>
        </form>
      </div>
    </>
  )
}
