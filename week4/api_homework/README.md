#Memory database

##Retrieving memories

###How to retrieve all memories
**GET /memories**

###How to search by author of the memory
**GET /memories/[AUTHOR NAME]**
Eg. /memories/Rosa will return all of Rosa's memories.

###How to search by an age range
**GET /searchAge?minAge=[MINIMUM AGE AS A NUMBER]&maxAge=[MAX AGE AS A NUMBER]**
Eg. /searchAge?minAge=5&maxAge=10 will return all memories between age 5 and 10.

##Manipulating memories

###How to input a memory
**POST /memory**
Body syntax should look like the following:
{
	"author": "AUTHOR NAME HERE",
	"age": AGE AS A NUMBER,
	"location": "LOCATION OF MEMORY HERE",
	"memory": "MEMORY HERE AS A STRING"
}

###How to delete a memory
**DELETE /memory/[ID]**
Eg. /memory/12345 will delete the memory with ID 12345.
