.PHONY: all fmt test example clean
all: fmt mod.ts test

colors.html:
	curl -fsSL -o colors.html https://www.w3schools.com/colors/colors_names.asp

mod.ts: gen_mod.ts colors.html
	deno --allow-read=colors.html --allow-write=mod.ts gen_mod.ts

test:
	deno test.ts

fmt:
	deno fmt test.ts example.ts scripts/*.ts

clean:
	rm -f colors.html mod.ts
