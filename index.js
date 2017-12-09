'use strict';

const RollingSpider = require('rolling-spider');
const rollingSpider = new RollingSpider();
const temporal = require('temporal');

rollingSpider.connect(function() {
  console.log('connect done.');
  rollingSpider.setup(function() {
    console.log('setup done.');
    rollingSpider.flatTrim();
    rollingSpider.startPing();
    rollingSpider.flatTrim();

    temporal.queue([
      {
        delay: 5000,
        task: function () {
          console.log('start takeoff.');
          rollingSpider.takeOff();
          rollingSpider.flatTrim();
          console.log('takeoff done.');
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('start land.');
          rollingSpider.land();
          console.log('land done.');
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('exit.');
          temporal.clear();
          process.exit(0);
        }
      }
    ]);
  });
});
