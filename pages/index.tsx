import { useActiveListings, useContract } from '@thirdweb-dev/react'
import React from 'react'
import Header from '../components/Header'
import Listings from '../components/Listings'

const Home = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKET_PLACE_CONTRACT, 'marketplace')
  const { data: listings, isLoading: loadingListings } = useActiveListings(contract)

  return (
    <div className="mx-auto max-w-6xl">
      <Header />

      <Listings listings={listings} loadingListings={loadingListings} />
    </div>
  )
}

export default Home
