import { UAParser } from "ua-parser-js";
import { headers } from "next/headers";

function getBaseDomain(url: any) {
  if (!url) return "No referer";
  const hostname = new URL(url).hostname;
  const parts = hostname.split(".");
  return parts.length > 2 ? parts.slice(-2).join(".") : hostname;
}

const Fetch = async (gclid: any) => {
  const { get } = headers();
  const ua = get("user-agent");
  const parser = new UAParser(ua || "").getResult();
  const headersList = headers();
  const referer = headersList.get("referer");
  const hostName = getBaseDomain(referer);

  let ip = headers().get("x-forwarded-for");
  const res = await fetch(`http://localhost:3000/api`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip,
      gclid,
      parser,
      referrer: hostName,
    }),
  });
  const data = await res.json();
  return data;
};

export default Fetch;
