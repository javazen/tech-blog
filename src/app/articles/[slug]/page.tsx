import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuPen, LuTrash } from 'react-icons/lu'

export default function ArticleDetailPage() {
  return (
    <article className='max-w-3xl mx-auto py-20 px-6'>
      <header className='mb-10'>
        <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4'>
          Building a Medium-style blog with NextJS
        </h1>

        <div className='flex items-center gap-4 text-sm text-gray-400'>
          <span>By Javazen</span>
          <span>•</span>
          <span>Feb 28, 2026</span>
        </div>
      </header>

      <div className='relative w-full h-55 sm:h-80 lg:h-105 mb-12'>
        <Image src="/images/p1.png" alt="article title" fill className='object-cover rounded-2xl' />
      </div>

      {/* article content */}
      <div className='max-w-none text-gray-400'>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum architecto praesentium, assumenda delectus, excepturi fuga unde reiciendis nesciunt quo sit dolore tenetur qui cumque ab maiores dignissimos sunt illo.
        </p>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum architecto praesentium, assumenda delectus, excepturi fuga unde reiciendis nesciunt quo sit dolore tenetur qui cumque ab maiores dignissimos sunt illo.
        </p>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum architecto praesentium, assumenda delectus, excepturi fuga unde reiciendis nesciunt quo sit dolore tenetur qui cumque ab maiores dignissimos sunt illo.
        </p>
      </div>

      <div className='border-t border-white/10 my-16' />

      <div className='flex items-center gap-2 justify-end'>
        <Link href="#" className='inline-flex items-center not-[]:gap-2
        px-3 py-1.5 rounded-full text-sm font-medium
        text-indigo-400 border border-indigo-400/20
        hover:border-indigo-400/40 hover:bg-indigo-400/10 transition'>
          <LuPen />
          Edit
        </Link>
        <button type="button" className='inline-flex items-center gap-2
        px-3 py-1.5 rounded-full text-sm font-medium
        text-red-400 border border-red-400/20
        hover:border-red-400/40 hover:bg-red-400/10 
        transition cursor-pointer
        disabled:cursor-not-allowed'>
          <LuTrash />
          Delete
        </button>
      </div>

      <div>
        <Link href="/articles" className='mt-16 text-indigo-400 
        hover:text-indigo-300 transition-colors'>
          ← Back to all articles
        </Link>
      </div>
    </article>
  )
}
