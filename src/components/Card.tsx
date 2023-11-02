import { ReactNode } from "react";

type props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: props) => {
  return (
    <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic">
      <h3 className="text-3xl font-bold italic">{phrase}</h3>
      <p className="text-right text-sm">{author ?? "autor desconhecido"}</p>
    </div>
  );
};
