
from tabnanny import check
from flask import Flask, request, jsonify
import pymongo
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)

client = pymongo.MongoClient(os.environ['MONGODB'])

user_db = client.Users.users


def check_db():
    try:
        client.server_info()
        return True
    except pymongo.errors.ServerSelectionTimeoutError:
        return False


if not check_db():
    print("Database is not available")
    exit()


@app.route('/signup', methods=['POST'])
def signup():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
    user_db.insert_one({'name': name, '_id': email, 'password': password})
    return 'Success'


@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    user = user_db.find_one({'_id': email})
    if user is None:
        return jsonify({'success': False})
    if user['password'] == password:
        return jsonify({'success': True})
    return jsonify({'success': False})


@app.route('/')
def index():
    return "Hello World!"


app.run(host='127.0.0.1', port=5000, debug=True)
