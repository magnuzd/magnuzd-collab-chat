// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StreamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StreamIcon(props: StreamIconProps) {
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
          "M20 14a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4zm8 8a2 2 0 100-4 2 2 0 000 4zm6.348-17.773L13.942 8.62l1.412 1.416 4.405-4.392-1.413-1.416zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01-.36-.35zm-6.82.01l-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32-1.42-1.41zM12 6a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StreamIcon;
/* prettier-ignore-end */
