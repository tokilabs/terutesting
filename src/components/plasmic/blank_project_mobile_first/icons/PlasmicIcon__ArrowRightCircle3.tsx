// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightCircle3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightCircle3Icon(props: ArrowRightCircle3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 38"}
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
          "M1 18.73c0 13.295 4.433 17.728 17.73 17.728 13.295 0 17.728-4.433 17.728-17.729S32.025 1 18.73 1 1 5.433 1 18.73z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.075 15.966s4.585 6.681 6.655 6.681c2.07 0 6.65-6.681 6.65-6.681"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowRightCircle3Icon;
/* prettier-ignore-end */
