import Image from "next/image";
import Link from "next/link";

export const posts = [
  {
    id: 1,
    title: "How to create a blog",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    date: "May 31, 2023",
    slug: "how-to-create-a-blog",
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "Dark Mode Done Right",
    excerpt: "Much longer bunch of ridiculous text to fill up this space with some overflow which will be hidden by the line clamp feature - that is to say, everything below the nth line will be replaced by an ellipsis!",
    date: "May 2, 2023",
    slug: "dark-mode-done-right",
    image: "/images/p2.png",
  },
];

export default function RecentPosts() {
  return (
    <div className='space-y-2 mb-10'>
      <h2 className='text-white text-xl sm:text-2xl md:text-3xl font-semibold'>
        Recent Posts
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => {
          return (
            <div key={post.id} className="group rounded-xl overflow-hidden 
            bg-[#0B0B0B]border border-white/10 transition-all duration-300
            hover:-translate-y-1 hover:border-white/20">
              {/* image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.image} alt={post.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105" fill />
                
                <div className="absolute inset-0 bg-black/30"/> {/* overlay */}
              </div>
              {/* content */}
              <div className="p-5 space-y-3">
                <time>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </time>
                <h3 className="text-semibold text-lg text-white leading-snug
                group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/articles/${post.slug}`} className="inline-block text-sm text-indigo-400
                font-medium hover:underline">Read article →</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
