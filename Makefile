include .env

OPTION := ${option}

build:
	docker build -t ${GCP_IMAGE} .

run:
	docker run -ti --rm -p ${PORT}:${PORT} --name ${GCP_PROJECT_NAME} ${GCP_IMAGE}

up: build run

down:
	docker rm -f $(shell docker container ls -q -f "name=${GCP_PROJECT_NAME}")

push:
	docker build -t ${GCP_IMAGE} .
	docker tag ${GCP_IMAGE} ${GCP_HOST_NAME}/${GCP_PROJECT_ID}/${GCP_IMAGE}
	docker push ${GCP_HOST_NAME}/${GCP_PROJECT_ID}/${GCP_IMAGE}

login-firebase:
	firebase login:ci

login-gcp: gcloud auth login

setup-gcp:
	gcloud config set project ${GCP_PROJECT_ID}
	gcloud config set compute/region ${GCP_REGION}
	gcloud config set compute/zone ${GCP_ZONE}

prod-build:
	gcloud builds submit --tag ${GCP_HOST_NAME}/${GCP_PROJECT_ID}/${GCP_IMAGE} .

prod-deploy:
	gcloud run deploy ${GCP_PROJECT_ID} --project ${GCP_PROJECT_ID} --region ${GCP_REGION} --image ${GCP_HOST_NAME}/${GCP_PROJECT_ID}/${GCP_IMAGE} --platform managed --allow-unauthenticated



hosting:
	firebase deploy