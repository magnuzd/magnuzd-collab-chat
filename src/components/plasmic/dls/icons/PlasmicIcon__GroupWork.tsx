// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupWorkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupWorkIcon(props: GroupWorkIconProps) {
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
          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8 16a2 2 0 100-4 2 2 0 000 4zm4-6a2 2 0 100-4 2 2 0 000 4zm4 6a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupWorkIcon;
/* prettier-ignore-end */
