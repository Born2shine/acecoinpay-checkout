import { Suspense } from "react"
import { Checkout } from "./pages"

const App = () => {

  return (
    <>
      <Suspense fallback={<div className="w-screen h-screen bg-isDark text-isWhite5 flex items-center justify-center"> Loading... </div>}>
        <section className="w-screen h-screen overflow-y-scroll">
          <Checkout/>
        </section>
      </Suspense>
    </>
  )
}

export default App
