import { Fragment } from "react";
import { Information } from "../hook/FetchData";

type Props = {
  title: String;
  processor: Information;
  memory: Information;
  gpu: Information;
  storage: Information;
};

export function ProductRecap(product: Props): JSX.Element | null {
  return (
    <Fragment>
      <h2>{product.title}</h2>
      <p className="recap">{product.processor.name}</p>
      <p className="recap">Écran Retina avec affichage True Tone</p>
      <p className="recap">Touch Bar et Touch ID</p>
      <p className="recap">{product.memory.name}</p>
      <p className="recap">{product.gpu.name}</p>
      <p className="recap">{product.storage.name}</p>
      <p className="recap">Quatre ports Thunderbolt 3</p>
    </Fragment>
  );
}
