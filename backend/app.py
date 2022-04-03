
from tabnanny import check
from flask import Flask, request, jsonify
from flask_cors import CORS

import pymongo
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
CORS(app)

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
    if user_db.find_one({'email': email}):
        return jsonify({'success': True}), 400
    else:
        user_db.insert_one(
            {'name': name, 'email': email, 'password': password})
        return jsonify({'success': True}), 201


@app.route('/getdata', methods=['POST'])
def getdata():
    email = request.form['email']
    user = user_db.find_one({'email': email})
    if user:
        return jsonify({'message': 'User found', 'name': user['name'], 'data': user.get('data', [])}), 200
    else:
        return jsonify({'message': 'User not found'}), 400

@app.route('/adddata', methods=['POST'])
def adddata():
    email = request.form['email']
    height = request.form['height']
    weight = request.form['weight']
    gender = request.form['gender']

    data = {
        'height': height,
        'weight': weight,
        'gender': gender

    }
    user = user_db.find_one({'email': email})
    if user:
        user_db.update_one({'email': email}, {'$set': {'data': data}})
        return jsonify({'message': 'Data added'}), 200
    else:
        return jsonify({'message': 'User not found'}), 400

@app.route('/addpath', methods=['POST'])
def addpath():
    email = request.form['email']
    path = request.form['path']
    user = user_db.find_one({'email': email})
    if user:
        user_db.update_one({'email': email}, {'$set': {'path': path}})
        return jsonify({'message': 'Path added'}), 200
    else:
        return jsonify({'message': 'User not found'}), 400

@app.route('/getpath', methods=['POST'])
def getpath():
    email = request.form['email']
    user = user_db.find_one({'email': email})
    if user:
        return jsonify({'message': 'User found', 'path': user.get('path', [])}), 200
    else:
        return jsonify({'message': 'User not found'}), 400



@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    user = user_db.find_one({'email': email})
    if user is None:
        return jsonify({'success': False}), 401
    if user['password'] == password:
        return jsonify({'success': True}), 200
    return jsonify({'success': False}), 401


@app.route('/search', methods=['POST'])
def search():
    name = request.form['name']

    user = {i['name']: i['email']
            for i in user_db.find({'name': {'$regex': ".*{}.*".format(name)}})}
    print(user)
    if user is None:
        return jsonify({'success': False}), 400
    return jsonify({'success': True, 'results': user}), 200



@app.route('/')
def index():
    return "Hello World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
