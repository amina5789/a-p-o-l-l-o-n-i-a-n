import { AboutUs } from "../component/AboutUs/AboutUs"
import { GiftsSeason } from "../component/GiftsSeason/GiftsSeason"
import { GoldenHour } from "../component/GoldenHour/GoldenHour"
import { Hero } from "../component/Hero/Hero"
import { Category } from "../Section1/Category"


function Main() {
  return (
    <main >
      <Hero />
        <Category/>
        <GoldenHour/>
        <GiftsSeason/>
        <AboutUs/>
    </main>
  )
}

export default Main
