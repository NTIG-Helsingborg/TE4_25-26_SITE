// Resolve a public-folder asset path against Vite's base URL so it works both
// at the dev root ("/") and under the GitHub Pages base ("/TE4_25-26_SITE/").
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
