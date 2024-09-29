import keystaticConfig, { showAdminUI } from "@/keystatic/keystatic.config";
import { makeRouteHandler } from "@keystatic/next/route-handler";

export const { POST, GET } = (() => {
  function notFoundHandler() {
    return new Response(null, {
      status: 404,
    });
  }

  if (!showAdminUI) {
    return { GET: notFoundHandler(), POST: notFoundHandler() };
  }

  return makeRouteHandler({
    config: keystaticConfig,
  });
})();
