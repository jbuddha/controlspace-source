hexo generate
git stage *
git commit -m $1
git push origin master
cd output
git stage *
git commit -m $1
git push origin master