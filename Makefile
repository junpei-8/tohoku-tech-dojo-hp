include .env


login-firebase:
	@firebase login:ci

login-gcloud:
	@gcloud auth login

setup-gcloud:
	gcloud config set project ${GCP_PROJECT_ID}
	gcloud config set compute/region ${GCP_REGION}
	gcloud config set compute/zone ${GCP_ZONE}


deploy-client:
	@gcloud builds submit \
	--config ./cloudbuild.yml \
	--substitutions=\
_DOCKER_STAGE_NAME=runner,\
_PROJECT_ID=${GCP_PROJECT_ID},\
_PROJECT_NAME=${GCP_PROJECT_NAME},\
_REGION=${GCP_REGION},\
_IMAGE=${GCP_IMAGE}

deploy-hosting:
	@firebase deploy
