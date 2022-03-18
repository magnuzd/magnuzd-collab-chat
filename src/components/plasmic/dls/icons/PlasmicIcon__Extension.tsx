// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExtensionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExtensionIcon(props: ExtensionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.75 4.25c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12a4.71 4.71 0 00-4.38-3 4.71 4.71 0 00-4.38 3H4.25v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38l-.01-2.12h6v-2c0-.28.22-.5.5-.5zm0-2a2.5 2.5 0 00-2.5 2.5h-4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7h-.3v3.8c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7v.3h3.8c1.1 0 2-.9 2-2v-4a2.5 2.5 0 000-5v-4c0-1.1-.9-2-2-2h-4a2.5 2.5 0 00-2.5-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExtensionIcon;
/* prettier-ignore-end */
