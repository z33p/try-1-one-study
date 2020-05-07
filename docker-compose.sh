sudo rm -r data

yarn install --cwd frontend
yarn install --cwd webAPIs/uranus
cd frontend && yarn build

docker-compose up