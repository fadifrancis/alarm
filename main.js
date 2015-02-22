var Cylon = require('cylon');
var today = setInterval(function () {timer();}, 1000);

function writeToScreen(screen, message) {
  screen.setCursor(0,0);
  screen.write(message);
}


function Joystick(xcenter, ycenter,threshold){

    this.threshold = threshold;

    this.getAxisPosition = function(sensor,center)
        {
            var pos = sensor.analogRead(); 


            if (pos < (center + threshold))
            {
                return -1;
            }
            else if ( pos > (center + threshold))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        };

}

function timer() {
var d = new Date();
return (d.toTimeString()); 
}

Cylon
  .robot({ name: 'LightSensor'})
  .connection('edison', { adaptor: 'intel-iot' })
  .device('led', { driver: 'led', pin: 13, connection: 'edison' })
  .device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })
  .device('buzzer', { driver: 'direct-pin', pin:7, connection: 'edison' })
  .device('sensor', { driver: 'analogSensor', pin: 0, connection: 'edison' })
//  .device('xaxis',{ driver: 'analogSensor', pin: 4, lowerLimit: 100, upperLimit: 900 })
//  .device('yaxis',{ driver: 'analogSensor', pin: 3, lowerLimit: 100, upperLimit: 900 })    
  .device('button', { driver: 'button', pin: 8, connection: 'edison' })



  .on('ready', function(my) {
    var ready = false;
    var sensorVal = 0;
    var value = 0;
    

//    setInterval(function() 
//    {
//        my.led.brightness = 150;
//        if (Joystick.getXaxisPosition() === -1)
//        {
//            my.led.turnOn();   
//            
//        }
//        else if (Joystick.getYaxisPosition() === 1)
//        {
//            my.led.turnOff();
//        }
//    });
//    });
//    
    function createalarmtime(today,hours,minutes){
    return new Date(today.getFullYear(),today.getMonth(), today.getDate(), hours,minutes,0,0);    
    }
   
    setInterval(function() 
    {
//        writeToScreen(my.screen,timer());
         var rightnow = new Date();
        var alarmtime = createalarmtime(rightnow,6,33);
        if (rightnow.valueOf() >= alarmtime.valueOf())
        {
            my.led.turnOn();
        }
        else{
            my.led.turnOff();
        }
         my.screen.setCursor(0,0);
         my.screen.write(rightnow.valueOf().toString());
         my.screen.setCursor(1,0);
        my.screen.write(alarmtime.valueOf().toString());
        
        
    

    
    
    },50);

  })
  .start();
    
    
    
//    setInterval(function() 
//    {
//        my.led.brightness = 75;
//        writeToScreen(my.screen,timer());
//        my.sensor.on('analogRead', function(data) {
//          sensorVal = data;    
//            }, 1000);
//        
//            
//
//
//        
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
//      }
//    },50);
//
//  })
//  .start();
//
