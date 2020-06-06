PWD = $(shell pwd)
VERSION = $(shell cat package.json | grep "\"version\"" | sed -e 's/^.*: "\(.*\)".*/\1/')

DOCKER_COMPOSE = ./.docker/docker-compose.yml
DOCKERFILE_NODE = ./.docker/node/Dockerfile
DOCKERFILE_NGINX = ./.docker/nginx/Dockerfile

TAG_PREFIX = docker.wouterdeschuyter.be/wouterdeschuyter.be
TAG_NODE = ${TAG_PREFIX}/node
TAG_NGINX = ${TAG_PREFIX}/nginx

all: build

clean:
	-rm -rf node_modules
	-rm -rf .next
	-rm -rf .env
	-rm -rf .build-*

node_modules: yarn.lock
	docker run --rm -v ${PWD}:/code -w /code node:14.3 yarn

lint: node_modules
	docker run --rm -v ${PWD}:/code -w /code node:14.3 yarn lint

.build-app: node_modules
	docker run --rm -v ${PWD}:/code -w /code \
			-e NEXT_PUBLIC_URL \
			-e NEXT_PUBLIC_API_ENDPOINT \
			-e NEXT_PUBLIC_RECAPTCHA_SITE_KEY \
			-e NEXT_PUBLIC_GA_TRACKING_ID \
			-e NEXT_PUBLIC_ENV \
			-e NEXT_PUBLIC_SPOTIFY_CLIENT_ID \
		node:14.3 yarn build
	touch .build-app

.build-nginx: ${DOCKERFILE_NGINX}
	docker build -f ${DOCKERFILE_NGINX} -t ${TAG_NGINX}:latest .
	touch .build-nginx

.build-node: .build-app ${DOCKERFILE_NODE}
	docker build -f ${DOCKERFILE_NODE} -t ${TAG_NODE}:latest .
	touch .build-node

build: .build-node .build-nginx
	docker tag ${TAG_NODE}:latest ${TAG_NODE}:${VERSION}
	docker tag ${TAG_NGINX}:latest ${TAG_NGINX}:${VERSION}

docker-login:
	docker login docker.wouterdeschuyter.be -u ${DOCKER_REGISTRY_USER} -p ${DOCKER_REGISTRY_PASS}

push: docker-login build
	docker push ${TAG_NODE}:latest
	docker push ${TAG_NODE}:${VERSION}
	docker push ${TAG_NGINX}:latest
	docker push ${TAG_NGINX}:${VERSION}

deploy:
	ssh ${DEPLOY_USER}@${DEPLOY_HOST} "mkdir -p ${DEPLOY_PATH}"
	scp ${DOCKER_COMPOSE} ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/docker-compose.yml
	ssh ${DEPLOY_USER}@${DEPLOY_HOST} "cd ${DEPLOY_PATH}; docker-compose pull"
	ssh ${DEPLOY_USER}@${DEPLOY_HOST} "cd ${DEPLOY_PATH}; docker-compose up -d"
