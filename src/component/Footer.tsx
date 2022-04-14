import { Price } from "./Price";

type Props = {
  total: number;
};

export function Footer({ total }: Props): JSX.Element | null {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Price value={total} />
        <button>Ajouter au Panier</button>
      </div>
    </footer>
  );
}
