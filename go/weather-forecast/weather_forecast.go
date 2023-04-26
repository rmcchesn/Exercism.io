// Package weather provides a display ready version of the current weather
// conditions for a given city.
package weather

// CurrentCondition - the current weather condition.
var CurrentCondition string
// CurrentLocation - the current location in question.
var CurrentLocation string

// Forecast formats the weather report given a current city location and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
