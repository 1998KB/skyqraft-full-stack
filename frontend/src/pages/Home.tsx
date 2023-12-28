import { Dashboard } from "../components/Dashboard";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6  bg-black  text-white">
      <div className=" absolute left-4 top-4 ">
        <h1 className=" text-4xl font-bold ">Skyqraft</h1>
        <h2 className=" text-2xl ">Coding Test</h2>
      </div>
      <Dashboard />
    </div>
  );
};
