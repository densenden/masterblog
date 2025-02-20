from flask import render_template, Flask, request

app = Flask(__name__)

blog_post = {'title': 'First Post', 'content': 'This is my first post'},


@app.route('/')
def hello_world():
    return render_template('index.html', posts=blog_post)




@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        # We will fill this in the next step
        pass
    return render_template('add.html')


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True)