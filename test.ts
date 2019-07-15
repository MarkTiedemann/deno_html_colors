import { runTests, test } from "https://deno.land/std@v0.11.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.11.0/testing/asserts.ts";
import htmlColors from "./mod.ts";

test(function _() {
  assertEquals(Array.isArray(htmlColors), true);
  assertEquals(htmlColors.length, 148);
});

runTests();
