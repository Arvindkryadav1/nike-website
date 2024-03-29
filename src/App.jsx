// import Nav from "./Sections/Nav"
import Nav from "./Components/Nav"
import Hero from "./Sections/Hero"
import PopularProducts from "./Sections/PopularProducts"
import SuperQuality from "./Sections/SuperQuality"
import Services from "./Sections/Services"
import SpecialOffers from "./Sections/SpecialOffers"
import CustomerReviews from "./Sections/CustomerReviews"
import Subscribe from "./Sections/Subscribe"
import Footer from "./Sections/Footer"


const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <Nav />
   <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
   </section>
   <section className="padding">
    <PopularProducts />
   </section>
   <section className="padding">
    <SuperQuality />
   </section>
   <section className="padding-x py-10"> 
    <Services />
   </section>
   <section className="padding">
    <SpecialOffers />
   </section>
   <section className="padding bg-pale-blue">
   <CustomerReviews />
   </section>
   <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
   </section>
   <section className="padding bg-black padding-x padding-t pb-8">
    <Footer />
   </section>
  </main>
)

export default App;