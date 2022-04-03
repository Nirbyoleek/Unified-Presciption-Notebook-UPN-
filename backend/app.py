
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

# Add CORS support

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


@app.route('/search', methods=['POST'])
def search():
    name = request.form['name']
    user = list(i['name'] for i in user_db.find({'name': { '$regex': ".*{}.*".format(name)}}, {'name':1}))
    if user is None:
        return jsonify({'success': False})
    return jsonify({'success': True, 'user': user})



@app.route('/')
def index():
    return "Hello World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
