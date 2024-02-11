import GridOption from "@/components/GridOption";

export default function page() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 sm:gap-6 gap-2 m-3 sm:m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wordrabe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://links.papareact.com/S2u"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-yellow-200 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match Boy"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-pink-200 h-64 "
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="https://links.papareact.com/4y0"
          className="bg-pink-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
