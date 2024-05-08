import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const headersList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  return new Response("<h1> profile api data </h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
