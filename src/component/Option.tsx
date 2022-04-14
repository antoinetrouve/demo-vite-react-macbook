import { Fragment } from "react";
import { Information } from "../hook/FetchData";
import { Price } from "./Price";

type Props = {
  information: Information;
  isSelected: boolean;
  selectedPrice: number;
  onSelectOption: () => void;
};

export function Option({
  information,
  isSelected,
  selectedPrice,
  onSelectOption,
}: Props): JSX.Element | null {
  const className = isSelected
    ? "vertical-choice" + " selected"
    : "vertical-choice";
  return (
    <div className={className} onClick={onSelectOption}>
      <span className="choice-name">{information.name}</span>
      <span className="choice-price">
        <Price value={information.price - selectedPrice} />
      </span>
    </div>
  );
}
