// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerifiedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerifiedIcon(props: VerifiedIconProps) {
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
          "M23 11.99L20.56 9.2l.34-3.69-3.61-.82L15.4 1.5 12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 11.99l2.44 2.79-.34 3.7 3.61.82 1.89 3.2 3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69 2.44-2.8zm-3.95 1.48l-.56.65.08.85.18 1.95-2.74.62-.44.74-.99 1.68-1.78-.77-.8-.34-.79.34-1.78.77-.99-1.67-.44-.74-2.74-.62.18-1.96.08-.85-.56-.65L3.67 12l1.29-1.48.56-.65-.09-.86-.18-1.94 2.74-.62.44-.74.99-1.68 1.78.77.8.34.79-.34 1.78-.77.99 1.68.44.74 2.74.62-.18 1.95-.08.85.56.65 1.29 1.47-1.28 1.48z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.09 13.75l-2.32-2.33-1.48 1.49 3.8 3.81 7.34-7.36-1.48-1.49-5.86 5.88z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VerifiedIcon;
/* prettier-ignore-end */
