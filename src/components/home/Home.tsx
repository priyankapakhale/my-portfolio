const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      <div className="bg-gray-100 min-h-screen w-full flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gray-300  rounded-full flex items-center justify-center text-6xl  shadow-2xl">
            👩‍💻
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto text-center">
          Crafting exceptional digital experiences with 7+ years of MERN stack
          expertise
        </p>
      </div>
    </section>
  );
};

export default Home;
