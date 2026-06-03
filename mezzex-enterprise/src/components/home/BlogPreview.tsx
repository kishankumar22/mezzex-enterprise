import { getLatestBlogs } from '@/services/blog/getBlogs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { formatDateShort } from '@/utils/formatDate';

export async function BlogPreview() {
  const blogs = await getLatestBlogs(3);

  return (
    <section className="py-24 bg-[#f7f9fc]">
  <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h6 className="text-[#2f5a84] font-semibold tracking-wider uppercase mb-2">Our Blog</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News & Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2f5a84]">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {blog.author}</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {formatDateShort(blog.publishedAt)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2f5a84] transition-colors line-clamp-2">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="inline-flex items-center text-[#2f5a84] font-semibold hover:text-[#4BEAFF] transition-colors mt-auto"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-[#2f5a84] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a3855] transition-colors"
          >
            View All Articles <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
