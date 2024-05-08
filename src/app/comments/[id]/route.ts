import { comments } from "../data";

export interface ParamsProps {
  params: {
    id: string;
  };
}
// utils
export function findIndex(id: string) {
  const index = comments.findIndex((comment) => comment.id === Number(id));
  return index;
}

export function find(id: string) {
  const comment = comments.find((comment) => comment.id === Number(id));
  return comment;
}
//------------

export async function GET(_req: Request, { params }: ParamsProps) {
  const comment = find(params.id);
  return Response.json(comment);
}

export async function PATCH(req: Request, { params }: ParamsProps) {
  const body = await req.json();
  const { text } = body;
  const index = findIndex(params.id);
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(_req: Request, { params }: ParamsProps) {
  const index = findIndex(params.id);
  const deletedComment = comments.splice(index, 1);
  return Response.json(deletedComment);
}
