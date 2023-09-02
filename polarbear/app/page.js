import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        PolarBear 
        <br className="max-md:hidden" />
        <span className='blue_gradient text-center'> Stock Ratings by the People, for the People
        </span>
      </h1>
      <p className="desc text-center">
        Polar Bear is a rating community for educated retail 
        investors to share stock picks and rate them.
      </p>

      <Feed />

    </section>
  )
}

export default Home
