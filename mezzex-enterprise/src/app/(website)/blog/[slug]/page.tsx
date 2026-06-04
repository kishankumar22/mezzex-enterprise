import { getBlogBySlug } from '@/services/blog/getBlogs';
import { generatePageMetadata } from '@/seo/metadata';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { formatDate } from '@/utils/formatDate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return generatePageMetadata({ title: 'Not Found', description: '' });

  return generatePageMetadata({
    title: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage,
    path: `/blog/${slug}`,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="pt-3 pb-4 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-[#2f5a84] mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog
          </Link>

          <div className="mb-8">
            <span className="inline-block bg-[#4BEAFF]/20 text-[#2f5a84] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-[#2f5a84]" />
                <span className="font-medium text-gray-900">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#2f5a84]" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              {blog.readTime && (
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#2f5a84]" />
                  <span>{blog.readTime} min read</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-12">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-[#2f5a84] prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
