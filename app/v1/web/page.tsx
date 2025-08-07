import { UserButton } from '@clerk/nextjs'
import React from 'react'

const v1_web = () => {
  return (
    <main >
        <header className='text-3xl text-center font-semibold text-amber-600'>NetPont V1 web</header>

        <div id='hero_uptop1' className='flex-col'>
            herouptop1
            <div className='font-semibold text-amber-500 text-4xl'>
                NetPont. A pont ami összeköt.
            </div>

            <div >
                <a href="/te/?profil=52141te_te"className="text-2xl text-amber-500 flex">
                <UserButton />
                <div className='underline hover:underline-offset-8 hover:cursor-pointer'>Profilom</div>
                </a>
            </div>

            
        </div>
    
    
    </main>
  )
}

export default v1_web