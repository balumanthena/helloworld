import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to Rangoli Restaurant 🍛
        </h1>
        <p className="text-lg text-center text-gray-700">
          Experience authentic Indian flavors with a modern touch.
        </p>
      </main>
      <Footer />
    </>
  )
}
