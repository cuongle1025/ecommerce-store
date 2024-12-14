import bowlM from '../../assets/images/BowlM.png'
import InputNumber from '../Input/InputNumber'
import UnderlineButton from '../Buttons/UnderlineButton'

export default function CheckoutItemsList() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-black">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="pr-6 py-3 text-start text-sm font-semibold"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-middle text-sm font-semibold"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-middle text-sm font-semibold"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="pl-6 py-3 text-end text-sm font-semibold"
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    <div className="flex gap-4">
                      <div className="bg-[#F3F5F7] shrink-0">
                        <img src={bowlM} className="w-20 h-24 object-contain" />
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-sm font-semibold">BLANDA BLANK</p>
                        <p className="text-sm text-neutral-400">
                          Serving bowl, stainless steel, 11 &quot;
                        </p>
                        <div className="flex gap-4 items-center">
                          <UnderlineButton text="Remove" small />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <div className="flex justify-center">
                      <InputNumber small />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800">
                    $19.00
                  </td>
                  <td className="pl-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    $38.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
