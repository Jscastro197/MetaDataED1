from flask import Flask, redirect, url_for, render_template, request, session, jsonify
from db import db
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif',
                          'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'csv', 'zip', 'rar', 'mp4',
                          'mp3', 'wav', 'avi', 'mkv', 'flv', 'mov', 'wmv'])

def allowedFile(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def hello_world():
    return 'Hi'

@app.route('/upload', methods = ['POST'])
def upload():
    if request.method == 'POST':
        file = request.files.getlist('file')
        for f in file:
            filename = secure_filename(f.filename)
            if allowedFile(filename):
                db(filename)
            else:
                return jsonify({'message': 'File type not allowed'}), 400
        return jsonify({"name": filename, "status": "success"})
    else:
        return jsonify({"status": "failed"})


if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
