// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InsightsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InsightsIcon(props: InsightsIconProps) {
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
          "M21 8.5c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55c.34-1.07-.47-2.52-1.93-2.52-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 16.24 1 17.05 1 18.5c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55c-.34 1.07.47 2.52 1.93 2.52 1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15 9.5l.94-2.07L18 6.5l-2.06-.93L15 3.5l-.92 2.07L12 6.5l2.08.93L15 9.5zm-11.5 2l.5-2L6 9l-2-.5-.5-2-.5 2L1 9l2 .5.5 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InsightsIcon;
/* prettier-ignore-end */
