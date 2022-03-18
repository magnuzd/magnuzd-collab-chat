// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileCopyIcon(props: FileCopyIconProps) {
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
          "M16.5 1h-12c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4h-7c-1.1 0-1.99.9-1.99 2L6.5 21c0 1.1.89 2 1.99 2H19.5c1.1 0 2-.9 2-2V11l-6-6zm-7 16V7h6v5h5v9h-11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FileCopyIcon;
/* prettier-ignore-end */
