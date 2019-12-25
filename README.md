# FE Articles

## QuickStart

### Development

开发环境使用了文件映射，首次启动需要在本地安装好依赖
``` bash
npm i
# 或者
yarn
```

然后启动docker
``` bash
docker-compose -f docker-compose-dev.yml up
```

### Deploy

``` bash
docker-compose up
```

api: http://localhost:3000/

