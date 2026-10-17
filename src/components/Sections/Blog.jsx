import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { blogs } from '../../data/portfolioData';
import { FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 overflow-hidden select-none">
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">SPECIAL FEATURE</span>
            <span className="text-white/40">|</span>
            <span>WRITING &amp; INSIGHTS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              NOTES &amp; ARTICLES.
            </span>
          </h2>
        </div>

        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141414] border border-white/15 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.75)] hover:border-red-600 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-black/70 px-2.5 py-1 rounded border border-red-600/30">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4 text-xs font-mono text-white/50">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt />
                    {new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                  <RouterLink to={`/blog/${blog.slug}`}>{blog.title}</RouterLink>
                </h3>
                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed flex-1">{blog.shortDescription}</p>
              </div>

              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="text-center text-white/50 mt-8">No articles found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default Blog;

