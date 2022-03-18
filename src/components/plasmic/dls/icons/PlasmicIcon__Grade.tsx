// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GradeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GradeIcon(props: GradeIconProps) {
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
          "M12 7.63l1.44 3.4 1.2.1 2.47.21-2.79 2.42.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-2.79-2.42 2.47-.21 1.2-.1.47-1.11.97-2.27zm0-5.13L9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GradeIcon;
/* prettier-ignore-end */
