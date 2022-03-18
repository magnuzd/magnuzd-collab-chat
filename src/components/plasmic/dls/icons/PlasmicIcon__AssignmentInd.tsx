// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssignmentIndIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssignmentIndIcon(props: AssignmentIndIconProps) {
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
          "M19 4h-4.18C14.4 2.84 13.3 2 12 2c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 20H5V6h14v14zM12 7c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V19h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 17c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AssignmentIndIcon;
/* prettier-ignore-end */
