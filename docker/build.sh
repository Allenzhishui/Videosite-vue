npm run build
copy -r ../dist ./
docker build -t registry.cn-hongkong.aliyuncs.com/allenzhishui/videosite:v0.0.3   ./
docker push  registry.cn-hongkong.aliyuncs.com/allenzhishui/videosite:v0.0.3