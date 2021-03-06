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
	this.testParam = null; //Global storage area for most recent test parameter
	
	
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
/**
* Function to return a handle to the current Test Parameter
* @return {Parameter} Returns a handle to the current test Parameter or 1 if undefined
*/	
Debugger.prototype.getTestParameter = function(){
	if(this.testParam != null){
		return(this.testParam);
	}
	this.getWindow().alert("Error in getTestParameter(): Parameter undefined");
	return(1);
}
//----------------------------------------------------Set Methods---------------------------------------
/**
* Private function to store a global reference to the current test parameter
* @param {String} parameter a reference to the generic parameter to store
* @return {Boolean} Returns 0 on success
*/	
Debugger.prototype.setTestParam = function(parameter){
	if(parameter != null){
		this.testParam = parameter;
		return(0);
	}
	this.getWindow().alert("Error in setTestParam(): parameter is undefined");
	return(1);
}


//---------------------------------------------------Utility Methods---------------------------------------
/**
* Function to validate a passed function
* @param {FunctionHandle} func Reference to the function being validated
* @return {String} Returns a predefined error message if error otherwise 0 for pass
*/	
Debugger.prototype.FDebug = function(func){
		//Test return without arguments
		var returnTest = func();
		if(!returnTest){
			return("FDebug Error: Function with 0 arguments did not return a value");
		}
		return(0);
}
/**
* function to validate a Stage Datatype and return any definition errors
* @param {Stage} Reference to the Stage being validated
* @return {Boolean} Returns 0 on pass flags 1 for validation error
*/	
Debugger.prototype.ValidateStage = function(Stage){
		this.setTestParam(Stage);
		return(0);
}
/**
* Function to activate the debugger runtime
* @param {Boolean} flag pass true for ON and false for OFF
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