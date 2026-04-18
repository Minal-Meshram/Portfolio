declare module "react-resizable-panels" {
  import * as React from "react";

  type PanelGroupProps = {
    children: React.ReactNode;
    direction?: "horizontal" | "vertical";
    className?: string;
    style?: React.CSSProperties;
  };

  type PanelProps = {
    children: React.ReactNode;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    className?: string;
    style?: React.CSSProperties;
  };

  type PanelResizeHandleProps = {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  };

  export const PanelGroup: React.FC<PanelGroupProps>;
  export const Panel: React.FC<PanelProps>;
  export const PanelResizeHandle: React.FC<PanelResizeHandleProps>;
}
