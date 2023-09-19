import { ReactNode } from "react";

function F({ children, id }: { children: ReactNode | JSX.Element , id: string}): JSX.Element {
  return (
    <svg
      width="902"
      height="608"
      viewBox="0 0 902 608"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M902 215C902 382.895 542.395 608 374.5 608C206.605 608 0 427.895 0 260C0 92.1054 206.605 0 374.5 0C542.395 0 902 47.1054 902 215Z"
        fill="#ECECEC"
      />
      <path
        d="M902 215C902 382.895 542.395 608 374.5 608C206.605 608 0 427.895 0 260C0 92.1054 206.605 0 374.5 0C542.395 0 902 47.1054 902 215Z"
        fill={`url(#${id})`}
      />
      <defs>{children}</defs>
    </svg>
  );
}
export default F;
"url(#paint0_linear_712_1776)";