// Next.js 16 renamed Middleware to Proxy; this file must be named `proxy.ts`.
// next-intl's handler works unchanged as the proxy function.
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
