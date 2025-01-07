const path = require('path');
const { name } = require("../package.json").defineXPlugin;

const address = require('address');
const LOCALHOST = address.ip() || 'localhost';
const PORT = 1024;

const rootpath = `http://${LOCALHOST}:${PORT}/`;
const buildpath = path.resolve(__dirname, '../dist');
const framepath = path.resolve(__dirname, '../index.js');
const bundlepath = path.resolve(__dirname, '../index.bundle.js');
const archivepath = path.resolve(__dirname, `../lib/${name}.zip`);

const devServer = {
    host: LOCALHOST,
    port: PORT,//设置端口号
    hot: true, // 开启webpack HRM(模块热替换)
    static: buildpath, //编译目录&serverroot
    open: true//自动打开页面
}

const sceneServer = {
    debugger: {
        addr: "http://10.100.32.63:1662/thing/share/8rwggfht7dtmbsxu",//场景地址
    },
    // deploy: {//部署信息- 目前暂未支持，todo 
    //     ip: "127.0.0.1",
    //     port: 1662,
    //     account: "",
    //     password: "",
    //     secret: ""
    // }
}

module.exports = {
    buildEvn: {
        rootpath, buildpath, framepath, bundlepath, archivepath
    },
    devServer: devServer,
    sceneServer: sceneServer
}