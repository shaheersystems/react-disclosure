import { useState } from "react";
import Disclosure from "./components/disclosure/Disclosure";
import HeroSection from "./components/HeroSection";
import data from "./data/data";
function App() {
  const [current, setCurrent] = useState(-1);
  function handle(id) {
    if (id === current) {
      setCurrent(-1);
    } else {
      setCurrent(id);
    }
  }
  return (
    <div>
      <HeroSection />

      <div className='max-w-6xl m-auto py-5'>
        <div className='w-full px-5 font-light text-3xl py-4 min-h-10 flex items-center'>
          <p className='text-center lg:text-left'>
            Some Major <b className='text-blue-900'>In-Market</b> propgramming
            languages & Frameworks
          </p>
        </div>
        <br />
        {data.map((item) => {
          return (
            <Disclosure
              key={item.id}
              title={item.title}
              content={item.content}
              isClosed={item.id === current ? false : true}
              onClick={() => handle(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
