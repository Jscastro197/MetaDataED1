import pymongo
import sys


# Replace the placeholder data with your Atlas connection string. Be sure it includes
# a valid username and password! Note that in a production environment,
# you should not store your password in plain-text here.


try:
  client = pymongo.MongoClient("mongodb+srv://jcastro2022:1riSNSeYllxZJmoi@fullstackhw.kf2vbkw.mongodb.net/")
 
# return a friendly error if a URI error is thrown
except pymongo.errors.ConfigurationError:
  print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
  sys.exit(1)


# use a database named "myDatabase"
db = client.files


# use a collection named "recipes"
my_collection = db["bucket"]


files = [{ "name": "Test", "file_type": ["txt", "pdf"]},
       { "name": "123","file_type": ["ppt", "pdf"]}]


# drop the collection in case it already exists
try:
  my_collection.drop()  


# return a friendly error if an authentication error is thrown
except pymongo.errors.OperationFailure:
  print("An authentication error was received. Are your username and password correct in your connection string?")
  sys.exit(1)

# You can insert individual documents using collection.insert_one().
# In this example, we're going to create four documents and then
# insert them all with insert_many().


try:
 result = my_collection.insert_many(files)


# return a friendly error if the operation fails
except pymongo.errors.OperationFailure:
  print("An authentication error was received. Are you sure your database user is authorized to perform write operations?")
  sys.exit(1)
else:
  inserted_count = len(result.inserted_ids)
  print("I inserted %x documents." %(inserted_count))


  print("\n")