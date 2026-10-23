# Local verification

Required commands are `pnpm install --frozen-lockfile`, `pnpm check` and `pnpm build`. The workspace explicitly allows required esbuild/workerd binary installation.

The build emits four existing Spanish route families plus a noindex error page. Check canonical URLs, sitemap, internal anchors, image paths and the native Worker configuration against the generated output.

A build or dry run does not prove browser behavior, live weather, activation or production acceptance. Those gates require the actual served version.
