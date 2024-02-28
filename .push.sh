eval $(ssh-agent -s)    
ssh-add ~/.ssh/react
git remote add origin git@github.com:jmufin777/API001.git
git branch -M main
git push -u origin main


#git branch -M main
#git push --set-upstream origin main
