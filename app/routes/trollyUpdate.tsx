import { json } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async () => {
  const trollyUpdate = await (
    await fetch("https://reqres.in/api/products/3")
  ).json();
  return json(trollyUpdate);
};
