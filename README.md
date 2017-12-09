# node-mambo-controller

Node.js on Raspberry Pi から Parrot MAMBO Fly の操作を試行するリポジトリです。

## 環境

- Raspbian version.

```
$ cat /etc/debian_version
> 8.0
```

- Node.js version.

```
$ node -v
> v6.11.0
```

## やったこと

- インストール

```
$ sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
$ npm install --save noble
$ npm install --save temporal
```

## 起動方法

```
$ sudo node index.js
```

## 参考

[sandeepmistry/noble: A Node.js BLE (Bluetooth Low Energy) central module](https://github.com/sandeepmistry/noble#prerequisites)


