import { LinkedIn } from "./providers/LinkedIn.js";
import { Twitter } from "./providers/Twitter.js";

const providers = [LinkedIn, Twitter];

export const providerRemotePatterns = Object.fromEntries(
  providers.map((provider) => [provider.name, provider.config])
);

function remotePatterns(providers: [() => unknown]) {
  return providers
    .map((provider) => providerRemotePatterns[provider.name])
    .filter(Boolean);
}

export default remotePatterns;
