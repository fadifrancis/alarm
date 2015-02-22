var Cylon = require('cylon');
var timeInterval = setInterval(function () {timer();}, 1000);

function writeToScreen(screen, message) {
  screen.setCursor(0,0);
  screen.write(message);
}

function findtime(){
var x = new Date();
var hours = x.getHours();
var minutes = x.getMinutes();
var seconds = x.getSeconds();
}

function timer() {
var d = new Date();
return (d.toTimeString()); 
}
clearInterval(timeInterval);

Cylon
  .robot({ name: 'LightSensor'})
  .connection('edison', { adaptor: 'intel-iot' })
  .device('sensor', { driver: 'analogSensor', pin: 0, connection: 'edison' })
  .device('led', { driver: 'led', pin: 13, connection: 'edison' })
  .device('touch', { driver: 'button', pin: 7, connection: 'edison' })
  .device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })
  .device('buzzer', { driver: 'direct-pin', pin:7, connection: 'edison' })
  .on('ready', function(my) {
    var ready = false;
    var sensorVal = 0;
    var value = 0;
    

    setInterval(function() 
    {
        my.led.brightness = 150;
        if (Joystick.getXaxisPosition() === -1)
        {
            my.led.turnOn();   
            
        }
        else if (Joystick.getYaxisPosition() === 1)
        {
            my.led.turnOff();
        }
    });
    });
    
    
    
    
    
    
    
    
    
    
//    setInterval(function() 
//    {
//        my.led.brightness = 150;
//        writeToScreen(my.screen,timer());
//        my.sensor.on('analogRead', function(data) {
//          sensorVal = data;    
//            }, 1000);
//        
//                if (sensorVal < 400)
//                {
//                    my.led.turnOn();
//                                
//                    if (my.led.isOn() === true)
//                    {
//                        my.buzzer.digitalWrite(value);
//                        value = (value === 0) ? 1 : 0;
//                    }
//                }
//            
//        else{
//            my.buzzer.digitalWrite(0);
//            my.led.turnOff();
//            //writeToScreen(my.screen, "OFF!");
//        }
//    });
//
//  },1000)
//  .start();

