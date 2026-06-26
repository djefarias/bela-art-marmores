'use client';

import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaLongArrowAltRight } from 'react-icons/fa';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category?: string;
  index?: number;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  image,
  category = 'Marmoraria',
  index = 0,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative block overflow-hidden rounded-xl bg-grafite border border-white/5 transition-all duration-500 hover:shadow-card hover:border-dourado/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-dourado/20 text-dourado rounded-full border border-dourado/30">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt size={11} />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaClock size={11} />
            {readTime}
          </span>
        </div>

        <h3 className="font-heading text-lg text-white font-semibold mb-2 group-hover:text-dourado transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-dourado group/link">
          Ler mais
          <FaLongArrowAltRight
            size={12}
            className="transform transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
