docker stack rm kodominio
docker build -t rbasstos/kodominio-front .
docker push rbasstos/kodominio-front
docker pull rbasstos/kodominio-front
docker stack deploy --compose-file stack.yml kodominio
docker stack ps kodominio