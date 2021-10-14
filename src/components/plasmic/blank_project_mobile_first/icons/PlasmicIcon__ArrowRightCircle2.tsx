// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightCircle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightCircle2Icon(props: ArrowRightCircle2IconProps) {
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
          "M1.063 17.25c0 12.14 4.047 16.188 16.187 16.188S33.438 29.39 33.438 17.25c0-12.14-4.048-16.188-16.188-16.188C5.11 1.063 1.063 5.11 1.063 17.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11.175 14.727s4.186 6.1 6.076 6.1c1.89 0 6.072-6.1 6.072-6.1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowRightCircle2Icon;
/* prettier-ignore-end */
