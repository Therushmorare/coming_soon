from flask import Flask, render_template, request, url_for, redirect,send_from_directory, jsonify,session, flash, send_file
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('coming_soon.html')

app.static_folder = 'static'
if __name__ == "__main":
    app.run(host='0.0.0.0',port = 5000, debug = False)#remove debug true when moving to production
