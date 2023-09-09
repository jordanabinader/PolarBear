import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'PolarBear',
  description: 'stock rating system by retail investors'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
            <main className='app'>
              {children}
            </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
