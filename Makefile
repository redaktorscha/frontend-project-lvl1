install:
	npm ci
lint:
	npx eslint .
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
link:
	npm link @hexlet/code@1.0.0
reshim:
	asdf reshim nodejs