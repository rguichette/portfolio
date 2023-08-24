let LoadingPage = () => {
  return (
    <div className=" bg-slate-900 w-screen h-screen flex flex-col justify-center items-center uppercase">
      <div className="mb-8 bg-slate-400">orientaion if on phone</div>
      <div className=" bg-yellow-500 p-4">
        <h1 className="text-2xl bg-slate-200" />
        <p className="bg-green-400 inline text-2xl">Full </p> <br />
        <p className="text-8xl font-extrabold ">stack</p> <br />
        <p className="bg-red-300 inline float-right text-2xl">developer</p>
      </div>

      {/*TODO:  pnce loaded - replace with btn */}
      <div className="block bg-slate-100 mt-8">Loading</div>
    </div>
  );
};

export default LoadingPage;
