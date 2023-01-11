import { AuctionListing, DirectListing } from '@thirdweb-dev/sdk'
import React from 'react'
import Listing from './Listing'

type Props = {
  listings: (AuctionListing | DirectListing)[] | undefined
  loadingListings: boolean
}

const Listings = ({ listings, loadingListings }: Props) => {
  return (
    <main className="mt-4 p-5 md:mt-10">
      {loadingListings ? (
        <p className="animate-pulse text-center text-blue-500">Loading listings...</p>
      ) : (
        <div className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings?.map((listing) => {
            return <Listing key={listing.id} listing={listing} />
          })}
        </div>
      )}
    </main>
  )
}

export default Listings
