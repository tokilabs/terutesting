// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightCircleIcon(props: ArrowRightCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M1 17.188c0 12.14 4.048 16.187 16.188 16.187 12.14 0 16.187-4.048 16.187-16.188C33.375 5.047 29.327 1 17.187 1 5.047 1 1 5.048 1 17.188z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11.112 14.664s4.186 6.1 6.076 6.1c1.89 0 6.073-6.1 6.073-6.1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowRightCircleIcon;
/* prettier-ignore-end */
