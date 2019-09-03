import "../../../../../utils/fontello/css/fontello.css";
import React from "react";
import MorePanelWrapper from "./MorePanel.styles";
import IconBox from "../simpleElements/IconBox/IconBox.styles";

const MorePanel = () => (
  <MorePanelWrapper>
    <IconBox tabIndex="0" role="button" iconColor="#1F2023" iconSize="1.25rem">
      <i className="icon-ellipsis" />
    </IconBox>
  </MorePanelWrapper>
);

export default MorePanel;
