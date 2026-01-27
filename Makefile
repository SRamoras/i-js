up:
	docker compose up --build

build:
	docker build -t i-js .

run: build
	docker run --rm -it -v "$(CURDIR)":/app i-js npm run start

bash: build
	docker run --rm -it -v "$(CURDIR)":/app i-js bash