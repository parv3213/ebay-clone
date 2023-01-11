import { BanknotesIcon, ClockIcon } from '@heroicons/react/24/outline'
import { AuctionListing, DirectListing, ListingType } from '@thirdweb-dev/sdk'
import Image from 'next/image'
import React from 'react'

type Props = {
  listing: AuctionListing | DirectListing
}

const Listing = ({ listing }: Props) => {
  return (
    <div className="card flex flex-col justify-center space-y-2 text-left transition-all duration-150 ease-out hover:scale-105">
      {listing.asset.image ? (
        <Image
          width={100}
          height={100}
          src={listing.asset.image}
          alt="listing image"
          className="mx-auto w-44 flex-1 object-contain"
        />
      ) : null}
      <div className="space-y-4 pt-2">
        <h2 className="truncate text-lg">{listing.asset.name}</h2>
        <hr />
        <p className="mt-2 truncate text-sm text-gray-600">{listing?.asset?.description}</p>
        <p>
          <span className="mr-1 font-bold">{listing?.buyoutCurrencyValuePerToken?.displayValue}</span>{' '}
          <span>{listing?.buyoutCurrencyValuePerToken?.symbol}</span>
        </p>
        <div
          className={`ml-auto w-fit rounded-lg border p-2 text-sm text-white ${
            listing?.type === ListingType.Direct ? 'bg-blue-500' : 'bg-red-500'
          }`}>
          {listing.type === ListingType.Direct ? (
            <button className="flex items-center space-x-1">
              <span>Buy Now</span>
              <BanknotesIcon className="iconHeight" />
            </button>
          ) : (
            <button className="flex items-center space-x-1">
              <span>Auction</span>
              <ClockIcon className="iconHeight" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Listing
