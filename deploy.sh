echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* mitko@192.168.10.178:/var/www/integration-utilities/

echo "Done!"