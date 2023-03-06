import { Hero, Button } from 'react-daisyui'

function App() {
  return (
      <Hero className="min-h-screen">
          <Hero.Overlay className="bg-opacity-60" />
          <Hero.Content className="text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Opus Classical</h1>
                  <p className="py-6">
                      Admin panel
                  </p>

                  <Button color="primary">Get Started</Button>
              </div>
          </Hero.Content>
      </Hero>
  )
}

export default App
