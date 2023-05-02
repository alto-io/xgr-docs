import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - XGR Documentation",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Cross Game Renderer" />
      <meta
        property="og:description"
        content="Cross Game Renderer: Display and animate NFTs in any game"
      />
    </>
  ),
  logo: <img src="/opg.png" />,
  project: {
    link: "https://github.com/alto-io/cross-game-renderer",
  },
  docsRepositoryBase: "https://github.com/alto-io/xgr-docs",
  footer: {
    text: (
      <a
          href="https://www.opgames.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
               Made with ❤ by OP Games
      </a>
    )
  },
  primaryHue: 199,
  banner: {
    key: "GameDevJS",
    text: (
      <a
        href="https://itch.io/jam/gamedevjs-2023"
        target="_blank"
        rel="noreferrer"
      >
        XGR is being used in Gamedev.js 2023. Read more →
      </a>
    ),
  },
};

export default config;
