import React, {
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

type props = ComponentPropsWithoutRef<"h2"> & {
  children: ReactNode;
};

const H2 = ({ children, ...props }: props) => {
  return (
    <h2 className="text-xl font-semibold" {...props}>
      {children}
    </h2>
  );
};

export default H2;
