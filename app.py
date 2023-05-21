from flask import Flask, render_template, request, url_for, redirect
from dotenv import dotenv_values
from pymongo import MongoClient

config = dotenv_values(".env")

app = Flask(__name__)

client = MongoClient(config["ATLAS_URI"])

db = client.flask_db
ed1 = db.ed1

@app.route('/', methods=('GET', 'POST'))
def index():
    return render_template('index.html')