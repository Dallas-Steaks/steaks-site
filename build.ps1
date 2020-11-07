cd playback
npm run build
cp build/index.html ../playback.html
rm ../static -r
cp build/static .. -r
cd ..
