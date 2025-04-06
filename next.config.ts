import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  devIndicators: false,
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/lib/i18n/request.ts",
  experimental: {
    /** A path to the messages file that you'd like to create a declaration for. In case you want to consider multiple files, you can pass an array of paths. */
    createMessagesDeclaration: "./src/lib/i18n/messages/en.json",
  },
});
export default withNextIntl(nextConfig);
