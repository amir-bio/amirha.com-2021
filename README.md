# Amirha.com (2021)

2021 Redesign of my personal website.

## ✨ New Features

Here's a list of new features in this version compared to the last:

- New 2021 Design with updated content (Designed using `Framer`, compared to `Figma` last time)
- Significantly better responsiveness
- Typescript
- `snowpack` for local development
- Create production bundle using `esbuild`
- Configured to use `Web Test Runner` as test runner (instead of usual `jest`)
- `pnpm` as package manager
- Deployed via Github Pages (Compared to Gitlab pages and Gitlab CI last time)
- Use Chakra UI component library
- (Some) Animation
- Setup (Google) Analytics for gathering data to improve site
- [ ] Dark/Light colour themes
- [ ] Cypress Visual testing

### 🔨 Development

Ensure you've got `pnpm` installed globally: `npm i -g pnpm`

- To install all dependencies: `pnpm install`
- To run a local dev server: `pnpm start`. (This uses `snowpack` under the hood)
- To build a production bundle: `pnpm build`. (This uses `esbuild` via `snowpack`)
- To deploy a new release: `pnpm deploy`. This assumes appropriate github token is available - it will run the build
  step and push the generated dist directory to a branch called `gh-pages` which is configured to publish to the site.
