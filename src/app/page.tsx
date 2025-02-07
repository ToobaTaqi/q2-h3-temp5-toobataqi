import FeaturedProducts from "../components/homepage/FeaturedProducts";
import Hero from "../components/homepage/Hero";
import ClassicProduct from "../components/homepage/ClassicProduct";
import Partof from "../components/homepage/Partof";
import FeaturedSec from "../components/homepage/FeaturedSec";
import Editors from "../components/homepage/Editors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Editors />
      <FeaturedProducts />
      <ClassicProduct />
      <Partof />
      <FeaturedSec />
    </main>
  );
}