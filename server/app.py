from flask import Flask, jsonify, request
from flask_cors import CORS


# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})
data = {
    'count': 0
} 
# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/counter', methods=['POST', 'GET'])
def counter() : 
    response_object = {'status': 'success'}
    if request.method == 'POST': 
        data['count'] = data['count'] + 1
        response_object['message'] = f'count is now: {data["count"]}'
    else: 
        response_object['count'] = data["count"]
    return jsonify(response_object)


if __name__ == '__main__':
    app.run()
