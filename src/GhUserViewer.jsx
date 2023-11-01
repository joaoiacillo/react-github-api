import { JsonViewer, defineDataType } from "@textea/json-viewer";
import PropTypes from "prop-types";

const ViewerImage = (props) => (
  <img height="50" width="50" src={props.value} alt={props.value} />
);

ViewerImage.propTypes = {
  value: PropTypes.string,
};

const imageDataType = defineDataType({
  is: (value) =>
    typeof value === "string" &&
    value.startsWith("https://avatars.githubusercontent.com"),
  Component: ViewerImage,
});

export const GhUserViewer = ({ value }) => {
  return <JsonViewer value={value} valueTypes={[imageDataType]} />;
};

GhUserViewer.propTypes = {
  value: PropTypes.object,
};
