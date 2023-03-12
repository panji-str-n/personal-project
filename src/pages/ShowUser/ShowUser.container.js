import { connect } from "react-redux";

import ShowUserComponent from "./ShowUser.component";

const mapStateToProps = (state) => {
    return {
      data: state.userData
    };
  };

export default connect(mapStateToProps)(ShowUserComponent);