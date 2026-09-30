import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vite-plus/test" {
  interface Matchers<R, T> extends TestingLibraryMatchers<unknown, R> {}
}
