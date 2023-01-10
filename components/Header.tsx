import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Link from 'next/link'
import React from 'react'
import { BellIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

type Props = {}

const Header = (props: Props) => {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <header className="mx-auto max-w-6xl">
      <nav className="flex items-center justify-between p-2 text-sm">
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

      <hr />
    </header>
  )
}

export default Header
