# fpt-test
# Development Environments


## Setup
- Frontend:
  - npm install
  - npm run start

## Testing
- Testing coverage:
  - npm run test
  - File coverage will export in coverage folder after run command

## DEPLOYMENT

- docker build -t fpt-test:<version> . 
- docker tag fpt-test:<version> asia.gcr.io/<docker_registry>/fpt-test:<version>
- docker push asia.gcr.io/<docker_registry>/<docker_image>:<tag>
- In GKE cluster, deploy k8s deployment in folder k8s via command ```kubectl apply -f prod-deployment.yaml```
- You have to change specific registry location image with docker registry.

## COMMIT STEP

- wizard:
  - git add .
  - git commit (wizard to create commit message)

## COMMIT MESSAGE CONVENTION

- type: message lower case text here
- type(package-name): message lower case text here

- type:
  - feat: A new feature
  - fix: A bug fix
  - chore: Build process or auxiliary tool changes
  - perf: A code change that improves performance
  - test: Adding missing tests
  - docs: Documentation only changes
  - ci: CI related changes
  - style: Markup, white-space, formatting, missing semi-colons...
  - refactor: A code change that neither fixes a bug or adds a feature
