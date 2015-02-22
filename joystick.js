var Joystick = {

    xcenter : 511, threshold :0, ycenter: 511, pin_x: 0, pin_y:0
};


Joystick
	.getXaxisPosition(function()
	{
		var x = analogRead(pin_x); 


		if (x < (xcenter - threshold))
		{
			return -1;
		}
		else if ( x > (xcenter + threshold))
		{
			return 1;
		}
		else
		{
			return 0;
		}
	});
Joystick
	.getYaxisPosition(function()
	{
		var y = analogRead(pin_y); 


		if (y < (ycenter - threshold))
		{
			return -1;
		}
		else if ( y > (ycenter + threshold))
		{
			return 1;
		}
		else
		{
			return 0;
		}
	});


