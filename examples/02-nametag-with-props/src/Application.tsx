import React from "react";

type NameTagProps = {
  name: string;
  // count: number;
  // enabled: boolean;
  // items: string[];
  // status: 'loading' | 'error' | 'success';
  // anObject: {};
  // item: {
  //   id: string;
  //   title: string;
  // }
  // items: {
  //   id: string;
  //   title: string;
  // }[];
};

// type Item = {
//   id: string;
//   title: string;
// }

// type ItemPropTypes = {
//   item: Item;
//   items: Item[];
// }

// type ItemHash = {
//   [key: string]: Item;
// };

// type Dictionary = {
//   [key: number]: string;
// }

// type Functions = {
//   onHover: () => void;
//   onChange: (id: number) => void;
//   onClick(event: React.MouseEvent<HTMLButtonElement>): void;
// }

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// function subtract(a: number, b: number): number {
//   return a - b;
// }

// type OptionalProps = {
//   requiredProp: boolean;
//   optionalProp?: string;
// }

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="Steve" />;

export default Application;
