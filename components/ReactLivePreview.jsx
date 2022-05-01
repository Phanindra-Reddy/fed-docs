import React from "react";
import Split from "react-split";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const ReactLivePreview = () => (
  <LiveProvider code="<strong>Hello World!</strong>">
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default ReactLivePreview;
