"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "@/store";

function Header() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart)
  const total = getCartTotal(cart)



  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;

    console.log(input);
    if (input) {
      router.push(`search?q=${input}`);
    }
  };

  return (
    <header className="flex flex-col justify-center md:flex-row items-center bg-walmart px-4   py-3 sm:space-x-7 md:space-x-7 ">
      <Link href="/" className="sm:mb-5 mb-2 md:mb-0 ">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          alt="logo"
          height={150}
          width={150}
        />
      </Link>

      <form
        onSubmit={handlesubmit}
        className="flex items-center justify-center  flex-1 rounded-full bg-white w-full"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 sm:mr-0 md:mr-0 mr-4 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={"/basket"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "My Cart"}
            </p>

            <p>{cart.length > 0 ? `${total}` : "0.00"}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
