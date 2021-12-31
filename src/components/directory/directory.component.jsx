import React from "react";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ directory }) => (
  <div className="directory-menu">
    {directory.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
