import keystaticConfig, { showAdminUI } from "@/keystatic/keystatic.config";
import { makeRouteHandler } from "@keystatic/next/route-handler";

const { GET: _GET, POST: _POST } = makeRouteHandler({ config: keystaticConfig });

function rewriteUrl(request: Request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (forwardedHost && forwardedProto) {
    const url = new URL(request.url);

    url.hostname = forwardedHost;
    url.protocol = forwardedProto;
    url.port = "";

    return new Request(url, request);
  }

  return request;
}

export function GET(request: Request) {
  if (!showAdminUI) {
    return new Response(null, {
      status: 404,
    });
  }

  return _GET(rewriteUrl(request));
}

export function POST(request: Request) {
  if (!showAdminUI) {
    return new Response(null, {
      status: 404,
    });
  }

  return POST(rewriteUrl(request));
}
