import { connect } from "react-redux";
import Clock from "./clock";
import Counter from "./counter";

const Examples = ({ lastUpdate, light }) => (
  <>
    <Clock lastUpdate={lastUpdate} light={light} />
    <Counter />
  </>
);

const mapStateToProps = ({ lastUpdate, light }) => ({ lastUpdate, light });

export default connect(mapStateToProps)(Examples);
