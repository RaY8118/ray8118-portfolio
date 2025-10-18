import { RevealOnScroll } from "../RevealOnScroll";
import blogsData from '../data/blogs.json';

const BlogSection = () => {
  const posts = blogsData;

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            My Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                {post.coverImage && post.coverImage.url && (
                  <img src={post.coverImage.url} alt={post.title} className="w-full h-48 object-cover rounded-t-xl mb-4" />
                )}
                <h3 className="text-2xl font-bold mb-2 text-white"><a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">{post.title}</a></h3>
                <p className="text-gray-400 mb-4 text-base flex-grow">{post.brief}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition-colors duration-200 self-start">
                  Read More
                </a>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default BlogSection;
