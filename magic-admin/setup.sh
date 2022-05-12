#!/bin/bash

# 项目根目录
WORKSPACE=$(dirname "$PWD")
echo ${WORKSPACE}

# 全局安装lerna
npm i lerna -g

# magic依赖安装和构建
cd ${WORKSPACE}
npm run reinstall
npm run build

echo "magic依赖安装完毕 & 打包完毕"

# 移动runtime打包产物到web
rm -rf ${WORKSPACE}/magic-admin/web/public/runtime
mv -f ${WORKSPACE}/playground/dist/runtime/ ${WORKSPACE}/magic-admin/web/public

echo "移动runtime打包产物到web完毕"

# magic-admin依赖安装
cd ${WORKSPACE}/magic-admin
npm run init

# web构建
cd ${WORKSPACE}/magic-admin/web
npm run build

echo "web依赖安装完毕"

# 移动web文件到server
mkdir -p ${WORKSPACE}/magic-admin/server/assets
cp -rf ${WORKSPACE}/magic-admin/web/dist/* ${WORKSPACE}/magic-admin/server/assets

echo "移动web文件到server完毕"

# 运行server
cd ${WORKSPACE}/magic-admin/server
npm run dev

