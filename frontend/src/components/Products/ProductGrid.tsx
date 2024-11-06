import ProductCard from './ProductCard'
import PilledButton from '../Buttons/PilledButton'

export default function ProductGrid() {
  const productInfos = [
    {
      id: 1,
      name: 'Table',
      price: 180,
    },
    {
      id: 2,
      name: 'Char',
      price: 200,
    },
    {
      id: 3,
      name: 'Sock',
      price: 312.12,
    },
    {
      id: 4,
      name: 'Glass',
      price: 250,
    },
    {
      id: 5,
      name: 'Plant',
      price: 101,
    },
    {
      id: 6,
      name: 'Bed',
      price: 550,
    },
    {
      id: 7,
      name: 'Pot',
      price: 550,
    },
    {
      id: 8,
      name: 'Glove',
      price: 550,
    },
    {
      id: 9,
      name: 'Fan',
      price: 550,
    },
  ]
  return (
    <>
      <div className="grid grid-cols-3 gap-y-6">
        {productInfos.map((product, i) => (
          <div
            key={i}
            className={
              i % 3 === 0
                ? 'justify-self-start'
                : i % 3 === 1
                  ? 'justify-self-center'
                  : 'justify-self-end'
            }
          >
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <PilledButton text={'Show more'} />
      </div>
    </>
  )
}
