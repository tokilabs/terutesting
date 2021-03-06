// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i13eimJzTqVDJ7txL3iZyA
// Component: LJFr6zqv-z
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: i13eimJzTqVDJ7txL3iZyA/projectcss
import * as sty from "./PlasmicLoginScreen.module.css"; // plasmic-import: LJFr6zqv-z/css

import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: HGpNZE91B3/icon
import DangerTriangleIcon from "./icons/PlasmicIcon__DangerTriangle"; // plasmic-import: zH9kLH8lqS/icon
import PasswordIcon from "./icons/PlasmicIcon__Password"; // plasmic-import: EdSL-_sszRW/icon
import LoginIcon from "./icons/PlasmicIcon__Login"; // plasmic-import: gPNF2i0Oj_9/icon
import ArrowRightCircleIcon from "./icons/PlasmicIcon__ArrowRightCircle"; // plasmic-import: ZkOzDLRbb4c/icon

export type PlasmicLoginScreen__VariantMembers = {};

export type PlasmicLoginScreen__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginScreen__VariantsArgs;
export const PlasmicLoginScreen__VariantProps = new Array<VariantPropType>();

export type PlasmicLoginScreen__ArgsType = {};
type ArgPropType = keyof PlasmicLoginScreen__ArgsType;
export const PlasmicLoginScreen__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginScreen__OverridesType = {
  root?: p.Flex<"div">;
  index?: p.Flex<"div">;
  headLine?: p.Flex<"div">;
  h1Headline?: p.Flex<"div">;
  placeHolderBase?: p.Flex<"div">;
  placeHolderBodyFrame?: p.Flex<"div">;
  user?: p.Flex<"div">;
  inputLabel?: p.Flex<"div">;
  placeHolderHeaderFrame?: p.Flex<"div">;
  headerComponent?: p.Flex<"div">;
  requiredAsterisk?: p.Flex<"div">;
  placeHolderFooterFame?: p.Flex<"div">;
  danger?: p.Flex<"div">;
  text?: p.Flex<"div">;
  placeHolderBase2?: p.Flex<"div">;
  placeHolderBodyFrame2?: p.Flex<"div">;
  password?: p.Flex<"div">;
  iconlyCurvedPassword?: p.Flex<"div">;
  inputLabel2?: p.Flex<"div">;
  placeHolderHeaderFrame2?: p.Flex<"div">;
  headerComponent2?: p.Flex<"div">;
  requiredAsterisk2?: p.Flex<"div">;
  placeHolderFooterFame2?: p.Flex<"div">;
  danger2?: p.Flex<"div">;
  footerAlarmOrDetail?: p.Flex<"div">;
  frame92?: p.Flex<"div">;
  buttom?: p.Flex<"div">;
  buttomText?: p.Flex<"div">;
  twoTone?: p.Flex<"div">;
  login?: p.Flex<"div">;
  buttom2?: p.Flex<"div">;
  arrowRightCircle?: p.Flex<"div">;
  buttomText2?: p.Flex<"div">;
  twoTone2?: p.Flex<"div">;
};

export interface DefaultLoginScreenProps {
  className?: string;
}

