//completed?  ?をつけることで別に渡さなくてもいいデータとして扱える
// Pick  必要なものだけ抜き出せる
// Omit  いらないものだけ除ける
import { TodoType } from "./types/todo";

export const Todo = (
  //props: Pick<TodoType, "userId" | "title" | "completed">
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
