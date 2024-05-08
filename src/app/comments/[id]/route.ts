import { comments } from "../data";

export interface ParamsProps {
  params: {
    id: string;
  };
}

export async function GET(_req: Request, { params }: ParamsProps) {
  const comment = comments.find((comment) => comment.id === Number(params.id));
  return Response.json(comment);
}

export async function PATCH(req: Request, { params }: ParamsProps) {
  const body = await req.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
}
