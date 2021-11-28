install:
	npm ci
lint:
	npx eslint .
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
link:
	npm link @hexlet/code@1.0.0