import { Fragment } from "react";
import { Information } from "../hook/FetchData";
import { Price } from "./Price";

type Props = {
  information: Information;
  isSelected: boolean;
  onSelectOption: (selectedValue: boolean) => void;
};

export function OptionSoftware({
  information,
  isSelected,
  onSelectOption,
}: Props): JSX.Element | null {
  return (
    <div>
      <h4 className="choice-name">{information.name}</h4>
      <div className="horizontal-choice">
        <div
          className={"horizontal-item" + (!isSelected ? " selected" : "")}
          onClick={() => {
            onSelectOption(false);
          }}
        >
          <span className="choice-name">Aucun</span>
          {isSelected && <Price value={-information.price} />}
        </div>
        <div
          className={"horizontal-item" + (isSelected ? " selected" : "")}
          onClick={() => {
            onSelectOption(true);
          }}
        >
          <span className="choice-name">{information.name}</span>
          {!isSelected && <Price value={information.price} />}
        </div>
      </div>
    </div>
  );
}
