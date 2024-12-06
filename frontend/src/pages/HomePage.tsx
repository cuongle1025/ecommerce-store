import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../app/store'
// import {
//   setProducts,
//   setLoading,
//   setError,
// } from '../features/Products/productsSlice'
import BannerCarousel from '../components/Carousel/BannerCarousel'
import CategoryBanner from '../components/Banners/CategoryBanner'
import UnderlineButton from '../components/Buttons/UnderlineButton'
import ProductCarousel from '../components/Products/ProductCarousel'
import FeatureBanner from '../components/Banners/FeatureBanner'
import SaleBanner from '../components/Banners/SaleBanner'
import ArticleCard from '../components/Articles/ArticleCard'
import article1 from '../assets/images/article1.png'
import article2 from '../assets/images/article2.png'
import article3 from '../assets/images/article3.png'
import NewsletterBanner from '../components/Banners/NewsletterBanner'
import CartDrawer from '../components/Cart/CartDrawer'

const HomePage: React.FC = () => {
  //   const dispatch = useDispatch()
  //   const {
  //     items: products,
  //     loading,
  //     error,
  //   } = useSelector((state: RootState) => state.products)

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       dispatch(setLoading(true))
  //       try {
  //         // Replace this with your actual API call
  //         const response = await fetch('https://api.example.com/products')
  //         const data = await response.json()
  //         dispatch(setProducts(data))
  //       } catch (err) {
  //         dispatch(setError('Failed to fetch products: ' + err))
  //       } finally {
  //         dispatch(setLoading(false))
  //       }
  //     }

  //     fetchProducts()
  //   }, [dispatch])

  //   if (loading) return <div>Loading...</div>
  //   if (error) return <div>Error: {error}</div>

  const articles = [
    {
      coverImg: article1,
      title: '7 ways to decor your home',
    },
    {
      coverImg: article2,
      title: 'Kitchen organization',
    },
    {
      coverImg: article3,
      title: 'Decor your bedroom',
    },
  ]

  return (
    <>
      <section>
        <CartDrawer />
      </section>
      <section>
        <BannerCarousel />
      </section>
      {/* <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div> */}
      <section className="flex flex-col my-[40px]">
        <div className="grid grid-cols-3 gap-6 items-center">
          <div className="font-medium text-7xl text-neutral-700 col-span-2">
            Simply Unique <span className="text-neutral-400">/</span> <br />
            Simply Better<span className="text-neutral-400">.</span>
          </div>
          <p className="text-neutral-400">
            <b className="text-neutral-500">3legant</b> is a gift &amp;
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </section>
      <section>
        <CategoryBanner />
      </section>
      <section className="flex flex-col my-[48px]">
        <div className="grid grid-cols-2">
          <h3 className="font-medium text-[40px] leading-none tracking-wide">
            New <br /> Arrivals
          </h3>
          <div className="flex items-end justify-end">
            <UnderlineButton text={'More Products'} icon />
          </div>
        </div>
        <ProductCarousel />
      </section>
      <section>
        <FeatureBanner />
      </section>
      <section className="-mx-10 md:-mx-20 lg:-mx-40 xl:-mx-80">
        <SaleBanner />
      </section>
      <section className="flex flex-col min-h-[657px] py-20 gap-10">
        <div className="grid grid-cols-2">
          <h3 className="font-medium text-[40px] leading-none tracking-wide">
            Articles
          </h3>
          <div className="flex items-end justify-end">
            <UnderlineButton text={'More Articles'} icon />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              coverImg={article.coverImg}
              title={article.title}
              readButton
            />
          ))}
        </div>
      </section>
      <section className="-mx-10 md:-mx-20 lg:-mx-40 xl:-mx-80">
        <NewsletterBanner />
      </section>
    </>
  )
}

export default HomePage
