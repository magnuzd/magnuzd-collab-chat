// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNotificationsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNotificationsIcon(props: CircleNotificationsIconProps) {
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
          "M12 18.5c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8.61c0-2.11-1.03-3.92-3-4.39v-.5c0-.57-.43-1-1-1-.57 0-1 .43-1 1V7c-1.97.47-3 2.27-3 4.39V14H7v2h10v-2h-1v-2.61zM14 14h-4v-3c0-1.1.9-2 2-2s2 .9 2 2v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNotificationsIcon;
/* prettier-ignore-end */
