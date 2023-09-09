import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text_left'>
        <span className='blue_gradient'>{type} theory</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share your reasoning behind your stock rating and pick to strengthen faction argument.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Unleash Your Genius</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your theory here...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Stock Picks 
            <br />
            <span className='font-normal text-sm'>(#AAPL, #MSFT, #NVDA)</span>
          </span>
          <input
            value={post.pick}
            onChange={(e) => setPost({ ...post, tag: e.target.value})}
            placeholder='#StockPick'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 bm-5 gap-4'>

          <Link href='/' className='text-gray-500 text-sm hover:underline'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm hover:bg-blue-300 bg-blue-600 rounded-full text-white'
          >
            {submitting ? `${type}ing...`: type}
          </button>

        </div>

      </form>
    </section> 
  )
}

export default Form
