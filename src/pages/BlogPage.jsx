import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';
import Footer from '../components/sections/Footer';
import { blogContent } from '../content/blog';

const BlogPage = () => {
  const posts = useMemo(() => blogContent.posts, []);

  return (
    <>
      <section id="blog" className="py-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
              {blogContent.title}
            </h2>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
              {blogContent.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>
                {blogContent.intro}
              </p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;


