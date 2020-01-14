sudo rm -r AuthServer/server_data/ FlashCards/server_data/ backend/server_data

yarn install --cwd frontend
yarn install --cwd backend

docker-compose up