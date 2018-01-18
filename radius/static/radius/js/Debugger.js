/*----------------------------------------------------------------------------------------------------------
::“Copyright 2018 Clayton Burnett” 
::This program is distributed under the terms of the GNU General Public License
------------------------------------------------------------------------------------------------------------*/
/**
 * @fileOverview
 *
 * This file contains the Debugger a filter library for runtime testing
 *
 * @author Clayton Burnett <the82professional@hotmail.com>
 */
/**
 * ###############################################################################################################
 *                                              Debugger
 */
/**
 * @class
 * Class modeling a runtime debugger
 *
 * @description
 * An object describing an instance of a runtime debugger
 **/
/**
* @constructor
*/
var Debugger = function(hwnd, runtime) {
	this.windowHandle = hwnd; //The handle to the current runtime window
	this.runtimeHandle = runtime; //A handle to the runtime under test
	
	this.Active = false; //private variable indicating whether the runtime is operational
	
	
}
//-----------------------------------------------------Get Methods-----------------------------------
/**
* Function to get the active state of the debugger
* @return {Boolean} Returns true or false indicating active or not
*/	
Debugger.prototype.getActive = function(){
	return(this.Active);
}
/**
* Function to return a handle to the window under test
* @return {hwnd} Returns a handle to the testing window
*/	
Debugger.prototype.getWindow = function(){
		return(this.windowHandle);
}
/**
* Function to return a handle to the runtime under test
* @return {Runtime} Returns a handle to the runtime under test
*/	
Debugger.prototype.getRuntime = function(){
		return(this.runtimeHandle);
}
//---------------------------------------------------Utility Methods---------------------------------------

/**
* Function to activate the debugger runtime
* @return {Integer} Returns a status code indicating (0) success or (1) failure
*/	
Debugger.prototype.toggleRuntime = function(flag){
	if(flag == true || flag == 1){
		this.Active = true;
		return(0); //Return status code ok
	}
	if(flag == false || flag == 0){
		this.Active = false;
		return(0);
	}
	return(1); //return status code error due to bad input
}


//---------------------------------------------------Private Functions---------------------------------