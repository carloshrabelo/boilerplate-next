import classNames from "classnames";
import style from "./style.scss";
import { format } from "./fn";

export default ({ lastUpdate, light }) => (
  <div className={classNames(style.clock, { [style.light]: light })}>
    {format(new Date(lastUpdate))}
  </div>
);
