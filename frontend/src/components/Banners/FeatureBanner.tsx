import iconShipping from '../../assets/icons/iconShipping.svg'
import iconMoneyBag from '../../assets/icons/iconMoneyBag.svg'
import iconLock from '../../assets/icons/iconLock.svg'
import iconCall from '../../assets/icons/iconCall.svg'

export default function FeatureBanner() {
  const features = [
    {
      icon: iconShipping,
      h5: 'Free Shipping',
      p: 'Order above $200',
    },
    {
      icon: iconMoneyBag,
      h5: 'Money-back',
      p: '30 days guarantee',
    },
    {
      icon: iconLock,
      h5: 'Secure Payments',
      p: 'Secured by Stripe',
    },
    {
      icon: iconCall,
      h5: '24/7 Support',
      p: 'Phone and Email support',
    },
  ]
  return (
    <div className="flex flex-col flex-wrap mb-12">
      <div className="grid grid-cols-4 min-h-[220px] gap-6">
        {features.map((feature, i) => (
          <div
            className="bg-[#F3F5F7] flex flex-col gap-4 justify-center p-8"
            key={i}
          >
            <img src={feature.icon} alt="featureIcon" width={48} height={48} />
            <h5 className="text-xl font-medium">{feature.h5}</h5>
            <p className="text-sm text-neutral-400">{feature.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
