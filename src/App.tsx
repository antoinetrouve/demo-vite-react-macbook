import { useState } from "react";
import "./App.css";
import { FetchData } from "./hook/FetchData";
import { Header } from "./component/Header";
import { ProductIcon } from "./component/ProductIcon";
import { ProductRecap } from "./component/ProductRecap";
import { OptionDetails, Selected } from "./component/OptionDetails";
import { Footer } from "./component/Footer";

export function App(): JSX.Element | null {
  // States
  const [processor, setProcessor] = useState(0);
  const [memory, setMemory] = useState(0);
  const [gpu, setGpu] = useState(0);
  const [storage, setStorage] = useState(0);
  const [finalCut, setFinalCut] = useState(false);
  const [logicPro, setLogicPro] = useState(false);

  const data = FetchData();
  const finalCutPrice = finalCut ? data.finalCut.price : 0;
  const logicProPrice = logicPro ? data.logicPro.price : 0;

  const total =
    2699 +
    data.processors[processor].price +
    data.memories[memory].price +
    data.storages[storage].price +
    data.gpus[gpu].price +
    finalCutPrice +
    logicProPrice;

  return (
    <div>
      <div>
        <Header title="MacBook Pro" />
        <div className="columns">
          <div className="macbook">
            <ProductIcon />
          </div>
          <div className="column">
            <ProductRecap
              title="Personnalisez votre MacBook Pro 15 pouces - Gris sidéral"
              processor={data.processors[processor]}
              memory={data.memories[memory]}
              gpu={data.gpus[gpu]}
              storage={data.storages[storage]}
            />
            <OptionDetails
              options={data}
              selected={{ processor, memory, gpu, storage, finalCut, logicPro }}
              onSelect={(selected: Selected) => {
                setProcessor(selected.processor);
                setMemory(selected.memory);
                setGpu(selected.gpu);
                setStorage(selected.storage);
                setFinalCut(selected.finalCut);
                setLogicPro(selected.logicPro);
              }}
            />
          </div>
        </div>
      </div>
      <Footer total={total} />
    </div>
  );
}
