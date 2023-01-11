import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Link from 'next/link'
import React from 'react'
import { BellIcon, ShoppingCartIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {}

const otherLinks = [
  'Home',
  'Electronics',
  'Computers',
  'Video Games',
  'Home & Garden',
  'Health & Beauty',
  'Collectibles and Art',
  'Books',
  'Music',
  'Deals',
  'Other',
  'More',
]

const Header = (props: Props) => {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <header className="w-full p-2 text-sm">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {address ? (
            <button className="connectWalletBtn" onClick={disconnect}>
              Hi, {address.slice(0, 5) + '...' + address.slice(-4)}
            </button>
          ) : (
            <button className="connectWalletBtn" onClick={connectWithMetamask}>
              Connect your wallet
            </button>
          )}
          <span className="smallHidden">Daily Deals</span>
          <span className="smallHidden">Help & Contact</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="smallHidden">Ship to</span>
          <span className="smallHidden">Sell</span>
          <span className="smallHidden">
            Watchlist
            <ChevronDownIcon className="iconHeight my-auto" />
          </span>
          <Link href="/addItem" className="link flex items-center">
            Add to Inventory
            <ChevronDownIcon className="iconHeight" />
          </Link>
          <BellIcon className="iconHeightLarge" />
          <ShoppingCartIcon className="iconHeightLarge" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="my-5 flex items-center space-x-2">
        <div className="h-16 w-16 flex-shrink-0 sm:w-28 md:w-44">
          <Link href={'/'}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
              alt="ebay logo"
              height={100}
              width={100}
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
        <div className="smallHidden">
          <span className="flex items-center justify-start space-x-2 text-gray-600">
            Shop by
            <br />
            category
            <ChevronDownIcon className="iconHeight" />
          </span>
        </div>

        <div className="flex flex-1 items-center space-x-2 border-2 border-black px-2 py-2 text-base md:px-5">
          <MagnifyingGlassIcon className="iconHeight text-gray-400" />
          <input type="text" placeholder="Search for anything" className="flex-1 outline-none" />
        </div>
        <button className="btn smallHidden border-2 border-blue-600 bg-blue-600 text-base text-white">Search</button>
        <button className="btn border-2 border-blue-600 text-base text-blue-600 hover:bg-blue-600/30 hover:text-white">
          List Item
        </button>
      </section>

      <hr className="mt-2" />

      <div className="mt-4 flex w-full justify-evenly space-x-2">
        {otherLinks.map((link, index) => {
          return (
            <span
              key={index}
              className={`link text-gray-600 ${index > 2 && index <= 6 ? 'hidden md:block' : ''} ${
                index > 6 ? 'hidden lg:block' : ''
              }`}>
              {link}
            </span>
          )
        })}
        <span className="link block">More</span>
      </div>
    </header>
  )
}

export default Header
