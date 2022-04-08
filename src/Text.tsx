//　　　　　コンポーネントの型指定

//同じ名前の場合省略できる
//<p style={{ color:color, fontSize:fontSize }}>

import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト</p>;
};
