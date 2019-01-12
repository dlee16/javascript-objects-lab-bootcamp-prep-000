var recipes ={}

function updateObjectWithKeyAndValue(object, key, value){
var obj= {key:value}
Object.assign(recipes,...obj) 
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object.key= value
 return object
}