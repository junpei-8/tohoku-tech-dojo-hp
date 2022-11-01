include .env

OPTION := ${option}

up:
	docker compose up || docker compose rm -fsv

down:
	docker compose rm -fsv

login-firebase:
	firebase login:ci

login-gcp:
	gcloud auth login

setup-gcp:
	gcloud config set project ${GCP_PROJECT_ID}
	gcloud config set compute/region ${GCP_REGION}
	gcloud config set compute/zone ${GCP_ZONE}

gcloud-submit-builds:
	gcloud builds submit --tag ${GCP_ENTRY_IMAGE} .

gcloud-deploy:
	gcloud run deploy ${GCP_PROJECT_ID} --project ${GCP_PROJECT_ID} --region ${GCP_REGION} --image ${GCP_ENTRY_IMAGE} --platform managed --allow-unauthenticated

prod-deploy-from-local:
	docker build -t ${GCP_IMAGE} .
	docker tag ${GCP_IMAGE} ${GCP_ENTRY_IMAGE}
	docker push ${GCP_ENTRY_IMAGE}

firebase-deploy:
	firebase deploy
