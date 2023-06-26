import pymongo
import sys
import ssl

def db(file_contents):
    try:
        client = pymongo.MongoClient("mongodb+srv://jcastro2022:1riSNSeYllxZJmoi@fullstackhw.kf2vbkw.mongodb.net/")

        # Return a friendly error if a URI error is thrown
    except pymongo.errors.ConfigurationError:
        print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
        sys.exit(1)

    # Use a database named "myDatabase"
    db = client.files

    # Use a collection named "bucket"
    my_collection = db["bucket"]

    # Create a dictionary representing the file
    file_data = {
        "contents": file_contents
    }

    # Drop the collection in case it already exists
    try:
        my_collection.drop()

    # Return a friendly error if an authentication error is thrown
    except pymongo.errors.OperationFailure:
        print("An authentication error was received. Are your username and password correct in your connection string?")
        sys.exit(1)

    # Insert the file data into the collection
    try:
        result = my_collection.insert_one(file_data)

        # Return a friendly error if the operation fails
    except pymongo.errors.OperationFailure:
        print("An authentication error was received. Are you sure your database user is authorized to perform write operations?")
        sys.exit(1)
    else:
        print("The file was inserted successfully.")

    print("\n")
