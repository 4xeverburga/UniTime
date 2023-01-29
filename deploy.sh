set -e 

npm run build 
cd dist 

# gh pages hosting workaround
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:4xeverburga/Acostavengers-web.git master:gh-pages    

cd -