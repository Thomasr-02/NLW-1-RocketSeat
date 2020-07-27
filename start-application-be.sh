
cd ./back-end
ip=$(hostname -I | awk '{print $1}')
echo "==============================================="
echo "Postgres sendo executado em $ip:5432 -> Localmente";
echo "==============================================="
echo "Pgadmin4 sendo executado em $ip:80 -> Localmente";
docker-compose up -d

#echo "==============================================="
#echo "Update to dependencies"
#yarn
#echo "Updated dependencies"

echo "==============================================="
echo "Back-end sendo executado em $ip:8080 -> Localmente";
echo "==============================================="
npm start
