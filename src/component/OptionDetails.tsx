import { Fragment } from "react";
import { Information, Options } from "../hook/FetchData";
import { Option } from "./Option";
import { OptionSoftware } from "./OptionSoftware";

export type Selected = {
  processor: number;
  memory: number;
  gpu: number;
  storage: number;
  finalCut: boolean;
  logicPro: boolean;
};

type Props = {
  options: Options;
  selected: Selected;
  onSelect: (selectedValues: Selected) => void;
};

export function OptionDetails({
  options,
  selected,
  onSelect,
}: Props): JSX.Element | null {
  let selectedValues: Selected = selected;

  return (
    <div className="options">
      <div>
        <h4 className="choice-name">Processeur</h4>
        {options.processors.map(function (information, index) {
          return (
            <Option
              key={index}
              information={information}
              isSelected={index === selected.processor ? true : false}
              selectedPrice={options.processors[selected.processor].price}
              onSelectOption={() => {
                selectedValues.processor = index;
                onSelect(selectedValues);
              }}
            />
          );
        })}
      </div>
      <div>
        <h4 className="choice-name">Mémoire</h4>
        {options.memories.map(function (information, index) {
          return (
            <Option
              key={index}
              information={information}
              isSelected={index === selected.memory ? true : false}
              selectedPrice={options.memories[selected.memory].price}
              onSelectOption={() => {
                console.log("onClickOptionMemory");
                selectedValues.memory = index;
                onSelect(selectedValues);
              }}
            />
          );
        })}
      </div>
      <div>
        <h4 className="choice-name">Graphismes</h4>
        {options.gpus.map(function (information, index) {
          return (
            <Option
              key={index}
              information={information}
              isSelected={index === selected.gpu ? true : false}
              selectedPrice={options.gpus[selected.gpu].price}
              onSelectOption={() => {
                selectedValues.gpu = index;
                onSelect(selectedValues);
              }}
            />
          );
        })}
      </div>
      <div>
        <h4 className="choice-name">Stockage</h4>
        {options.storages.map(function (information, index) {
          return (
            <Option
              key={index}
              information={information}
              isSelected={index === selected.storage ? true : false}
              selectedPrice={options.storages[selected.storage].price}
              onSelectOption={() => {
                selectedValues.storage = index;
                onSelect(selectedValues);
              }}
            />
          );
        })}
      </div>
      <h3>Logiciels préinstallés</h3>
      <OptionSoftware
        information={options.finalCut}
        isSelected={selected.finalCut}
        onSelectOption={(selectedValue: boolean) => {
          selectedValues.finalCut = selectedValue;
          onSelect(selectedValues);
        }}
      />
      <OptionSoftware
        information={options.logicPro}
        isSelected={selected.logicPro}
        onSelectOption={(selectedValue: boolean) => {
          selectedValues.logicPro = selectedValue;
          onSelect(selectedValues);
        }}
      />
    </div>
  );
}
