// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhereToVoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhereToVoteIcon(props: WhereToVoteIconProps) {
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
          "M12 .755c-4.41 0-8 3.59-8 8 0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82c.3-.33 7.26-8.1 7.26-13.67 0-4.41-3.59-8-8-8zm0 19.47c-2.18-2.61-6-7.93-6-11.47 0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm-1.53-9.3l-1.76-1.77-1.42 1.42 3.18 3.18 6.01-6.01-1.41-1.42-4.6 4.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhereToVoteIcon;
/* prettier-ignore-end */
