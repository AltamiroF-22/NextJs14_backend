import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const headersList = headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  const theme = req.cookies.get("theme");
  cookies().set("resultsperpage", "20");
  console.log(theme);
  console.log(cookies().get("resultsperpage"));

  return new Response("<h1> profile api data </h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