function PlasmicLoginScreen__RenderFunc(props: {
  variants: PlasmicLoginScreen__VariantsArgs;
  args: PlasmicLoginScreen__ArgsType;
  overrides: PlasmicLoginScreen__OverridesType;
  dataFetches?: PlasmicLoginScreen__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"index"}
            data-plasmic-override={overrides.index}
            hasGap={true}
            className={classNames(defaultcss.all, sty.index)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"headLine"}
              data-plasmic-override={overrides.headLine}
              hasGap={true}
              className={classNames(defaultcss.all, sty.headLine)}
            >
              <div
                data-plasmic-name={"h1Headline"}
                data-plasmic-override={overrides.h1Headline}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.h1Headline
                )}
              >
                {"Welcome to \nTeru"}
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"placeHolderBase"}
              data-plasmic-override={overrides.placeHolderBase}
              className={classNames(defaultcss.all, sty.placeHolderBase)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"placeHolderBodyFrame"}
                data-plasmic-override={overrides.placeHolderBodyFrame}
                hasGap={true}
                className={classNames(defaultcss.all, sty.placeHolderBodyFrame)}
              >
                <div
                  data-plasmic-name={"user"}
                  data-plasmic-override={overrides.user}
                  className={classNames(defaultcss.all, sty.user)}
                >
                  <ProfileIcon
                    className={classNames(defaultcss.all, sty.svg__ueUfD)}
                    role={"img"}
                  />
                </div>

                <div
                  data-plasmic-name={"inputLabel"}
                  data-plasmic-override={overrides.inputLabel}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.inputLabel
                  )}
                >
                  {"myusername"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"placeHolderHeaderFrame"}
                data-plasmic-override={overrides.placeHolderHeaderFrame}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.placeHolderHeaderFrame
                )}
              >
                <div
                  data-plasmic-name={"headerComponent"}
                  data-plasmic-override={overrides.headerComponent}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.headerComponent
                  )}
                >
                  {"User name"}
                </div>

                <div
                  data-plasmic-name={"requiredAsterisk"}
                  data-plasmic-override={overrides.requiredAsterisk}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.requiredAsterisk
                  )}
                >
                  {"*"}
                </div>
              </p.Stack>

              {false ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"placeHolderFooterFame"}
                  data-plasmic-override={overrides.placeHolderFooterFame}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.placeHolderFooterFame
                  )}
                >
                  <div
                    data-plasmic-name={"danger"}
                    data-plasmic-override={overrides.danger}
                    className={classNames(defaultcss.all, sty.danger)}
                  >
                    <DangerTriangleIcon
                      className={classNames(defaultcss.all, sty.svg___47KSw)}
                      role={"img"}
                    />
                  </div>

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Footer alarm, or detail"}
                  </div>
                </p.Stack>
              ) : null}
            </div>

            <div
              data-plasmic-name={"placeHolderBase2"}
              data-plasmic-override={overrides.placeHolderBase2}
              className={classNames(defaultcss.all, sty.placeHolderBase2)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"placeHolderBodyFrame2"}
                data-plasmic-override={overrides.placeHolderBodyFrame2}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.placeHolderBodyFrame2
                )}
              >
                <div
                  data-plasmic-name={"password"}
                  data-plasmic-override={overrides.password}
                  className={classNames(defaultcss.all, sty.password)}
                >
                  <div
                    data-plasmic-name={"iconlyCurvedPassword"}
                    data-plasmic-override={overrides.iconlyCurvedPassword}
                    className={classNames(
                      defaultcss.all,
                      sty.iconlyCurvedPassword
                    )}
                  >
                    <PasswordIcon
                      className={classNames(defaultcss.all, sty.svg__kqQjx)}
                      role={"img"}
                    />
                  </div>
                </div>

                <div
                  data-plasmic-name={"inputLabel2"}
                  data-plasmic-override={overrides.inputLabel2}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.inputLabel2
                  )}
                >
                  {"***************"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"placeHolderHeaderFrame2"}
                data-plasmic-override={overrides.placeHolderHeaderFrame2}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.placeHolderHeaderFrame2
                )}
              >
                <div
                  data-plasmic-name={"headerComponent2"}
                  data-plasmic-override={overrides.headerComponent2}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.headerComponent2
                  )}
                >
                  {"Password"}
                </div>

                <div
                  data-plasmic-name={"requiredAsterisk2"}
                  data-plasmic-override={overrides.requiredAsterisk2}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.requiredAsterisk2
                  )}
                >
                  {"*"}
                </div>
              </p.Stack>

              {false ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"placeHolderFooterFame2"}
                  data-plasmic-override={overrides.placeHolderFooterFame2}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    sty.placeHolderFooterFame2
                  )}
                >
                  <div
                    data-plasmic-name={"danger2"}
                    data-plasmic-override={overrides.danger2}
                    className={classNames(defaultcss.all, sty.danger2)}
                  >
                    <DangerTriangleIcon
                      className={classNames(defaultcss.all, sty.svg__r8QFz)}
                      role={"img"}
                    />
                  </div>

                  <div
                    data-plasmic-name={"footerAlarmOrDetail"}
                    data-plasmic-override={overrides.footerAlarmOrDetail}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.footerAlarmOrDetail
                    )}
                  >
                    {"Must be greater than 6"}
                  </div>
                </p.Stack>
              ) : null}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame92"}
              data-plasmic-override={overrides.frame92}
              hasGap={true}
              className={classNames(defaultcss.all, sty.frame92)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"buttom"}
                data-plasmic-override={overrides.buttom}
                hasGap={true}
                className={classNames(defaultcss.all, sty.buttom)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttomText"}
                  data-plasmic-override={overrides.buttomText}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttomText)}
                >
                  <div
                    data-plasmic-name={"twoTone"}
                    data-plasmic-override={overrides.twoTone}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.twoTone
                    )}
                  >
                    {"Login"}
                  </div>
                </p.Stack>

                <div
                  data-plasmic-name={"login"}
                  data-plasmic-override={overrides.login}
                  className={classNames(defaultcss.all, sty.login)}
                >
                  <LoginIcon
                    className={classNames(defaultcss.all, sty.svg__aDAuA)}
                    role={"img"}
                  />
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"buttom2"}
                data-plasmic-override={overrides.buttom2}
                hasGap={true}
                className={classNames(defaultcss.all, sty.buttom2)}
              >
                {false ? (
                  <div
                    data-plasmic-name={"arrowRightCircle"}
                    data-plasmic-override={overrides.arrowRightCircle}
                    className={classNames(defaultcss.all, sty.arrowRightCircle)}
                  >
                    <ArrowRightCircleIcon
                      className={classNames(defaultcss.all, sty.svg__zMaZu)}
                      role={"img"}
                    />
                  </div>
                ) : null}

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttomText2"}
                  data-plasmic-override={overrides.buttomText2}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttomText2)}
                >
                  <div
                    data-plasmic-name={"twoTone2"}
                    data-plasmic-override={overrides.twoTone2}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.twoTone2
                    )}
                  >
                    {"new here?"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "index",
    "headLine",
    "h1Headline",
    "placeHolderBase",
    "placeHolderBodyFrame",
    "user",
    "inputLabel",
    "placeHolderHeaderFrame",
    "headerComponent",
    "requiredAsterisk",
    "placeHolderFooterFame",
    "danger",
    "text",
    "placeHolderBase2",
    "placeHolderBodyFrame2",
    "password",
    "iconlyCurvedPassword",
    "inputLabel2",
    "placeHolderHeaderFrame2",
    "headerComponent2",
    "requiredAsterisk2",
    "placeHolderFooterFame2",
    "danger2",
    "footerAlarmOrDetail",
    "frame92",
    "buttom",
    "buttomText",
    "twoTone",
    "login",
    "buttom2",
    "arrowRightCircle",
    "buttomText2",
    "twoTone2"
  ],
  index: [
    "index",
    "headLine",
    "h1Headline",
    "placeHolderBase",
    "placeHolderBodyFrame",
    "user",
    "inputLabel",
    "placeHolderHeaderFrame",
    "headerComponent",
    "requiredAsterisk",
    "placeHolderFooterFame",
    "danger",
    "text",
    "placeHolderBase2",
    "placeHolderBodyFrame2",
    "password",
    "iconlyCurvedPassword",
    "inputLabel2",
    "placeHolderHeaderFrame2",
    "headerComponent2",
    "requiredAsterisk2",
    "placeHolderFooterFame2",
    "danger2",
    "footerAlarmOrDetail",
    "frame92",
    "buttom",
    "buttomText",
    "twoTone",
    "login",
    "buttom2",
    "arrowRightCircle",
    "buttomText2",
    "twoTone2"
  ],
  headLine: ["headLine", "h1Headline"],
  h1Headline: ["h1Headline"],
  placeHolderBase: [
    "placeHolderBase",
    "placeHolderBodyFrame",
    "user",
    "inputLabel",
    "placeHolderHeaderFrame",
    "headerComponent",
    "requiredAsterisk",
    "placeHolderFooterFame",
    "danger",
    "text"
  ],
  placeHolderBodyFrame: ["placeHolderBodyFrame", "user", "inputLabel"],
  user: ["user"],
  inputLabel: ["inputLabel"],
  placeHolderHeaderFrame: [
    "placeHolderHeaderFrame",
    "headerComponent",
    "requiredAsterisk"
  ],
  headerComponent: ["headerComponent"],
  requiredAsterisk: ["requiredAsterisk"],
  placeHolderFooterFame: ["placeHolderFooterFame", "danger", "text"],
  danger: ["danger"],
  text: ["text"],
  placeHolderBase2: [
    "placeHolderBase2",
    "placeHolderBodyFrame2",
    "password",
    "iconlyCurvedPassword",
    "inputLabel2",
    "placeHolderHeaderFrame2",
    "headerComponent2",
    "requiredAsterisk2",
    "placeHolderFooterFame2",
    "danger2",
    "footerAlarmOrDetail"
  ],
  placeHolderBodyFrame2: [
    "placeHolderBodyFrame2",
    "password",
    "iconlyCurvedPassword",
    "inputLabel2"
  ],
  password: ["password", "iconlyCurvedPassword"],
  iconlyCurvedPassword: ["iconlyCurvedPassword"],
  inputLabel2: ["inputLabel2"],
  placeHolderHeaderFrame2: [
    "placeHolderHeaderFrame2",
    "headerComponent2",
    "requiredAsterisk2"
  ],
  headerComponent2: ["headerComponent2"],
  requiredAsterisk2: ["requiredAsterisk2"],
  placeHolderFooterFame2: [
    "placeHolderFooterFame2",
    "danger2",
    "footerAlarmOrDetail"
  ],
  danger2: ["danger2"],
  footerAlarmOrDetail: ["footerAlarmOrDetail"],
  frame92: [
    "frame92",
    "buttom",
    "buttomText",
    "twoTone",
    "login",
    "buttom2",
    "arrowRightCircle",
    "buttomText2",
    "twoTone2"
  ],
  buttom: ["buttom", "buttomText", "twoTone", "login"],
  buttomText: ["buttomText", "twoTone"],
  twoTone: ["twoTone"],
  login: ["login"],
  buttom2: ["buttom2", "arrowRightCircle", "buttomText2", "twoTone2"],
  arrowRightCircle: ["arrowRightCircle"],
  buttomText2: ["buttomText2", "twoTone2"],
  twoTone2: ["twoTone2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  index: "div";
  headLine: "div";
  h1Headline: "div";
  placeHolderBase: "div";
  placeHolderBodyFrame: "div";
  user: "div";
  inputLabel: "div";
  placeHolderHeaderFrame: "div";
  headerComponent: "div";
  requiredAsterisk: "div";
  placeHolderFooterFame: "div";
  danger: "div";
  text: "div";
  placeHolderBase2: "div";
  placeHolderBodyFrame2: "div";
  password: "div";
  iconlyCurvedPassword: "div";
  inputLabel2: "div";
  placeHolderHeaderFrame2: "div";
  headerComponent2: "div";
  requiredAsterisk2: "div";
  placeHolderFooterFame2: "div";
  danger2: "div";
  footerAlarmOrDetail: "div";
  frame92: "div";
  buttom: "div";
  buttomText: "div";
  twoTone: "div";
  login: "div";
  buttom2: "div";
  arrowRightCircle: "div";
  buttomText2: "div";
  twoTone2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginScreen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginScreen__VariantsArgs;
    args?: PlasmicLoginScreen__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLoginScreen__Fetches;
  } & Omit<PlasmicLoginScreen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoginScreen__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLoginScreen__ArgProps,
      internalVariantPropNames: PlasmicLoginScreen__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLoginScreen__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginScreen";
  } else {
    func.displayName = `PlasmicLoginScreen.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginScreen = Object.assign(
  // Top-level PlasmicLoginScreen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    index: makeNodeComponent("index"),
    headLine: makeNodeComponent("headLine"),
    h1Headline: makeNodeComponent("h1Headline"),
    placeHolderBase: makeNodeComponent("placeHolderBase"),
    placeHolderBodyFrame: makeNodeComponent("placeHolderBodyFrame"),
    user: makeNodeComponent("user"),
    inputLabel: makeNodeComponent("inputLabel"),
    placeHolderHeaderFrame: makeNodeComponent("placeHolderHeaderFrame"),
    headerComponent: makeNodeComponent("headerComponent"),
    requiredAsterisk: makeNodeComponent("requiredAsterisk"),
    placeHolderFooterFame: makeNodeComponent("placeHolderFooterFame"),
    danger: makeNodeComponent("danger"),
    text: makeNodeComponent("text"),
    placeHolderBase2: makeNodeComponent("placeHolderBase2"),
    placeHolderBodyFrame2: makeNodeComponent("placeHolderBodyFrame2"),
    password: makeNodeComponent("password"),
    iconlyCurvedPassword: makeNodeComponent("iconlyCurvedPassword"),
    inputLabel2: makeNodeComponent("inputLabel2"),
    placeHolderHeaderFrame2: makeNodeComponent("placeHolderHeaderFrame2"),
    headerComponent2: makeNodeComponent("headerComponent2"),
    requiredAsterisk2: makeNodeComponent("requiredAsterisk2"),
    placeHolderFooterFame2: makeNodeComponent("placeHolderFooterFame2"),
    danger2: makeNodeComponent("danger2"),
    footerAlarmOrDetail: makeNodeComponent("footerAlarmOrDetail"),
    frame92: makeNodeComponent("frame92"),
    buttom: makeNodeComponent("buttom"),
    buttomText: makeNodeComponent("buttomText"),
    twoTone: makeNodeComponent("twoTone"),
    login: makeNodeComponent("login"),
    buttom2: makeNodeComponent("buttom2"),
    arrowRightCircle: makeNodeComponent("arrowRightCircle"),
    buttomText2: makeNodeComponent("buttomText2"),
    twoTone2: makeNodeComponent("twoTone2"),

    // Metadata about props expected for PlasmicLoginScreen
    internalVariantProps: PlasmicLoginScreen__VariantProps,
    internalArgProps: PlasmicLoginScreen__ArgProps
  }
);

export default PlasmicLoginScreen;
/* prettier-ignore-end */
