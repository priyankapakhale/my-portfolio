import { useEffect } from "react";
import debounceThrottleImage from "../../assets/blog/debounceThrottle.gif";
import magicNumbersImage from "../../assets/blog/magicNumbers.png";

const posts = [
  {
    id: "debounce-and-throttle",
    title:
      "Debounce vs Throttle in JavaScript: The Art of Saying ‘Not Yet’ and ‘Not Too Often’",
    date: "2025-06-18",
    excerpt:
      "Uncontrolled JavaScript events — like rapid keystrokes, scrolls, and resizes, can overwhelm your app and tank performance. This article shows how debounce (waiting for inactivity) and throttle (limiting calls to once every X ms) restore smooth, responsive UIs.",
    coverImage: debounceThrottleImage,
    mediumUrl:
      "https://medium.com/technogise/debounce-vs-throttle-in-javascript-the-art-of-saying-not-yet-and-not-too-often-e4f6c70fb7b6",
  },
  {
    id: "magic-numbers",
    title: "From Chaos to Clarity: Breaking the Curse of Magic Numbers",
    date: "2025-07-13",
    excerpt:
      "Hard-coded ‘magic’ numbers (e.g. if (speed > 75)) act as hidden landmines in your codebase, making maintenance brittle; this post explains why they’re problematic and how replacing them with named constants and enums brings clarity and reliability.",
    coverImage: magicNumbersImage,
    mediumUrl:
      "https://medium.com/@priyankapakahle/from-chaos-to-clarity-breaking-the-curse-of-magic-numbers-2db38e6fa28a",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="blogs" className="py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Blogs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Read my latest articles on web development, best practices, and
            tips—hosted on Medium.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={post.coverImage}
                alt={`Cover for ${post.title}`}
                className="w-full h-72 object-cover"
              />
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-600 font-medium hover:underline"
                >
                  Read on Medium →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
