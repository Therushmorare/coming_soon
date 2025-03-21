from flask import Flask, render_template, request, url_for, redirect,send_from_directory, jsonify,session, flash, send_file
import time

app = Flask(__name__)

@app.route('/')
def index():
    end_time = int(time.mktime(time.strptime('22 Mar 2025 00:00:00', '%d %b %Y %H:%M:%S'))) * 1000  # Convert to milliseconds
    return render_template('coming_soon.html', end_time=end_time)

app.static_folder = 'static'
if __name__ == "__main":
    app.run(host='0.0.0.0',port = 5000, debug = False)#remove debug true when moving to production
