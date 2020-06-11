
#START_TIME=$SECONDS
cd ./back-end
docker-compose down
ip=$(hostname -I | awk '{print $1}')
echo "------------------------------------------------"
echo "Postgres sendo executado em $ip:5432";
echo "------------------------------------------------"
echo "Pgadmin4 sendo executado em $ip:80";
echo "------------------------------------------------"
echo "Back-end sendo executado em $ip:8080";
echo "------------------------------------------------"

docker-compose up -d

cd ../front-end
echo "------------------------------------------------"
echo "Update to dependencies"
yarn
echo "Updated dependencies"

echo "------------------------------------------------"
echo "Front-end sendo executado em $ip:3000"
echo "------------------------------------------------"
yarn start
#! Time calculated to prepare docker enviroment in seconds
#ELAPSED_TIME=$(($SECONDS - $START_TIME))
#echo "------------------------------------------------"
#echo "$ELAPSED_TIME secs for docker initialization"
#echo "------------------------------------------------"
