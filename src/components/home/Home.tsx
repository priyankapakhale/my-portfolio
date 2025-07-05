const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      <div className="bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 min-h-screen w-full flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto bg-gray-300  rounded-full flex items-center justify-center text-6xl  shadow-2xl">
            👩‍💻
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-tight">
          Priyanka Pakhale
        </h1>
        <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
          Full Stack Developer
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto text-center">
          Crafting exceptional digital experiences with 7+ years of MERN stack
          expertise
        </p>
      </div>
    </section>
  );
};

export default Home;
