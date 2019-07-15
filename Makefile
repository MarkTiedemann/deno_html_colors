.PHONY: all fmt test eg clean
all: fmt mod.ts test eg

colors.html: scripts/download_colors.ts
	deno --allow-net --allow-write=colors.html scripts/download_colors.ts

mod.ts: scripts/parse_colors.ts colors.html
	deno --allow-read=colors.html --allow-write=mod.ts scripts/parse_colors.ts

test:
	deno test.ts

fmt:
	deno fmt test.ts example.ts scripts/*.ts

eg:
	deno example.ts

clean:
	rm colors.html mod.ts
