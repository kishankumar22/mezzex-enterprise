import { getBlogs } from '@/services/blog/getBlogs';
import { generatePageMetadata } from '@/seo/metadata';
import Link from 'next/link';
import Image from 'next/image';
import { formatDateShort } from '@/utils/formatDate';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Blog & Insights',
  description: 'Read the latest insights, trends, and news on technology, digital marketing, and web development from the Mezzex team.',
  path: '/blog',
});

export default async function BlogPage() {
  const { data: blogs } = await getBlogs({ page: 1, pageSize: 9 });

  return (
    <div className="pt-3 pb-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Insights and updates from our experts on digital marketing, web development, and technology trends.
          </p>
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
      </div>
    </div>
  );
}
