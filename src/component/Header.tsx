import { Fragment } from "react";

type Props = {
  title: String;
};

export function Header({ title }: Props): JSX.Element | null {
  return (
    <Fragment>
      <header></header>
      <div className="produc-name">
        <h1>{title}</h1>
      </div>
    </Fragment>
  );
}
