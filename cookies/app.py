# flask
from flask import Flask, render_template, make_response
app = Flask(__name__)

@app.route('/')
def cookiepage():
    resp = make_response(render_template('writecookie.html'))
    resp.set_cookie('jklopcookie', '123456')
   
    return resp
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
