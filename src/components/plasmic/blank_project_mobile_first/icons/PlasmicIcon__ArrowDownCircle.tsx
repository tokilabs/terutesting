// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownCircleIcon(props: ArrowDownCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M1 10.635c0 7.226 2.41 9.636 9.635 9.636 7.226 0 9.636-2.41 9.636-9.636C20.27 3.41 17.86 1 10.635 1S1 3.41 1 10.635z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.02 9.133s2.49 3.632 3.616 3.632c1.125 0 3.614-3.632 3.614-3.632"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowDownCircleIcon;
/* prettier-ignore-end */
