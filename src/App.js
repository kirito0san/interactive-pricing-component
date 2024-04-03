import PageViews from "./components/PageViews";
import SimpleTraffic from "./components/SimpleTraffic";
import StartMyTrail from "./components/StartMyTrial";


function App() {
  return (
    <div className="flex flex-col items-center text-center font-Manrope App">
      <SimpleTraffic />
      <div className="flex w-[90%] md:w-fit flex-col gap-2 bg-white shadow-2xl flex-co rounded-xl ">
        <PageViews />
        <hr className="w-full" />
        <StartMyTrail />
      </div>
    </div>
  );
}

export default App;
