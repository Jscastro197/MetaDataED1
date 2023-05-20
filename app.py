from flask import Flask
from dotenv import dotenv_values
from pymongo import MongoClient

config = dotenv_values(".env")

app = Flask(__name__)

def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print("Connected to the MongoDB database!")

@app.teardown_appcontext
def shutdown_db_client(exception=None):
    app.mongodb_client.close()